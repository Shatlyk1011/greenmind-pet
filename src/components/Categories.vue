<template>
  <section class="section-categories" v-intersection-observer="onIntersectionObserver" ref="root">
    <div class="title">Категории</div>
    <div class="subtitle">Найдите то, что ищете</div>

    <div class="categories">
      <div class="cards">
        <div class="card" v-for="card in cards" :key="card.title">
          <img :src="card.imgUrl" :alt="card.title">
          <p>{{ card.title }}</p>
        </div>
      </div>
      <button>Посмотреть &rarr;</button>
    </div>


  </section>
</template>

<script setup>
import { ref } from 'vue'
import { vIntersectionObserver } from '@vueuse/components'

const  cards = [
{title: 'Натуральные растения', imgUrl: 'https://images.unsplash.com/photo-1569350080887-dd38c27caad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'}, 
{title: 'Аксессуары для растений', imgUrl: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'},
{title: 'Искусственные растения', imgUrl: 'https://images.unsplash.com/photo-1508502726440-477c94bc369e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'},
]

const root = ref(null)

const onIntersectionObserver = ([{ isIntersecting }] ) => {
  if(isIntersecting) root.value.classList.add('visible')
}

</script>

<style lang="scss" scoped>
@import '@/globals';
.section-categories {
  text-align: center;
  padding: 0 0 9.6rem;
  opacity: 0;
  &.visible {
    opacity: 1;
    -webkit-animation: slide-right 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.2s both;
    animation: slide-right 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.2s both;
  }
  .title {
    font-size: 3.2rem;
    font-weight: 600;
  }

  .subtitle {
    font-size: 1.8rem;
    font-weight: 500;
    color: $color-black-5;
    margin: 1.2rem 0 6.4rem 0;
  }

  .categories {
    background-color: $color-main;
    .cards {
      display: flex;
      justify-content: space-evenly;
      max-width: 144rem;
      margin: 0 auto;

      .card {
        max-width: 36rem;
        transition: all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940);

        &:nth-child(odd) {
          margin-top: -4.8rem;
        }
        &:nth-child(even) {
          margin-top: 4.8rem;
        }

        img {
          width: 100%;
          height: clamp(30rem, 50rem, 100%);
          object-fit: cover;
          border-radius: 1.2rem;

          &:hover {
            transform: scale(1.05) translateY(-0.5rem);
            z-index: 20;
            /* add box shadow */
          }
        }

        p {
          font-size: 1.8rem;
          font-weight: 700;
          margin-top: 1.2rem;
        }
      }
      &:hover .card:not(:hover) {
          transform: scale(0.95);
        }
    }

    button {
      all: unset;
      margin: 2.4rem 0 10rem 0;
      padding: 1.2rem 2.4rem;
      background-color: #fff;
      border-radius: 0.8rem;
      font-size: 1.8rem;
      font-weight: 500;
      cursor: pointer;

      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #eee;
      }

    }
  }
}
</style>