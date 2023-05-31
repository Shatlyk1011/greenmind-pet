<template>
  <section
    class="section-testimonials"
    v-intersection-observer="onIntersectionObserver"
    ref="root"
  >
    <div class="wrap">
      <div class="title">Что клиенты говорят о GREEMIND?</div>
      <div class="pagination">
        <span class="pagination-item" v-for="c in testimonials.length"></span>
      </div>
    </div>

    <swiper
      class="testimonials"
      :modules="[Pagination]"
      :space-between="cardGap"
      :slides-per-view="'auto'"
      :pagination="paginationConfig"
    >
      <swiper-slide class="testimonial" v-for="t in testimonials">
        <p>{{ t.text }}</p>
        <div class="rate">
          <div class="rate-wrap">
            <img src="./../assets/icons/,,.png" alt=",," />
            <div class="author">
              {{ t.author }}
              <span>{{ t.profession }}</span>
            </div>
          </div>
          <div class="star">
            <img src="./../assets/icons/star.png" alt="star" />
            {{ t.rate }}
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { ref, computed } from "vue"
import { vIntersectionObserver } from "@vueuse/components"
import { Pagination } from "swiper"
import { useWindowSize } from "@vueuse/core"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/navigation"

const testimonials = [
  {
    text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    author: "Игорь Русский",
    profession: "Музыкант",
    rate: "4.5",
  },
  {
    text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    author: "Андрей Павлов",
    profession: "Артист",
    rate: "4.8",
  },
  {
    text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    author: "Сергей Шнуров",
    profession: "Юрист",
    rate: "4.6",
  },
]

const { width, height } = useWindowSize()

const cardGap = computed(() => {
  if (width.value <= 1296) return 32
  // else if(width.value <=)
  else return 52
})

const paginationConfig = {
  el: ".pagination",
  bulletClass: "pagination-item",
  bulletActiveClass: "pagination-item--active",
  clickable: true,
}

const root = ref(null)
const onIntersectionObserver = ([{ isIntersecting }]) => {
  if (isIntersecting) root.value.classList.add("visible")
}
</script>

<style lang="scss">
@import "@/globals";
.section-testimonials {
  &.visible {
    opacity: 1;
    -webkit-animation: slide-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s
      both;
    animation: slide-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both;
  }

  & *::selection {
    background-color: $color-black-25;
    color: $color-black;
  }

  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 0 9.6rem;

    @include respond(tab-land) {
      padding: 0 4.8rem;
    }

    @include respond(tab-port) {
      padding: 0 3.2rem;
    }
    .title {
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 1.3;
    }
    .pagination {
      color: $color-main;
      display: flex;
      gap: 6px;
      transition: all 1s ease;

      .pagination-item {
        width: 12px;
        height: 6px;
        background-color: $color-main;
        border-radius: 1.2rem;
        cursor: pointer;

        &.pagination-item--active {
          width: 4.8rem;
        }
      }
    }
  }
  .testimonials {
    display: flex;
    flex-shrink: 0;
    overscroll-behavior-x: contain;
    margin: 4.8rem 0 9.6rem 9.6rem;
    cursor: grab;

    @include respond(tab-land) {
      margin: 2.4rem 0 4.8rem 4.8rem;
    }
    @include respond(tab-port) {
      margin: 2rem 0 3.2rem 3.2rem;
    }

    .testimonial {
      padding: 4.8rem 4.8rem 10rem;
      display: flex;
      flex-direction: column;
      gap: 5.4rem;
      background-color: $color-main;
      max-width: 60%;
      border-radius: 1.2rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -4px rgba(0, 0, 0, 0.1);
      box-sizing: border-box;

      &:last-child {
        margin-right: 4.8rem !important;
      }

      @include respond(tab-land) {
        padding: 3.2rem 3.2rem 7rem;
        gap: 3.2rem;
      }

      p {
        font-size: 1.8rem;
        font-weight: 500;
        color: $color-black-5;
        line-height: 1.4;
      }

      .rate {
        display: flex;
        align-items: start;
        justify-content: space-between;

        .rate-wrap {
          display: flex;
          gap: 7.4rem;

          @include respond(tab-land) {
            gap: 4.8rem;
          }

          img {
          }

          .author {
            display: flex;
            flex-direction: column;
            gap: 6px;
            font-weight: 700;

            span {
              font-size: 1.2rem;
              color: $color-black-5;
              font-weight: 500;
            }
          }
        }

        .star {
          display: flex;
          gap: 1rem;
          align-items: center;
          font-weight: 700;
          font-size: 1.8rem;

          img {
          }
        }
      }
    }
  }
}
</style>
