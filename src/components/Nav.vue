<template>
  <header>
    <div class="logo">GREENMIND</div>
    <ul class="links">
      <li class="link">Домой</li>
      <li class="link">Цветы</li>
      <li class="link">Контакты</li>
    </ul>
    <ul class="icons">
      <li class="icon"><img src="../assets/icons/nav-bucket.png" alt=""></li>
      <li class="icon"><img src="../assets/icons/nav-profile.png" alt=""></li>
      <li class="icon"><img src="../assets/icons/nav-stick.png" alt=""></li>
      <li class="icon"><img src="../assets/icons/nav-menu.png" alt=""></li>
    </ul>
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '@/globals';
  header {
    display: flex;
    padding: 4.8rem 9.6rem;
    list-style: none;

    .logo {
      font-size: 2.4rem;
      font-weight: 600;
      margin-right: 9.6rem;
    }

    .links, 
    .icons {
      display: flex;
      gap: 4.8rem;
      font-weight: 400;
    }

    .links {
      font-size: 1.8rem;
      letter-spacing: 0.4px;
      .link {

      }
    }

    .icons {
      margin-left: auto;


      .icon {

        img {

        }
      }
    }
    
  }
</style>