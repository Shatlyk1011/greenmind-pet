<template>
  <section class="section-hero" v-intersection-observer="onIntersectionObserver" ref="root">
    <div class="container">
      <div class="hero">
        <div class="left">
          <h1>Купите растения <br> своей мечты</h1>
          <div class="clients">
            100+ <br> 
            <span>клиенты</span>
          </div>
          <div class="search">
            <input type="text" placeholder="Что вы ищете?">
            <button>
              <img src="./../assets/icons/search.png" alt="">
            </button>
            <img class="curly-img" src="./../assets/icons/curly-middle.png" alt="">
          </div>
        </div>

        <div class="right">
          <img src="./../assets/flower-main.png" alt="">
          <img class="curly-img" src="./../assets/icons/curly-top.png" alt="">

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

.section-hero {
  padding: 0 9.6rem 9.6rem;
  opacity: 0;
 
  &.visible {
    opacity: 1;
    -webkit-animation: slide-top 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-top 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  .container {
    max-width: 144rem;
    height: 51rem;
    padding: 4.8rem 5.6rem 0 4.8rem;
    background-color: $color-main;
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
    border-radius: 2.4rem;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;

    .hero {
      display: flex;
      height: 100%;


      .left {
        width: 51rem;
        h1 {
          font-size: 6.4rem;
          line-height: 1.1;

          transition: all 0.3s ease-in-out;

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
          span {
            font-size: 1.8rem;
            font-weight: 400;
          }
        }

        .search {
          margin-top: 4.8rem;
          position: relative;
          box-sizing: border-box;
          
          input {
            all: unset;
            background-color: #fff;
            padding: 1.8rem;
            width: 100%;
            box-sizing: border-box;
            font-size: 1.8rem;
            border-radius: 1.2rem;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            line-height: 1.5;
            transition: all 0.3 ease-in;

            &:focus {
              outline: 2px solid $color-black;
              box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            }

            &::placeholder {
              font-family: inherit;
              color: $color-black-5;
              font-size: inherit;
            }
          }

          button {
            all: unset;
            position: absolute;
            top: 0;
            right: 0.6rem;
            z-index: 1000;
            background-color: $color-main;
            padding: 1.4rem;
            border-radius: 1.2rem;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;

            transition: all 0.2 ease-in-out;

            &:hover {
              background-color: rgba($color-main, 0.8);
            }

            &:focus {
              outline: 2px solid $color-black;
            }
            img {
            }
          }
          .curly-img {
            position: absolute;
            right: -40%;
            top: 0;
          }
        }
      }
      .right {
        background-color: $color-black;
        width: 450px;
        height: 400px;
        margin-top: auto;
        margin-left: auto;
        border-radius: 100%;
        border-bottom-right-radius: 0;
        img {
          position: absolute;
          bottom: 0;
          right: 3rem;
        }

        .curly-img {
          position: absolute;
          top: 1rem;
          right: 2rem;

        }
      }
    }
  }
}


</style>