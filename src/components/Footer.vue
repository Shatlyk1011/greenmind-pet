<template>
  <footer
    class="section-footer"
    v-intersection-observer="onIntersectionObserver"
    ref="root"
  >
    <div class="footer">
      <div class="social">
        <div class="logo">GREENMIND</div>
        <p>We help you find your dream plant</p>

        <div class="icons">
          <div class="icon">
            <img src="./../assets/icons/fb.png" alt="facebook icon" />
          </div>
          <div class="icon">
            <img src="./../assets/icons/inst.png" alt="instagram icon" />
          </div>
          <div class="icon">
            <img src="./../assets/icons/twitter.png" alt="twitter icon" />
          </div>
        </div>
      </div>

      <div class="links">
        <ul>
          <li class="title">Information</li>
          <li>About</li>
          <li>Product</li>
          <li>Blog</li>
        </ul>

        <ul>
          <li class="title">Company</li>
          <li>Community</li>
          <li>Career</li>
          <li>Our history</li>
        </ul>

        <ul>
          <li class="title">Contacts</li>
          <li>Getting Started</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
    </div>

    <div class="copyright">
      2023 all Right Reserved Term of use GREENMIND
    </div>
    <div style="margin-top: 1rem" class="copyright">
      Дизайн
      <a
        target="_blank"
        href="https://www.figma.com/file/FKd689NuU91mpisQstSaO9/E-Commerce-Plant-Shop-Website-(Community)?type=design&node-id=17%3A40&t=MKadxuWrtAi2VwqT-1"
        >Figma</a
      >
    </div>
  </footer>
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
.section-footer {
  padding: 4.8rem 9.6rem;
  background-color: $color-main;

  @include respond(tab-land) {
    padding: 3.2rem 4.8rem;
  }

  @include respond(tab-port) {
    padding: 3.2rem;
  }

  @include respond(phone) {
    padding: 2rem;
    text-align: center;
  }

  &.visible {
    -webkit-animation: slide-bottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      0.3s both;
    animation: slide-bottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both;
    opacity: 1;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10rem;

    @include respond(tab-land) {
      margin-bottom: 7rem;
    }

    @include respond(tab-port) {
      margin-bottom: 4.8rem;
    }
    @include respond(phone) {
      flex-direction: column;
      gap: 4.8rem;
      margin-bottom: 3.2rem;
    }
    @include respond(smallest) {
      gap: 2.4rem;
      margin-bottom: 2.4rem;
    }
    .social {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      flex-basis: 19rem;

      @include respond(tab-port) {
        gap: 1.8rem;
        order: 1;
        flex-basis: auto;
      }
      @include respond(phone) {
        gap: 1.2rem;
      }

      .logo {
        font-size: 1.8rem;
        font-weight: 700;
        text-transform: uppercase;
      }

      p {
        color: $color-black-5;
        line-height: 1.3;
      }

      .icons {
        display: flex;
        gap: 2.4rem;

        @include respond(tab-port) {
          gap: 1.8rem;
        }
        @include respond(phone) {
          justify-content: center;
        }

        .icon {
          padding: 1.4rem;
          border: 1px solid $color-black;
          border-radius: 100%;
          width: 4.8rem;
          height: 4.8rem;
          position: relative;
          box-sizing: border-box;

          @include respond(tab-port) {
            height: 3.2rem;
            width: 3.2rem;
          }

          &:hover {
            animation: spin 1s linear infinite;
          }

          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            @include respond(tab-port) {
              height: 1.4rem;
            }
          }
        }
      }
    }

    .links {
      display: flex;
      gap: 4.8rem;

      @include respond(tab-port) {
        gap: 3.2rem;
      }
      @include respond(phone) {
        justify-content: space-evenly;
        order: 0;
      }
      @include respond(smallest) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        font-size: 1.8rem;

        @include respond(tab-port) {
          gap: 1.8rem;
          font-size: 1.6rem;
        }
        @include respond(phone) {
          gap: 1.6rem;
          font-size: 1.6rem;
        }
        @include respond(smallest) {
          gap: 1.2rem;
        }

        &:last-child {
          @include respond(smallest) {
            grid-column: 1/-1;
          }
        }

        li.title {
          font-weight: 700;
          color: $color-black;
        }

        li {
          color: $color-black-5;
          cursor: pointer;

          transition: all 0.3s ease-out;

          &:hover {
            color: $color-black;
          }
        }
      }
    }
  }
  .copyright {
    font-size: 1.8rem;
    font-weight: 500;
    color: $color-black-25;

    @include respond(tab-port) {
      font-size: 1.6rem;
    }
  }
}
</style>
