<template>
  <div class="text-black font-default min-h-screen flex flex-col">
    <div style="flex-grow: 1;">
      <AppHeader></AppHeader>
      <nuxt class="md:pt-20" />
    </div>
    <AppFooter class="items-end mt-10"></AppFooter>
  </div>
</template>

<style>
::selection {
  background: #53d0ec; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #53d0ec; /* Gecko Browsers */
}
</style>
