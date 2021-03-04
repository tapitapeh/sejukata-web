<template>
  <section class="container mx-auto px-10">
    <ul
      class="gap-5 gap-y-20 grid grid-cols-1 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3"
    >
      <li v-for="item in ip.items" :key="item.title" class="">
        <nuxt-link :to="`/${item.url}`">
          <div class="flex flex-wrap">
            <div
              class="w-full relative mb-4 overflow-hidden"
              style="padding-top: 100%;"
            >
              <img
                v-if="item.coverImage"
                :src="item.coverImage.url"
                alt=""
                width="100%"
                height="100%"
                class="object-cover h-full absolute top-0 left-0"
              />
              <img
                v-else
                src="http://unsplash.it/500/500?gravity=center"
                alt=""
                class="object-cover h-full absolute top-0 left-0"
              />
            </div>
            <div class="">
              <h2
                class="font-medium font-theme text-xl sm:text-2xl md:text-3xl"
              >
                {{ item.title }}
              </h2>
              <p class="mt-4 text-gray-400">
                {{ item.subtitle }}
                <span
                  class="text-xl text-t-blue transition hover:text-t-blue-dark hover:underline"
                  ><nuxt-link :to="`/${item.url}`">→</nuxt-link></span
                >
              </p>
              <div class="flex items-center mt-6 text-xs text-gray-400 italic">
                <div>
                  <img
                    :src="item.author.image.url"
                    class="rounded-full w-4 h-4"
                    alt=""
                  />
                </div>
                <p class="ml-2">
                  {{ item.author.name }} • {{ dateTime(item.datetime) }}
                </p>
              </div>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { blogsQuery } from "@/graphql/blogCollection";
import RichTextRenderer from "contentful-rich-text-vue-renderer";
export default {
  head() {
    return {
      title: "Tulisan Berbicara, Hati Mendengar"
      // description
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
  methods: {
    dateTime(_date) {
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

      if (_date) {
        const d = new Date(_date);
        const year = d.getFullYear();
        const date = d.getDate();
        const monthIndex = d.getMonth();
        const monthName = months[monthIndex];

        return `${date} ${monthName} ${year}`;
      }

      return "";
    }
  },
  apollo: {
    ip: {
      query: blogsQuery,
      prefetch: true,
      loadingKey: "loading"
    }
  }
};
</script>
