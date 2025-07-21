<template>
  <VueLenis root :options="lenisOptions" />
  <div class="app">
    <Nav />
    <Hero />
    <Selling />
    <About />
    <Categories />
    <Testimonials />
    <Footer />
  </div>
</template>

<script setup>
import { VueLenis, useLenis } from 'lenis/vue' // Also available as global imports, no need to import them manually
import { watch } from 'vue'

const lenisOptions = {
  // lenis options (optional)
}

const lenis = useLenis((lenis) => {
  // called every scroll
  console.log(lenis)
})

watch(
  lenis,
  (lenis) => {
    // lenis instance
    console.log(lenis)
  },
  { immediate: true }
)

import Nav from "@/components/Nav.vue"
import Hero from "@/components/Hero.vue"
import Selling from "@/components/Selling.vue"
import About from "@/components/About.vue"
import Categories from "@/components/Categories.vue"
import Testimonials from "@/components/Testimonials.vue"
import Footer from "@/components/Footer.vue"
</script>

<style lang="scss">
.app {
  overflow-x: hidden;
}
</style>
