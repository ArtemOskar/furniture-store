<template>
  <section class="sct-main">
    <div class="container">
      <h1>Витрина товаров</h1>

      <div>
        <div class="btn-body">
          <btn-categori-showcase text="Межкомнатные двери" />
          <btn-categori-showcase text="Мебель" />
          <btn-categori-showcase text="Стеновые панели «Буазери»" />
          <btn-categori-showcase text="Лестницы" />
          <btn-categori-showcase text="Мебельные фасады" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BtnCategoriShowcase from '@/components/ProductShowcase/BtnCategoriShowcase.vue'

export default {
  name: 'ProductShowcase',
  components: {
    BtnCategoriShowcase,
  },
}
</script>

<style lang="scss" scoped>
@import '../../../public/scss/_functions.scss';

h1 {
  font-family: PermianSlabSerifTypeface;
  font-size: super-clamp(40, 64, 390, 1600);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.64px;
  margin-bottom: super-clamp(15, 30, 390, 1600);
}
.sct-main {
  padding: rem(30) 0;
}
.btn-body {
  display: flex;
  overflow-x: auto;
}
</style>
