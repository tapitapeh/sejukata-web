<template>
  <div
    class="container mx-auto px-8 flex flex-col items-center justify-center text-center space-y-2"
  >
    <p class="uppercase tracking-widest text-xs">Penulis</p>
    <img :src="item.image.url" alt="" class="w-80 h-80" />
    <p class="text-lg font-bold">{{ item.name }}</p>
    <p class="text-sm">{{ item.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>
