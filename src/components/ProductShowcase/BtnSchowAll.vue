<template>
  <div class="container">
    <button>показать все</button>
  </div>
</template>

<script>
export default {
  name: 'BtnSchowAll',
}
</script>

<style lang="scss" scoped>
@import '../../../public/scss/_functions.scss';

button {
  font-size: super-clamp(13, 15, 390, 1600);
  font-style: normal;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  background-color: transparent;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(68, 68, 68, 0.2);
  height: super-clamp(50, 60, 390, 1600);
  cursor: pointer;
  position: relative;
  opacity: 0.6;

  @media (any-hover: hover) {
    &:hover {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: rem(381);
    height: rem(7);
    left: rem(72);
    top: rem(4);
    background: url('~@/assets/img/vector-btn/03.svg') 0 0 no-repeat;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: rem(420);
    height: rem(12);
    right: rem(14);
    bottom: rem(-20);
    background: url('~@/assets/img/vector-btn/04.svg') 0 0 no-repeat;

    @media (max-width: 768px) {
      display: none;
    }
  }
}
</style>
