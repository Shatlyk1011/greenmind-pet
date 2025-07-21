<template>
  <section
    class="section-selling"
    v-intersection-observer="onIntersectionObserver"
    ref="root"
  >
    <div class="btns">
      <button class="prevEl" type="button">
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
      <button class="nextEl" type="button">
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

    <div class="best">
      <h3>Best Selling Plants</h3>
      <h4>
       Easiest way to healthy life by buying your favorite plants 
      </h4>
      <button type="button">See more &rarr;</button>
    </div>

    <swiper
      class="cards"
      :modules="[Navigation]"
      :navigation="{ prevEl: '.prevEl', nextEl: '.nextEl' }"
      :space-between="cardGap"
      :slides-per-view="'auto'"
    >
      <swiper-slide class="card" v-for="(card, index) in cards" :key="index">
        <div class="img">
          <img :src="card.imgUrl" :alt="card.title" />
          <!-- show on hover -->
          <div class="img__label"><span>More info</span></div>
        </div>
        <div class="card__title">{{ card.title }}</div>
        <div class="card__price">&#8369; {{ card.price }}.00</div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { computed, ref } from "vue"
import { vIntersectionObserver } from "@vueuse/components"
import { useWindowSize } from "@vueuse/core"
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
    price: 3500,
    imgUrl:
      "https://images.unsplash.com/photo-1588082672429-606d1cb18af3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=680&q=80",
  },
  {
    title: "Natural Plants",
    price: 1200,
    imgUrl:
      "https://img.freepik.com/free-vector/plant-vector-art-monstera-illustration_53876-136752.jpg?w=360&t=st=1685639024~exp=1685639624~hmac=4e692d852591d9987782c5e2e61844aa3a2fa39c1b915901159b0a9e0db5e7d6",
  },

  {
    title: "Natural Plants",
    price: 2400,
    imgUrl:
      "https://images.unsplash.com/photo-1507988914355-bf49fdbc7368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=678&q=80",
  },

  {
    title: "Natural Plants",
    price: 900,
    imgUrl:
      "https://images.unsplash.com/photo-1508502726440-477c94bc369e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },

  {
    title: "Natural Plants",
    price: 800,
    imgUrl:
      "https://img.freepik.com/free-photo/elegant-plants-decoration-vase_23-2149334644.jpg?w=360&t=st=1685639619~exp=1685640219~hmac=3fa4e330f650c60b325d1ee647d94b7e64a509caa5dee6556eba02b59daf8190",
  },
]

const { width } = useWindowSize()

const cardGap = computed(() => {
  let sWidth = width.value
  if (sWidth <= 1296 && sWidth >= 1001) return 32
  else if (sWidth <= 1000 && sWidth >= 741) return 24
  else if (sWidth <= 740 && sWidth >= 441) return 16
  else if (sWidth <= 440) return 10
  else return 48
})

const root = ref(null)

const onIntersectionObserver = ([{ isIntersecting }]) => {
  if (isIntersecting) root.value.classList.add("visible")
}
</script>

<style lang="scss" scoped>
@import "@/globals";
.section-selling {
  display: flex;
  padding: 0 0 9.6rem 9.6rem;
  max-width: 144rem;
  margin: 0 auto;
  position: relative;
  opacity: 0;

  @include respond(tab-land) {
    padding: 0 0 4.8rem 4.8rem;
  }
  @include respond(tab-port) {
    padding: 0 0 3.2rem 3.2rem;
  }
  @include respond(phone) {
    padding: 0 1.6rem 3.2rem;
  }

  @include respond(smallest) {
    flex-direction: column;
    text-align: center;
    padding: 0 1.6rem 4.8rem;
  }

  &.visible {
    opacity: 1;
    -webkit-animation: slide-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s
      both;
    animation: slide-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both;
  }

  .btns {
    display: flex;
    gap: 1.2rem;
    position: absolute;
    top: -5rem;
    right: 9.6rem;
    z-index: 500;

    @include respond(tab-land) {
      top: -3.5rem;
      right: 4.8rem;
      gap: 8px;
    }
    @include respond(tab-port) {
      right: 3.2rem;
    }

    @include respond(phone) {
      right: 1.6rem;
    }

    @include respond(smallest) {
      top: auto;
      bottom: 1rem;
    }

    button {
      all: unset;
      padding: 6px 8px;
      border-radius: 1rem;
      border: 2px solid $color-main;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;

      @include respond(tab-land) {
        padding: 3px;
        border-radius: 0.8rem;
      }

      @include respond(phone) {
        padding: 2px;
      }
      @include respond(smallest) {
        border: 1px solid $color-main;
        border-radius: 3px;
      }

      svg {
        padding: 0;
        fill: $color-main;
        transition: all 0.3s ease-in-out;

        @include respond(tab-land) {
          width: 12px;
          height: 12px;
        }

        @include respond(phone) {
          width: 10px;
          height: 10px;
        }
        @include respond(smallest) {
          width: 8px;
          height: 8px;
        }
      }

      &:hover {
        background-color: $color-main;

        & > svg {
          fill: $color-black;
        }
      }
    }
  }

  .best {
    min-width: 17rem;
    max-width: 20rem;
    margin-right: 6rem;
    justify-self: flex-start;

    @include respond(tab-land) {
      margin-right: 3rem;
    }

    @include respond(tab-port) {
      margin-right: 2rem;
    }
    @include respond(phone) {
      text-align: center;
    }
    @include respond(smallest) {
      max-width: 100%;
      margin-bottom: 2.4rem;
      margin-right: 0;
    }
    h3 {
      font-size: 3.2rem;
      font-weight: 600;


      @include respond(tab-land) {
        font-size: 2.8rem;
        line-height: 1.1;
      }

      @include respond(phone) {
        font-size: 2.4rem;
      }
    }

    h4 {
      margin-top: 1.2rem;
      color: $color-black-5;
      font-weight: 500;
      line-height: 1.4;

      @include respond(tab-land) {
        line-height: 1.2;
      }
      @include respond(phone) {
        font-size: 1.6rem;
        line-height: 1.2;
      }
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

      @include respond(tab-land) {
        padding: 0.8rem 1.6rem;
      }
      @include respond(phone) {
        margin-top: 1.2rem;
        font-size: 1.3rem;
        text-align: center;
      }

      &:active {
        transform: translateY(4px) scale(0.98);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06), 0 2px 2px rgba(0, 0, 0, 0.06);
      }

      &:hover {
        background-color: rgba($color-main, 0.7);
      }
    }
  }
  .cards {
    display: flex;
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

      @include respond(tab-land) {
        gap: 0.8rem;
      }

      @include respond(tab-port) {
        flex-basis: 20rem;
      }

      @include respond(phone) {
        flex-basis: 18rem;
      }

      &:last-child {
        padding-right: 4.8rem;

        @include respond(tab-port) {
          padding-right: 3.2rem;
        }

        @include respond(phone) {
          padding-right: 1.6rem;
        }
      }

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

        @include respond(phone) {
          font-size: 1.6rem;
        }
      }

      &__price {
        color: $color-black-5;

        @include respond(phone) {
          font-size: 1.4rem;
        }
      }
    }
  }
}
</style>
