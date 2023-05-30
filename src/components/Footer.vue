<template>
  <footer class="section-footer">
    <div class="footer">
      <div class="social">
        <div class="logo">GREENMIND</div>
        <p>Мы поможем вам найти растение вашей мечты</p>

        <div class="icons">
          <div class="icon">
            <img src="./../assets/icons/fb.png" alt="facebook icon">
          </div>
          <div class="icon">
            <img src="./../assets/icons/inst.png" alt="instagram icon">
          </div>
          <div class="icon">
            <img src="./../assets/icons/twitter.png" alt="twitter icon">
          </div>

        </div>
      </div>

      <div class="links">
        <ul>
          <li class="title">Информация</li>
          <li>О нас</li>
          <li>Товары</li>
          <li>Блог</li>
        </ul>

        <ul>
          <li class="title">Компания</li>
          <li>Сообщество</li>
          <li>Карьера</li>
          <li>Наша история</li>
        </ul>

        <ul>
          <li class="title">Контакты</li>
          <li>Начать тут</li>
          <li>Цены</li>
          <li>Ресурсы</li>
        </ul>
      </div>
    </div>

    <div class="copyright">2023 Все права защищены. Срок использования GREEMIND</div>
    <div class="copyright">Дизайн <a target="_blank" href="https://www.figma.com/file/FKd689NuU91mpisQstSaO9/E-Commerce-Plant-Shop-Website-(Community)?type=design&node-id=17%3A40&t=MKadxuWrtAi2VwqT-1">Figma</a></div>
  </footer>
</template>


<style lang="scss" scoped>
@import '@/globals';
.section-footer {
  padding: 4.8rem 9.6rem;
  background-color: $color-main;
  .footer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10rem;
    .social {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      flex-basis: 19rem;

      .logo {
        font-size: 1.8rem;
        font-weight: 700;
        text-transform: uppercase;
      }

      p {
        color: $color-black-5;
        line-height: 1.4;
      }

      .icons {
        display: flex;
        gap: 2.4rem;

        .icon {
          padding: 1.4rem;
          border: 1px solid $color-black;
          border-radius: 100%;
          width: 4.8rem;
          height: 4.8rem;
          position: relative;
          box-sizing: border-box;

          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

          }
        }
      }
    }
    
    .links {
      display: flex;
      gap: 4.8rem;
      ul {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        font-size: 1.8rem;

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
    color: $color-black-5;
  }
}
</style>