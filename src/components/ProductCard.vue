<template>
  <div class="card-body">
    <h1>{{ title }}</h1>

    <div class="prices">
      <span class="price" :class="discountedPrice">{{ priceSplit }} {{ currencyUnitPrice }}</span>
      <span class="old-price" :class="discountedPrice">{{ oldPriceSplit }} {{ currencyUnitOldPrice }}</span>
    </div>

    <div>
      <swiper
        class="slider"
        :slides-per-view="1"
        :space-between="0"
        :pagination="{ clickable: true, el: classFromId }"
        :modules="modulesSlider"
      >
        <swiper-slide v-for="(img, index) in imgCollection" :key="index">
          <img :src="img" alt="" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="card-actions">
      <div class="slider-pagination" :class="id"></div>
      <a href="">купить</a>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/scss'

export default {
  name: 'ProductCard',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: true,
    },
    imgCollection: {
      type: Array,
      required: true,
    },
  },

  computed: {
    modulesSlider() {
      return [Pagination]
    },
    classFromId() {
      return '.' + this.id
    },
    currencyUnitPrice() {
      return this.$i18n.locale == 'ru' || this.$i18n.locale == 'ua' ? '₴' : '$'
    },
    currencyUnitOldPrice() {
      if (this.oldPrice !== null) {
        return this.$i18n.locale == 'ru' || this.$i18n.locale == 'ua' ? '₴' : '$'
      }
      return ''
    },
    discountedPrice() {
      return this.oldPrice !== null ? 'discounted-price' : null
    },
    priceSplit() {
      let price = this.price.toString()
      return price.slice(0, -3) + ' ' + price.slice(-3)
    },
    oldPriceSplit() {
      if (this.oldPrice !== null) {
        let price = this.oldPrice.toString()
        return price.slice(0, -3) + ' ' + price.slice(-3)
      }
      return ''
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../public/scss/_functions.scss';

h1 {
  font-size: rem(18);
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0.18px;
  margin-bottom: rem(7);
}
.prices {
  display: flex;
  align-items: center;
  column-gap: rem(12);
  color: #3b3937;

  & .price {
    font-size: rem(18);
    font-style: normal;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.18px;
  }

  & .discounted-price {
    color: #b14101;
  }
}
.old-price {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: rem(8);
    left: 0;
    transform: rotate(-10deg);
    background-color: #b14101;
  }
}
.card-body {
  padding: rem(20);
  border: 1px solid #dadada;
  flex: 0 1 31.25%;

  @media (max-width: 950px) {
    flex: 0 1 48%;
  }

  @media (max-width: 630px) {
    flex: 0 1 100%;
  }

  @media (any-hover: hover) {
    &:hover {
      .swiper-slide-active {
        img {
          transform: scale(1.2);
          transition: 0.3s;
          cursor: grab;
        }
      }
    }
  }
}
.slider {
  width: rem(240);
  padding: rem(33) rem(0) rem(23) rem(0);
}
.card-actions {
  display: flex;
  justify-content: space-between;

  a {
    font-size: super-clamp(13, 15, 390, 1600);
    font-style: normal;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: 0.9px;
    text-transform: uppercase;
    color: #b14101;
    border-bottom: 1px solid transparent;

    @media (any-hover: hover) {
      &:hover {
        border-bottom: 1px solid #b14101;
      }
    }
  }
}
</style>
