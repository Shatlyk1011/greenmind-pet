<template>
  <section class="section-categories">
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
const  cards = [
{title: 'Натуральные растения', imgUrl: 'https://images.unsplash.com/photo-1569350080887-dd38c27caad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'}, 
{title: 'Аксессуары для растений', imgUrl: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'},
{title: 'Искусственные растения', imgUrl: 'https://images.unsplash.com/photo-1508502726440-477c94bc369e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'},
]

</script>

<style lang="scss" scoped>
@import '@/globals';
.section-categories {
  text-align: center;
  padding: 0 0 9.6rem;
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
        max-width: 36rem;;

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
        }

        p {
          font-size: 1.6rem;
          font-weight: 700;
          margin-top: 1.2rem;
        }
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