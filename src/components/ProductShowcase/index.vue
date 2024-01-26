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

      <div class="products-body">
        <product-card :imgCollection="imgCollection" id="pagination-1" />
        <product-card :imgCollection="imgCollection" id="pagination-2" />
        <product-card :imgCollection="imgCollection" id="pagination-3" />
        <product-card :imgCollection="imgCollection" id="pagination-4" />
        <product-card :imgCollection="imgCollection" id="pagination-5" />
        <product-card :imgCollection="imgCollection" id="pagination-6" />
        <product-card :imgCollection="imgCollection" id="pagination-7" />
        <product-card :imgCollection="imgCollection" id="pagination-8" />
        <product-card :imgCollection="imgCollection" id="pagination-9" />
      </div>
    </div>

    <btn-schow-all />
  </section>
</template>

<script>
import BtnCategoriShowcase from '@/components/ProductShowcase/BtnCategoriShowcase.vue'
import ProductCard from '@/components/ProductCard.vue'
import BtnSchowAll from '@/components/ProductShowcase/BtnSchowAll.vue'

export default {
  name: 'ProductShowcase',
  components: {
    BtnCategoriShowcase,
    ProductCard,
    BtnSchowAll,
  },
  data() {
    return {
      imgCollection: [
        require('@/assets/img/doors/01/01.png'),
        require('@/assets/img/doors/01/02.png'),
        require('@/assets/img/doors/01/03.png'),
      ],
    }
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
.products-body {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: rem(40);
  padding: rem(40) 0;

  @media (max-width: 768px) {
    padding: rem(20) 0;
    row-gap: rem(20);
  }
}
</style>
