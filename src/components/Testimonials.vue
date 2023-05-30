<template>
  <section class="section-testimonials">
    <div class="wrap">
      <div class="title">Что клиенты говорят о GREEMIND?</div>
      <div class="cursor">
        <span class="" v-for="c in testimonials.length"></span>
      </div>
    </div>

    <div class="testimonials">
      <div class="testimonial" v-for="t in testimonials">
        <p>{{ t.text }}</p>
        
        <div class="rate">
          <div class="wrap">

            <img src="./../assets/icons/,,.png" alt=",,">
            <div class="author">
              {{ t.author}}
              <span>{{ t.profession }}</span>
            </div>
          </div>
          <div class="star">
            <img src="./../assets/icons/star.png" alt="star">
            {{ t.rate }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const testimonials = [
  {text: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', author: 'Игорь Русский', profession: 'Музыкант', rate: '4.5'},
  {text: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', author: 'Андрей Павлов', profession: 'Артист', rate: '4.8'},
  {text: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', author: 'Сергей Шнуров', profession: 'Юрист', rate: '4.6'}
]

</script>

<style lang="scss" scoped>
@import '@/globals';
.section-testimonials {
  padding: 0 9.6rem 9.6rem;
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: start;
    .title {
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 1.3;
    }
    .cursor {
      color: $color-main;
      display: flex;
      gap: 6px;

      span {
        width: 12px;
        height: 6px;
        background-color: $color-main;
        border-radius: 1.2rem;
        cursor: pointer;

        &.active {
          width: 4.8rem
        }

        &:first-child {
          width: 4.8rem;
        }
      }
    }
  }
  .testimonials {
    display: flex;
    gap: 4.8rem;
    flex-shrink: 0;
    .testimonial {
      padding: 4.8rem 4.8rem 10rem;
      display: flex;
      flex-direction: column;
      gap: 5.4rem;
      background-color: $color-main;
      min-width: 80rem;
      border-radius: 1.2rem;
      margin-top: 4.8rem;
      box-sizing: border-box;

      p {
        font-size: 1.8rem;
        font-weight: 500;
        color: $color-black-5;
        line-height: 1.4;
      }

      .rate {
        display: flex;
        align-items: start;
        justify-content: space-between;

        .wrap {
          display: flex;
          gap: 7.4rem;

          img {

          }
          
          .author {
            display: flex;
            flex-direction: column;
            gap: 6px;
            font-weight: 700;
          
            span {
              font-size: 1.2rem;
              color: $color-black-5;
              font-weight: 500;
            }
          }
        }

        .star {
          display: flex;
          gap: 1rem;
          align-items: center;
          font-weight: 700;
          font-size: 1.8rem;

          img {

          }
        }
      }
    }
  }
}
</style>