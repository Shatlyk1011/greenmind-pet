<template>
  <header ref="header">
    <div class="logo">GREENMIND</div>
    <ul class="links">
      <li class="link" v-element-hover="onHover">Домой</li>
      <li class="link" v-element-hover="onHover">Цветы</li>
      <li class="link" v-element-hover="onHover">Контакты</li>
    </ul>
    <ul class="icons">
      <li class="icon">
        <img src="../assets/icons/nav-bucket.png" alt="bucket" />
      </li>
      <li class="icon">
        <img src="../assets/icons/nav-profile.png" alt="l" />
      </li>
      <li class="stick">
        <img src="../assets/icons/nav-stick.png" alt="stick" />
      </li>
      <li class="icon">
        <img src="../assets/icons/nav-menu.png" alt="menu" />
      </li>
    </ul>
  </header>
</template>

<script setup>
import { ref } from "vue"
import { vElementHover } from "@vueuse/components"

const links = document.getElementsByClassName("link")

const isHovered = ref(false)

const onHover = (state) => {
  let arrLinks = [...links]

  if (state) {
    isHovered.value = state
    arrLinks.forEach((link) => link.classList.add("active"))
  } else {
    isHovered.value = state
    arrLinks.forEach((link) => link.classList.remove("active"))
  }
}
</script>

<style lang="scss">
@import "@/globals";
header {
  display: flex;
  align-items: center;
  padding: 4.8rem 9.6rem;
  list-style: none;
  max-width: 144rem;
  margin: 0 auto;
  position: sticky;
  top: 0;

  .logo {
    font-size: 2.4rem;
    font-weight: 600;
    margin-right: 9.6rem;
    cursor: pointer;
  }

  .links,
  .icons {
    display: flex;
    gap: 1.2rem;
    font-weight: 400;
  }

  .links {
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 0.4px;
    .link {
      cursor: pointer;
      padding: 1rem 1.6rem;
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
    align-items: center;
    .icon,
    .stick {
      padding: 1rem;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s ease-out;
      &:hover {
        background-color: $color-main;
      }
    }
  }
}
</style>
