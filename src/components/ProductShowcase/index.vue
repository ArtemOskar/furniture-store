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
        <product-card
          v-for="door in getDoorsCollection(this.$i18n.locale)"
          :key="door.id"
          :id="door.id"
          :title="door.title"
          :price="door.price"
          :oldPrice="door.oldPrice"
          :img-collection="door.img"
        />
      </div>
    </div>

    <btn-schow-all />
  </section>
</template>

<script>
import BtnCategoriShowcase from '@/components/ProductShowcase/BtnCategoriShowcase.vue'
import ProductCard from '@/components/ProductCard.vue'
import BtnSchowAll from '@/components/ProductShowcase/BtnSchowAll.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ProductShowcase',
  components: {
    BtnCategoriShowcase,
    ProductCard,
    BtnSchowAll,
  },
  computed: {
    ...mapGetters('doors', ['getDoorsCollection']),
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
