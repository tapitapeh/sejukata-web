<template>
  <section class="container mx-auto px-10">
    <ul class="gap-5 grid grid-cols-1 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="item in ip.items" :key="item.title" class="">
        <nuxt-link :to="`/${item.url}`">
          <div class="flex flex-wrap">
            <div class="mb-4 w-full">
              <img
                v-if="item.coverImage"
                :src="item.coverImage.url"
                alt=""
                width="1000"
                height="1000"
                class="h-full object-cover w-full"
              />
              <img
                v-else
                src="http://unsplash.it/500/500?gravity=center"
                alt=""
                class="h-full object-cover w-full"
              />
            </div>
            <div class="">
              <h2
                class="font-medium font-theme text-xl sm:text-2xl md:text-3xl"
              >
                {{ item.title }}
              </h2>
              <p class="mt-4 text-gray-500">
                {{ item.subtitle }}
                <span
                  class="text-t-blue-dark transition italic hover:text-t-blue hover:underline"
                  ><nuxt-link :to="`/${item.url}`"
                    >Baca seterusnya</nuxt-link
                  ></span
                >
              </p>
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
  apollo: {
    ip: {
      query: blogsQuery,
      prefetch: true,
      loadingKey: "loading"
    }
  }
};
</script>
