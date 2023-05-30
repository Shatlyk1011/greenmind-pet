<template>
  <div class="app" >  
    <Nav/>
    <Hero/>
    <Selling/>
    <About/>
    <Categories/>
    <Testimonials/>
    <Footer/>
  </div>
</template>

<script setup>
import Nav from '@/components/Nav.vue';
import Hero from '@/components/Hero.vue';
import Selling from '@/components/Selling.vue';
import About from '@/components/About.vue';
import Categories from '@/components/Categories.vue';
import Testimonials from '@/components/Testimonials.vue';
import Footer from '@/components/Footer.vue';
</script>

<style lang="scss">
  
  .app {
    overflow-x: hidden;
  }
</style>