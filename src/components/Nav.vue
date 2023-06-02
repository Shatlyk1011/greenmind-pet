<template>
  <header v-intersection-observer="onIntersectionObserver" ref="root">
    <div class="logo">GREENMIND</div>
    <img
      v-on-click-outside="closeMenu"
      class="menu-icon"
      @click="toggleMenu"
      src="../assets/icons/nav-menu.png"
      alt="menu"
    />
    <div class="container" ref="container">
      <ul class="links">
        <li class="link" v-element-hover="onHover">Домой</li>
        <li class="link" v-element-hover="onHover">Цветы</li>
        <li class="link" v-element-hover="onHover">Контакты</li>
      </ul>
      <ul class="icons">
        <li class="icon">
          <img src="../assets/icons/nav-bucket.svg" alt="bucket" />
        </li>
        <li class="icon">
          <img src="../assets/icons/nav-profile.svg" alt="l" />
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue"
import { vElementHover, vOnClickOutside } from "@vueuse/components"
import { vIntersectionObserver } from "@vueuse/components"
import { useWindowSize } from "@vueuse/core"

//menu control
const container = ref()
const toggleMenu = () => container.value.classList.toggle("active")
const closeMenu = () => container.value.classList.remove("active")

const { width } = useWindowSize()

const root = ref(null)

const onIntersectionObserver = ([{ isIntersecting }]) => {
  if (isIntersecting) root.value.classList.add("visible")
}

const links = document.getElementsByClassName("link")

const onHover = (state) => {
  let arrLinks = [...links]

  if (width.value > 740) {
    if (state) {
      arrLinks.forEach((link) => link.classList.add("active"))
    } else {
      arrLinks.forEach((link) => link.classList.remove("active"))
    }
  }
}
</script>

<style lang="scss">
@import "@/globals";

header {
  display: flex;
  align-items: center;
  max-width: 144rem;
  margin: 0 auto;
  padding: 3.2rem 9.6rem;
  position: relative;
  opacity: 0;

  @include respond(tab-land) {
    padding: 3.2rem 4.8rem;
  }

  @include respond(tab-port) {
    padding: 2.4rem 3.2rem;
  }

  @include respond(phone) {
    padding: 1.6rem 2.4rem;
    justify-content: space-between;
    position: relative;
    align-items: baseline;
  }

  &.visible {
    opacity: 1;
    -webkit-animation: slide-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation: slide-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .logo {
    font-size: 2.4rem;
    font-weight: 600;
    margin-right: 9.6rem;
    cursor: pointer;
    @include respond(tab-land) {
      margin-right: 7.2rem;
    }
    @include respond(tab-port) {
      margin-right: 4.8rem;
    }
  }

  .menu-icon {
    display: none;
    z-index: 11;

    @include respond(phone) {
      display: block;
    }
  }

  .container {
    display: flex;
    align-items: center;
    list-style: none;
    flex-grow: 1;
    transition: all 0.3s ease-in-out;

    @include respond(phone) {
      position: absolute;
      top: 0;
      right: 0;
      background-color: rgba($color-main, 0.5);
      backdrop-filter: blur(10px);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 3rem;
      z-index: 10;
      width: 50%;
      height: 100vh;

      opacity: 0;
      user-select: none;
      visibility: hidden;
      transform: translateX(100%);

      &.active {
        opacity: 1;
        user-select: auto;
        visibility: visible;
        transform: translateX(0);
      }
    }

    .links,
    .icons {
      display: flex;
      font-weight: 400;
    }

    .links {
      font-size: 1.8rem;
      font-weight: 500;
      letter-spacing: 0.4px;
      gap: 4.8rem;

      @include respond(tab-land) {
        gap: 3.2rem;
      }

      @include respond(tab-port) {
        gap: 2.4rem;
      }

      @include respond(phone) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 2.4rem;
        margin-bottom: 2rem;
      }
      .link {
        cursor: pointer;
        border-radius: 0.8rem;
        transition: all 0.2s ease-out;

        &.active {
          color: $color-black-5;
        }

        &.active:hover {
          color: $color-black;
        }
      }
    }

    .icons {
      margin-left: auto;
      display: flex;
      gap: 1.2rem;
      align-items: center;

      @include respond(phone) {
        gap: 0.6rem;
        margin-left: 0;
      }
      .icon {
        padding: 1rem;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s ease-out;

        @include respond(phone) {
          padding: 4px;
          border-radius: 4px;
        }

        &:hover {
          background-color: $color-main;
        }

        img {
          @include respond(phone) {
            height: 2.4rem;
          }
        }
      }
    }
  }
}
</style>
