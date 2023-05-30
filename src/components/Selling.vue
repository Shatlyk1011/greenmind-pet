<template>
  <section class="section-selling">
    <div class="selling">
      <div class="best">
        <h3>Самые продаваемые растения</h3>
        <h4>Самый простой способ вести здоровый образ жизни — покупать любимые растения</h4>
        <button>Посмотреть еще &rarr;</button>
      </div>
    </div>

    <div class="cards">
      <div class="card" v-for="card in cards">
        <img :src="card.imgUrl" :alt="card.title">
        <div class="card__title">{{ card.title }}</div>
        <div class="card__price">&#8369; {{ card.price }}.00</div>
      </div>
    </div>
  </section>
</template>

<script setup>
let cards = [
  {title: 'Natural Plants', price: 1400, imgUrl: 'https://images.unsplash.com/photo-1545239705-1564e58b9e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'},

  {title: 'Natural Plants', price: 1400, imgUrl: 'https://images.unsplash.com/photo-1545239705-1564e58b9e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'},
  {title: 'Natural Plants', price: 900, imgUrl: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'},


  {title: 'Natural Plants', price: 900, imgUrl: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'},
  {title: 'Natural Plants', price: 3500, imgUrl: 'https://images.unsplash.com/photo-1545239705-1564e58b9e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'},
  ]
</script>

<style lang="scss" scoped>
@import '@/globals';
.section-selling {
  display: flex;
  padding: 9.6rem;
  max-width: 144rem;
  margin: 0 auto;
  .selling {
    max-width: 20rem;
    margin-right: 6rem;
    justify-self: flex-start;
     .best {
      h3 {
        font-size: 3.2rem;
        font-weight: 500;
      }

      h4 {
        margin-top: 1.2rem;
        color: $color-black-5;
        font-weight: 500;
        line-height: 1.4;
      }

      button {
        all: unset;
        padding: 1.2rem 2.4rem;
        background-color: $color-main;
        border-radius: 0.8rem;
        margin-top: 2.4rem;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        font-weight: 500;

        &:hover {
          background-color: rgba($color-main, 0.7)
        }
      }
    }
  }
  .cards {
    display: flex;
    width: 100vw;
    gap: 4.8rem;
    // overflow-x: scroll;
    .card {
      border-radius: 1.2rem;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      flex-shrink: 0;
      flex-grow: 1;
      overflow: hidden;
      flex-basis: 25rem;
      img {
        display: inline-block;
        width: 100%;
        height: 100%;
        object-fit: cover;

        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }
      &__title {
        font-size: 1.8rem;
        font-weight: 500;
        margin-top: auto;
      }

      &__price {
        color: $color-black-5;

      }
    }
  }
}
</style>