<template>
  <section
    class="section-hero"
    v-intersection-observer="onIntersectionObserver"
    ref="root"
  >
    <div class="container">
      <div class="left">
        <h1>
          <!-- remove br in 'smallest' viewport -->
          Купите растения <br v-if="width > 440" />
          своей мечты
        </h1>
        <div class="clients">
          100+ <br />
          <span>клиенты</span>
        </div>
        <div class="wrap">
          <div class="search">
            <input type="text" placeholder="Что вы ищете?" />
            <button type="button">
              <img src="./../assets/icons/search.png" alt="" />
            </button>
          </div>
          <img
            class="curly-img--1"
            src="./../assets/icons/curly-middle.png"
            alt=""
          />
        </div>
      </div>

      <div class="right">
        <img class="plant-img" src="./../assets/flower-main.png" alt="" />
        <img
          class="plant-img--phone"
          src="./../assets/plant-phone.jpg"
          alt=""
        />
        <img
          class="curly-img--2"
          src="./../assets/icons/curly-top.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { vIntersectionObserver } from "@vueuse/components"
import { useWindowSize } from "@vueuse/core"

const root = ref(null)

const { width } = useWindowSize()

const onIntersectionObserver = ([{ isIntersecting }]) => {
  if (isIntersecting) root.value.classList.add("visible")
}
</script>

<style lang="scss" scoped>
@import "@/globals";

