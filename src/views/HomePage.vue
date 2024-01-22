<template>
  <section class="home-scrin">
    <div class="img-container"><img src="@/assets/img/home-main-scrin.png" alt="" /></div>
    <div class="sct-text">
      <img src="@/assets/img/home-main-decor.png" alt="" />
      <h1>{{ $t('homePage.mainScrin.title') }}</h1>
      <h2>{{ $t('homePage.mainScrin.subtitle') }}</h2>
      <p>{{ $t('homePage.mainScrin.text') }}</p>
      <button>{{ $t('homePage.mainScrin.mainScrinButton') }}</button>
    </div>
  </section>
  <div class="container">
    <main></main>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style lang="scss" scoped>
@import '../../public/scss/_functions.scss';
.home-scrin {
  position: relative;
  width: 100%;
  padding-bottom: 45%;

  @media (max-width: 768px) {
    height: rem(390);
    padding-bottom: 0;
  }

  & .img-container {
    position: absolute;
    width: 100%;
    height: 100%;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & .sct-text {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #ffffff;
    width: rem(440);
    height: rem(440);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: rem(20);

    @media (max-width: 1024px) {
      width: rem(330);
      height: rem(330);
    }

    @media (max-width: 360px) {
      width: rem(310);
      height: rem(310);
    }

    h1,
    h2,
    p,
    button {
      z-index: 2;
      text-align: center;
    }

    h1 {
      font-family: PermianSerifTypeface;
      font-size: super-clamp(28, 36, 320, 1600);
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.72px;
    }

    h2 {
      font-family: PermianSerifTypeface;
      font-size: super-clamp(18, 20, 320, 1600);
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.4px;
      color: #ffd6a8;
      margin-bottom: rem(15);
    }

    p {
      font-size: super-clamp(13, 16, 320, 1600);
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: rem(36);
      @media (max-width: 1024px) {
        margin-bottom: rem(15);
      }
    }

    img {
      z-index: 1;
      position: absolute;
      width: 100%;
      height: 100%;
    }

    button {
      position: relative;
      text-transform: uppercase;
      color: #ffffff;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
      font-size: rem(15);
      font-weight: 700;
      padding: rem(12) rem(31);
      border: 1px solid #a9845c;
      background-color: #a9845c;

      @media (any-hover: hover) {
        &:hover {
          cursor: pointer;
          border: 1px solid #926341;
          background-color: #926341;
          &::after {
            background: url('~@/assets/img/vector-btn/02-hover.svg') no-repeat;
          }
        }
      }
      &::after {
        content: '';
        position: absolute;
        width: rem(65);
        height: rem(3);
        bottom: rem(-5);
        right: rem(25);
        background: url('~@/assets/img/vector-btn/02.svg') no-repeat;
      }
    }
  }
}
</style>
