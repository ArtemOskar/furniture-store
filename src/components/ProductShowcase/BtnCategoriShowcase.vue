<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  name: 'BtnCategoriShowcase',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../public/scss/_functions.scss';
button {
  display: block;
  text-wrap: nowrap;
  font-size: rem(15);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  padding: rem(9) rem(53);
  background-color: transparent;
  border: 1px solid #dadada;
  opacity: 0.7;

  @media (max-width: 768px) {
    padding: rem(9) rem(20);
  }

  @media (any-hover: hover) {
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  &:not(:first-child) {
    border-left: none;
  }

  &.activ-categori {
    border: 2px solid #3b3937;
    font-weight: 700;
    opacity: 1;
  }
}
</style>
