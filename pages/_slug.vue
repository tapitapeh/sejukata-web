<template>
  <section
    v-if="loading > 0"
    class="flex min-h-screen items-center justify-center"
  >
    Sedang menulis...
  </section>
  <section v-else class="container mx-auto">
    <div class="">
      <div class="mx-auto w-2/3">
        <h1
          class="font-theme font-semibold text-center text-xl sm:text-2xl md:text-3xl lg:text-5xl"
        >
          {{ ip.items[0].title }}
        </h1>
        <p class="mt-6 text-center text-gray-500 text-sm">{{ dateTime }}</p>
      </div>
      <div v-if="ip.items[0].coverImage" class="mt-10 px-10">
        <img
          :src="ip.items[0].coverImage.url"
          alt=""
          class="h-full mx-auto object-cover w-full md:max-h-70vh md:w-auto"
        />
        <p class="mt-2 text-xs text-center text-gray-600 italic">
          {{ ip.items[0].coverImage.title }}
          <span v-if="ip.items[0].coverImage.description"
            >—
            <a :href="ip.items[0].coverImage.description">{{
              ip.items[0].coverImage.description
            }}</a></span
          >
        </p>
      </div>
      <article class="my-10 mx-auto px-10 transition prose lg:px-0 lg:prose-xl">
        <RichTextRenderer
          :document="ip.items[0].content.json"
          :nodeRenderers="getRenderOptions(ip.items[0].content.links)"
        />
      </article>
    </div>
    <div class="container mx-auto px-10">
      <ShareThis
        v-if="ip.items[0]"
        :sharing="sharing"
        :sosmed="sosmed"
      ></ShareThis>
    </div>
    <div class="container mx-auto px-10 mt-20">
      <Disqus shortname="sejukata"></Disqus>
    </div>
  </section>
</template>

<script>
import { blogsQuery } from "@/graphql/blog";
import RichTextRenderer from "contentful-rich-text-vue-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export default {
  head() {
    return {
      title: this.loading <= 0 ? this.ip.items[0].title : "",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.loading <= 0 ? this.ip.items[0].subtitle : ""
        }
      ],
      htmlAttrs: {
        lang: "id",
        amp: true
      }
    };
  },
  components: {
    RichTextRenderer
    // applauseButton
  },
  computed: {
    dateTime() {
      const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
      ];

      if (this.loading <= 0 && this.ip.items[0].datetime) {
        const d = new Date(this.ip.items[0].datetime);
        const year = d.getFullYear();
        const date = d.getDate();
        const monthIndex = d.getMonth();
        const monthName = months[monthIndex];

        return `${date} ${monthName} ${year}`;
      }

      return "";
    },
    sosmed() {
      return ["facebook", "twitter", "whatsapp"];
    },
    sharing() {
      let res = {};
      if (process.browser) {
        res = {
          url: window.location.href,
          title: this.ip.items[0].title,
          description: this.ip.items[0].description,
          quote: this.ip.items[0].description,
          hashtags: "sejukata",
          twitterUser: "sejukata"
        };
      }
      return res;
    }
  },
  methods: {
    getRenderOptions(links) {
      // create an asset block map

      const assetBlockMap = new Map();

      // loop through the assets and add them to the map

      for (const asset of links.assets.block) {
        assetBlockMap.set(asset.sys.id, asset);
      }

      return {
        [BLOCKS.EMBEDDED_ASSET]: (node, next, h, key) => {
          const asset = assetBlockMap.get(node.data.target.sys.id);

          // return h("img", { src: asset.url });
          return h("div", {}, [
            h("img", { attrs: { src: asset.url } }),
            h("p", { class: "text-center text-sm italic" }, asset.title)
          ]);
        }
      };
    }
  },
  data() {
    return {
      loading: 0,
      ip: {}
    };
  },
  apollo: {
    ip: {
      query: blogsQuery,
      prefetch: true,
      loadingKey: "loading",
      variables() {
        return {
          slug: this.$route.params.slug
        };
      }
    }
  }
};
</script>
