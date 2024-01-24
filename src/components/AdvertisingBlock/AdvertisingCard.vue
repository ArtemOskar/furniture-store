<template>
  <section class="sct-card">
    <div class="img-body"><img :src="imgSrc" alt="" /></div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <a :href="link">{{ textLink }}</a>
  </section>
</template>

<script>
export default {
  name: 'AdvertisingCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    textLink: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../public/scss/_functions.scss';
.sct-card {
  display: flex;
  flex-direction: column;
  flex: 0 1 48.4%;
  padding-bottom: rem(20);
  border-bottom: 1px solid #dadada;

  @media (max-width: 768px) {
    padding-bottom: rem(15);
  }

  h1 {
    font-family: PermianSlabSerifTypeface;
    font-size: super-clamp(28, 36, 390, 1600);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: rem(19);
    @media (max-width: 768px) {
      margin-bottom: rem(10);
    }
  }

  p {
    font-size: super-clamp(13, 16, 390, 1600);
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: rem(24);
  }

  a {
    display: block;
    align-self: flex-end;
    max-width: fit-content;
    margin-right: rem(50);
    font-size: super-clamp(13, 15, 390, 1600);
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: 0.9px;
    text-transform: uppercase;
    color: #b14101;
    border-bottom: 1px solid transparent;

    @media (max-width: 1024px) {
      margin-right: rem(0);
    }
    @media (any-hover: hover) {
      &:hover {
        border-bottom: 1px solid #b14101;
      }
    }
  }
}
.img-body {
  position: relative;
  padding-bottom: 51.6%;
  margin-bottom: rem(40);
  @media (max-width: 768px) {
    margin-bottom: rem(15);
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