.section-hero {
  padding: 0 9.6rem 9.6rem;
  opacity: 0;
  // transition-delay: 0.2s;

  @include respond(tab-land) {
    padding: 0 4.8rem 4.8rem;
  }

  @include respond(tab-port) {
    padding: 0 3.2rem 4.8rem;
  }

  @include respond(phone) {
    padding: 0 1.6rem 4.8rem;
  }
  @include respond(smallest) {
    padding: 0 1.6rem 3.2rem;
  }

  &.visible {
    -webkit-animation: slide-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      0.3s backwards;
    animation: slide-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s
      backwards;
    opacity: 1;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    max-width: 144rem;
    height: 51rem;
    padding: 4.8rem 7.2rem 0 4.8rem;
    background-color: $color-main;
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
    border-radius: 2.4rem;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
    overflow: hidden;
    z-index: 1;

    @include respond(tab-land) {
      padding: 3.2rem 4.8rem 0 3.2rem;
      height: 40rem;
    }

    @include respond(tab-port) {
      padding: 2.4rem 3.2rem 0 2.4rem;
      height: 33rem;
    }

    @include respond(phone) {
      padding: 1.6rem;
      grid-template-columns: 1fr;
      height: 100%;
    }
    @include respond(smallest) {
      border-radius: 1.6rem;
    }

    .left {
      grid-column: 1 / span 7;

      @include respond(phone) {
        grid-column: 1 / -1;
        text-align: center;
        max-width: 70%;
        margin: 0 auto;
      }
      @include respond(smallest) {
        max-width: 100%;
      }
      h1 {
        font-size: 6.4rem;
        line-height: 1.1;
        transition: all 0.3s ease-in-out;

        @include respond(tab-land) {
          font-size: 4.8rem;
        }

        @include respond(tab-port) {
          font-size: 4rem;
          line-height: 1.3;
        }

        @include respond(phone) {
          line-height: 1.2;
        }
        @include respond(smallest) {
          font-size: 3.2rem;
        }

        &:hover {
          transform: skewX(-4deg) scale(1.02);
        }
      }

      .clients {
        font-size: 3.2rem;
        font-weight: 500;
        border-left: 1px solid $color-black;
        padding-left: 4.8rem;
        margin-top: 2.4rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        @include respond(tab-land) {
          padding-left: 3.2rem;
          margin-top: 1.8rem;
          gap: 6px;
        }

        @include respond(tab-port) {
          padding-left: 2.4rem;
          margin-top: 1.2rem;
        }

        @include respond(phone) {
          flex-direction: row;
          justify-content: center;
          align-items: center;
          border-left: none;
          padding: 0;
          margin-top: 6px;
          gap: 0.6rem;
          font-size: 2.4rem;
        }

        @include respond(smallest) {
          font-size: 1.8rem;
          margin-top: 4px;
        }
        span {
          font-size: 1.8rem;
          font-weight: 400;
          @include respond(smallest) {
            font-size: 1.6rem;
          }
        }
      }

      .wrap {
        display: flex;
        gap: 3rem;

        @include respond(tab-land) {
          gap: 1rem;
        }
        @include respond(phone) {
          justify-content: center;
        }

        .search {
          display: flex;
          align-items: center;
          margin-top: 4.8rem;
          box-sizing: border-box;
          max-width: 45rem;
          width: 100%;

          @include respond(tab-land) {
            margin-top: 3.2rem;
          }

          @include respond(phone) {
            margin-top: 1.6rem;
          }

          input {
            all: unset;
            background-color: #fff;
            padding: 1.8rem;
            width: 100%;
            box-sizing: border-box;
            font-size: 1.8rem;
            border-radius: 1.2rem;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
              0 3px 6px rgba(0, 0, 0, 0.23);
            line-height: 1.5;
            transition: all 0.2s ease-in;

            @include respond(tab-land) {
              padding: 1.4rem;
            }

            @include respond(tab-port) {
              padding: 1rem 0.8rem;
              box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1),
                0 3px 6px rgba(0, 0, 0, 0.15);
            }

            @include respond(phone) {
              padding: 4px;
            }

            &:focus {
              outline: 1px solid $color-black-5;
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
                0 6px 6px rgba(0, 0, 0, 0.23);

              @include respond(tab-port) {
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12),
                  0 6px 6px rgba(0, 0, 0, 0.15);
              }
            }

            &::placeholder {
              font-family: inherit;
              color: $color-black-5;
              font-size: inherit;

              @include respond(phone) {
                font-size: 1.4rem;
              }
            }
          }

          button {
            all: unset;
            z-index: 100;
            background-color: $color-main;
            padding: 1.4rem;
            border-radius: 1.2rem;
            right: 0.6rem;
            cursor: pointer;
            transition: all 0.2 ease-in-out;
            margin-left: -5.6rem;

            @include respond(tab-land) {
              padding: 1rem;
              margin-left: -4.6rem;
            }

            @include respond(tab-port) {
              padding: 8px;
              margin-left: -4.2rem;
            }

            @include respond(phone) {
              padding: 4px;
              border-radius: 6px;
              margin-left: -3rem;
            }

            &:hover {
              background-color: rgba($color-main, 0.8);
            }

            &:focus {
              outline: 1px solid $color-black-5;
            }

            img {
              @include respond(tab-land) {
                width: 1.8rem;
                height: 1.8rem;
              }

              @include respond(phone) {
                width: 1.4rem;
                height: 1.4rem;
              }
            }
          }
        }
        .curly-img--1 {
          position: inline-block;
          position: relative;
          top: 5.5rem;
          width: 40%;

          @include respond(tab-land) {
            transform: scale(0.8);
            top: 3.5rem;
          }
          @include respond(tab-port) {
            width: 30%;
            height: 50%;
            top: 3.5rem;
          }
          @include respond(phone) {
            display: none;
          }
        }
      }
    }
    .right {
      grid-column: 8 / -1;
      background-color: $color-black;
      width: 45rem;
      height: 40rem;
      margin-top: auto;
      margin-left: auto;
      border-radius: 100%;
      border-bottom-right-radius: 0;
      position: relative;

      @include respond(tab-land) {
        width: 37.5rem;
        height: 32.5rem;
      }

      @include respond(tab-port) {
        width: 30rem;
        height: 25rem;
      }

      @include respond(phone) {
        grid-row: 2 / 3;
        grid-column: 1 / -1;
        text-align: center;
        margin: 0 auto;
        width: 70%;
        margin-top: 2rem;
        background-color: transparent;
      }
      @include respond(smallest) {
        width: 100%;
        height: 20rem;
      }

      .plant-img {
        position: absolute;
        bottom: 0;
        right: -2rem;
        height: 120%;

        @include respond(phone) {
          left: 50%;
          transform: translateX(-50%);
          display: none;
        }

        &--phone {
          display: none;
          @include respond(phone) {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            background-position: bottom;
            border-radius: 1rem;
          }
        }
      }
      .curly-img--2 {
        position: absolute;
        top: -10rem;
        right: -5rem;

        @include respond(tab-land) {
          transform: scale(0.8);
          top: -8rem;
        }

        @include respond(tab-port) {
          width: 20%;
          right: -2.5rem;
          top: -7rem;
        }
        @include respond(phone) {
          width: 14%;
          top: -5rem;
          right: -8rem;
        }
        @include respond(smallest) {
          display: none;
        }
      }
    }
  }
}
</style>
