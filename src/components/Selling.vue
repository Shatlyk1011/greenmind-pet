<template>
  <section
    class="section-selling"
    v-intersection-observer="onIntersectionObserver"
    ref="root"
  >
    <div class="btns">
      <button class="prevEl">
        <svg
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>
      </button>
      <button class="nextEl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 448 512"
        >
          <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
          />
        </svg>
      </button>
    </div>

    <div class="selling">
      <div class="best">
        <h3>Самые продаваемые растения</h3>
        <h4>
          Самый простой способ вести здоровый образ жизни — покупать любимые
          растения
        </h4>
        <button>Посмотреть еще &rarr;</button>
      </div>
    </div>

    <swiper
      class="cards"
      :modules="[Navigation]"
      :navigation="{ prevEl: '.prevEl', nextEl: '.nextEl' }"
      :space-between="48"
      :slides-per-view="'auto'"
    >
      <swiper-slide class="card" v-for="(card, index) in cards" :key="index">
        <div class="img">
          <img :src="card.imgUrl" :alt="card.title" />
          <!-- show on hover -->
          <div class="img__label"><span>Подробнее</span></div>
        </div>
        <div class="card__title">{{ card.title }}</div>
        <div class="card__price">&#8369; {{ card.price }}.00</div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { vIntersectionObserver } from "@vueuse/components"
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/navigation"

let cards = [
  {
    title: "Natural Plants",
    price: 1400,
    imgUrl:
      "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },

  {
    title: "Natural Plants",
    price: 1400,
    imgUrl:
      "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },

  {
    title: "Natural Plants",
    price: 1400,
    imgUrl:
      "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },

  {
    title: "Natural Plants",
    price: 1400,
    imgUrl:
      "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },

  {
    title: "Natural Plants",
    price: 900,
    imgUrl:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  },
  {
    title: "Natural Plants",
    price: 3500,
    imgUrl:
      "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
]

const root = ref(null)

const onIntersectionObserver = ([{ isIntersecting }]) => {
  if (isIntersecting) root.value.classList.add("visible")
}
</script>

<style lang="scss" scoped>
@import "@/globals";
.section-selling {
  display: flex;
  padding: 0 9.6rem 9.6rem;
  max-width: 144rem;
  margin: 0 auto;
  position: relative;
  opacity: 0;
  &.visible {
    opacity: 1;
    -webkit-animation: slide-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      0.4s both;
    animation: slide-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both;
  }
  .btns {
    display: flex;
    gap: 1.2rem;
    position: absolute;
    top: -5rem;
    right: 9.6rem;
    z-index: 5000;

    button {
      all: unset;
      padding: 6px 8px;
      border-radius: 1rem;
      border: 2px solid $color-main;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &::after {
        content: "";
      }

      svg {
        fill: $color-main;
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        background-color: $color-main;

        & > svg {
          fill: $color-black;
        }
      }
    }
  }
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
        transition: all 0.2s ease-in-out;
        font-weight: 500;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);

        &:active {
          transform: translateY(4px) scale(0.98);
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06),
            0 2px 2px rgba(0, 0, 0, 0.06);
        }

        img {
          fill: red;
          color: red;
          stroke: red;
        }
        &:hover {
          background-color: rgba($color-main, 0.7);
        }
      }
    }
  }
  .cards {
    display: flex;
    width: 100vw;
    gap: 4.8rem;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
    .card {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      flex-shrink: 0;
      flex-grow: 1;
      overflow: hidden;
      flex-basis: 25rem;

      .img {
        position: relative;
        height: 100%;
        width: 100%;
        border-radius: 1.2rem;
        overflow: hidden;

        &__label {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: rgba($color-black, 0.4);
          backdrop-filter: blur(2px);
          display: flex;
          justify-content: center;
          align-items: center;

          /* show no hover */
          opacity: 0;
          visibility: hidden;
          user-select: none;

          transition: all 0.2s ease-in-out;

          span {
            padding: 1rem 1.6rem;
            background-color: rgba($color-main, 0.7);
            border-radius: 0.8rem;
            font-size: 1.8rem;
            font-weight: 500;
            cursor: pointer;
            color: #fff;

            transition: background-color 0.3s ease-in-out,
              color 0.2s ease-in-out;
            &:hover {
              background-color: rgba($color-main, 0.9);
              color: $color-black;
            }
          }
        }

        &:hover > .img__label {
          opacity: 1;
          visibility: visible;
          user-select: auto;
        }
        img {
          display: inline-block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
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
