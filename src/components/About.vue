<template>
  <section class="section-about" v-intersection-observer="onIntersectionObserver" ref="root">
    <div class="about">
      <h2 class="title">О нас</h2>
      <div class="subtitle">Закажите сейчас и оцените красоту природы</div>

      <div class="cards">
        <div class="card">
          <div class="img">
            <img src="./../assets/icons/about-1.png" alt="">
          </div>
          <div class="text">Большой Ассортимент</div>
          <div class="description">мы предлагаем множество различных типов продуктов с меньшим количеством вариаций в каждой категории.</div>
        </div>

        <div class="card">
          <div class="img">
            <img src="./../assets/icons/about-2.png" alt="">
          </div>
          <div class="text">Быстрая и бесплатная доставка</div>
          <div class="description">срок доставки 4 дня или меньше, бесплатная доставка и возможность ускоренной доставки.</div>
        </div>

        <div class="card">
          <div class="img">
            <img src="./../assets/icons/about-3.png" alt="">
          </div>
          <div class="text">Поддержка 24/7</div>
          <div class="description">ответы на любые вопросы, связанные с бизнесом 24/7 и в режиме реального времени.</div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'
import { vIntersectionObserver } from '@vueuse/components'

const root = ref(null)

const onIntersectionObserver = ([{ isIntersecting }] ) => {
  if(isIntersecting) root.value.classList.add('visible')
}

</script>

<style lang="scss" scoped>
@import '@/globals';

.section-about {
  padding: 0 9.6rem 9.6rem;
  max-width: 144rem;
  margin: 0 auto;
  opacity: 0;
  transform: translateX(-50rem) scale(0);
  transition: all 0.7s ease-in-out;
  & *::selection {
        background-color: $color-black-25;
        color: $color-black;
      }

  &.visible {
    opacity: 1;
    -webkit-animation: slide-left 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.2s both;
    animation: slide-left 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.2s both;
  }
  .about {
    text-align: center;
    .title {
      font-size: 3.2rem;
      font-weight: 600;
    }

    .subtitle {
      font-size: 1.8rem;
      font-weight: 500;
      color: $color-black-5;
      margin: 1.2rem 0 4.8rem;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.4rem;

      .card {
        display: inline-flex;
        flex-direction: column;
        max-width: 400px;
        justify-self: center;

        .img {
          padding: 2.8rem;
          background-color: $color-main;
          border-radius: 10rem;
          align-self: center;
        }

        .text {
          font-size: 1.8rem;
          font-weight: 700;
          margin-top: 2.4rem;

        }

        .description {
          margin-top: 1.2rem;
          font-size: 1.8rem;
          line-height: 1.35;
          font-weight: 500;
          color: $color-black-5;
        }
      }
    }
  }
}

</style>