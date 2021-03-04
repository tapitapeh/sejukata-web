<template>
  <div
    v-if="item"
    class="container mx-auto px-8 flex flex-col items-center justify-center text-center space-y-2"
  >
    <p class="uppercase tracking-widest text-xs">Penulis</p>
    <img v-if="item.image" :src="item.image.url" alt="" class="w-80 h-80" />
    <p v-if="item.name" class="text-lg font-bold">{{ item.name }}</p>
    <p v-if="item.description" class="text-sm">{{ item.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>
