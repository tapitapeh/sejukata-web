<template>
  <nav class="fixed w-full bg-white z-50">
    <div class="relative container h-16 flex justify-between mx-auto">
      <div
        class="absolute sm:relative left-0 h-full z-10 px-2 flex items-center lg:px-0"
      >
        <router-back to="/" class="router-back"> </router-back>
      </div>

      <div
        class="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0"
      >
        <nuxt-link to="/">
          <img
            src="~assets/img/sejukata-logo.svg"
            alt=""
            class="h-8 hidden sm:block"
          />
          <img
            src="~assets/img/sejukata-icon.svg"
            alt=""
            class="h-8 block sm:hidden"
          />
        </nuxt-link>
      </div>

      <div
        class="absolute sm:relative  z-10 px-2 flex items-center lg:px-0"
      ></div>
    </div>
  </nav>
</template>

<style>
.router-back.nuxt-link-active {
  @apply hidden;
}
</style>
