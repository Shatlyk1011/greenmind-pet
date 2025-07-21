<template>
  <section
    class="section-about"
    v-intersection-observer="onIntersectionObserver"
    ref="root"
  >
    <div class="about">
      <h2 class="title">About us</h2>
      <div class="subtitle">Order now and appreciate the beauty of nature</div>

      <div class="cards">
        <div class="card">
          <div class="img">
            <img src="./../assets/icons/about-1.png" alt="" />
          </div>
          <div class="text">Large Assortment</div>
          <div class="description">
            we offer many different types of products with fewer variations in each category.
          </div>
        </div>

        <div class="card">
          <div class="img">
            <img src="./../assets/icons/about-2.png" alt="" />
          </div>
          <div class="text">Fast & Free Shipping</div>
          <div class="description">
            4-day or less delivery time, free shipping and an expedited delivery option.
          </div>
        </div>

        <div class="card">
          <div class="img">
            <img src="./../assets/icons/about-3.png" alt="" />
          </div>
          <div class="text">24/7 Support</div>
          <div class="description">
            answers to any business related inquiry 24/7 and in real-time.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { vIntersectionObserver } from "@vueuse/components"

const root = ref(null)

const onIntersectionObserver = ([{ isIntersecting }]) => {
  if (isIntersecting) root.value.classList.add("visible")
}
</script>

<style lang="scss" scoped>
@import "@/globals";

.section-about {
  padding: 0 9.6rem 9.6rem;
  max-width: 144rem;
  margin: 0 auto;
  opacity: 0;
  transition: all 0.7s ease-in-out;

  @include respond(tab-land) {
    padding: 0 4.8rem 4.8rem;
  }

  @include respond(tab-port) {
    padding: 0 3.2rem 3.2rem;
  }

  @include respond(phone) {
    padding: 0 1.6rem 3.2rem;
  }

  & *::selection {
    background-color: $color-black-25;
    color: $color-black;
  }

  &.visible {
    opacity: 1;
    -webkit-animation: slide-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      0.2s both;
    animation: slide-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
  }

  .about {
    text-align: center;
    .title {
      font-size: 3.2rem;
      font-weight: 600;

      @include respond(tab-port) {
        font-size: 2.4rem;
      }
    }

    .subtitle {
      font-size: 1.8rem;
      font-weight: 500;
      color: $color-black-5;
      margin: 1.2rem 0 4.8rem;

      @include respond(tab-land) {
        margin: 1.2rem 0 3.2rem;
      }
      @include respond(tab-port) {
        font-size: 1.6rem;
        margin: 1rem 0 2.4rem;
      }
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.4rem;

      @include respond(tab-port) {
        gap: 2rem;
      }

      @include respond(phone) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.6rem;
      }
      @include respond(smallest) {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .card {
        display: inline-flex;
        flex-direction: column;
        max-width: 400px;
        justify-self: center;

        @include respond(phone) {
          &:last-child {
            grid-column: 1 / -1;
          }
        }

        @include respond(smallest) {
        }

        .img {
          padding: 2.8rem;
          background-color: $color-main;
          border-radius: 10rem;
          align-self: center;

          @include respond(tab-port) {
            padding: 2rem;
          }

          &:hover {
            animation: spin 2s ease-in-out infinite;
            outline: 2px solid $color-black-5;
          }

          img {
            @include respond(tab-port) {
              width: 2.4rem;
            }
          }
        }

        .text {
          font-size: 1.8rem;
          font-weight: 700;
          margin-top: 2.4rem;

          @include respond(tab-port) {
            font-size: 1.6rem;
            margin-top: 2rem;
          }
        }

        .description {
          margin-top: 1.2rem;
          font-size: 1.8rem;
          line-height: 1.35;
          font-weight: 500;
          color: $color-black-5;

          @include respond(tab-port) {
            font-size: 1.6rem;
            line-height: 1.3;
            margin-top: 1rem;
          }
        }
      }
    }
  }
}
</style>
