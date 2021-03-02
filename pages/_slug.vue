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
          class="font-theme font-semibold text-center sm:text-2xl md:text-3xl lg:text-5xl"
        >
          {{ ip.items[0].title }}
        </h1>
        <p></p>
      </div>
      <div v-if="ip.items[0].coverImage" class="mt-10 px-10">
        <img
          :src="ip.items[0].coverImage.url"
          alt=""
          class="h-full object-cover w-full"
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
        <RichTextRenderer :document="ip.items[0].content.json" />
      </article>
    </div>
  </section>
</template>

<script>
import { blogsQuery } from "@/graphql/blog";
import RichTextRenderer from "contentful-rich-text-vue-renderer";
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

<style lang="">
::selection {
  background: #53d0ec; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #53d0ec; /* Gecko Browsers */
}
</style>
