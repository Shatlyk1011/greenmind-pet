<template>
  <section
    class="section-categories"
    v-intersection-observer="onIntersectionObserver"
    ref="root"
  >
    <div class="title">Категории</div>
    <div class="subtitle">Найдите то, что ищете</div>

    <div class="categories">
      <div class="cards">
        <div class="card" v-for="card in cards" :key="card.title">
          <img :src="card.imgUrl" :alt="card.title" />
          <p>{{ card.title }}</p>
        </div>
      </div>
      <button type="button">Посмотреть &rarr;</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { vIntersectionObserver } from "@vueuse/components"

const cards = [
  {
    title: "Натуральные растения",
    imgUrl:
      "https://images.unsplash.com/photo-1569350080887-dd38c27caad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
  },
  {
    title: "Аксессуары для растений",
    imgUrl:
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    title: "Искусственные растения",
    imgUrl:
      "https://images.unsplash.com/photo-1508502726440-477c94bc369e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
]

const root = ref(null)

const onIntersectionObserver = ([{ isIntersecting }]) => {
  if (isIntersecting) root.value.classList.add("visible")
}
</script>

<style lang="scss" scoped>
@import "@/globals";
.section-categories {
  text-align: center;
  padding: 0 0 9.6rem;
  opacity: 0;

  @include respond(tab-land) {
    padding: 0 0 4.8rem;
  }

  @include respond(tab-port) {
    padding: 0 0 3.2rem;
  }

  @include respond(phone) {
    padding: 0 0 1.6rem;
  }
  &.visible {
    opacity: 1;
    -webkit-animation: slide-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s
      both;
    animation: slide-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
  }
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
    margin: 1.2rem 0 6.4rem 0;

    @include respond(tab-land) {
      margin-bottom: 4.8rem;
    }

    @include respond(tab-port) {
      font-size: 1.6rem;
      margin: 1rem 0 3.2rem;
    }
  }

  .categories {
    background-color: $color-main;
    .cards {
      display: flex;
      justify-content: space-evenly;
      max-width: 144rem;
      margin: 0 auto;

      @include respond(smallest) {
        flex-direction: column;
        align-items: center;
        padding: 2.4rem 1.6rem;
        gap: 2.4rem;
        width: 100%;
        box-sizing: border-box;
      }

      .card {
        max-width: 36rem;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

        @include respond(tab-land) {
          max-width: 33rem;
        }

        @include respond(tab-port) {
          max-width: 25rem;
        }

        @include respond(phone) {
          max-width: 17rem;
        }

        @include respond(smallest) {
          max-width: 90%;
        }

        &:nth-child(odd) {
          margin-top: -4.8rem;

          @include respond(tab-land) {
            margin-top: -3.2rem;
          }

          @include respond(tab-port) {
            margin-top: -2.4rem;
          }
          @include respond(smallest) {
            margin-top: 0;
          }
        }
        &:nth-child(even) {
          margin-top: 4.8rem;

          @include respond(tab-land) {
            margin-top: 3.2rem;
          }

          @include respond(tab-port) {
            margin-top: 2.4rem;
          }
          @include respond(smallest) {
            margin-top: 0;
          }
        }

        &:last-child {
          @include respond(smallest) {
            grid-column: 1/-1;
          }
        }

        img {
          width: 100%;
          height: 50rem;
          object-fit: cover;
          border-radius: 1.2rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 8px 10px -6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

          @include respond(tab-land) {
            height: 45rem;
          }

          @include respond(tab-port) {
            height: 32rem;
          }
          @include respond(phone) {
            height: 25rem;
          }

          @include respond(smallest) {
            height: 100%;
          }

          &:hover {
            transform: scale(1.05) translateY(-0.5rem);
            z-index: 20;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07),
              0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07),
              0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07),
              0 32px 64px rgba(0, 0, 0, 0.07);

            @include respond(smallest) {
              transform: none;
            }
          }
        }

        p {
          font-size: 1.8rem;
          font-weight: 700;
          margin-top: 1.2rem;

          @include respond(tab-port) {
            font-size: 1.6rem;
            margin-top: 1rem;
            font-weight: 500;
          }
          @include respond(smallest) {
            font-size: 1.8rem;
          }
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
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      @include respond(tab-land) {
        margin-bottom: 7rem;
      }

      @include respond(tab-port) {
        margin-bottom: 4rem;
      }

      @include respond(phone) {
        margin: 1.6rem 0 3.2rem;
        padding: 1rem 1.6rem;
        font-size: 1.6rem;
      }

      &:hover {
        background-color: #eee;
      }

      &:active {
        transform: translateY(4px) scale(0.98);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06), 0 2px 2px rgba(0, 0, 0, 0.06);
      }
    }
  }
}
</style>
