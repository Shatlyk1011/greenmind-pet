<template>
  <section class="section-hero">
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

</script>

<style lang="scss" scoped>
@import '@/globals';

.section-hero {

  margin: 0 9.6rem;
  .container {
    max-width: 144rem;
    height: 51rem;
    padding: 4.8rem 5.6rem 0 4.8rem;
    background-color: $color-main;
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;

    .hero {
      display: flex;
      height: 100%;

      .left {
        width: 51rem;
        h1 {
          font-size: 6.4rem;
          line-height: 1.1;
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
            border-radius: 1.2rem;
            font-size: 1.8rem;
            line-height: 1.5;

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
            right: 0.4rem;
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