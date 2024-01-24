<template>
  <section class="sct-body-cards">
    <div class="container">
      <advertising-card
        :title="$t('advertisingBlock.card01.title')"
        :description="$t('advertisingBlock.card01.description')"
        :textLink="$t('advertisingBlock.card01.textLink')"
        :imgSrc="require('@/assets/img/advertising-block/01.png')"
        link="#"
      />
      <advertising-card
        :title="$t('advertisingBlock.card02.title')"
        :description="$t('advertisingBlock.card02.description')"
        :textLink="$t('advertisingBlock.card02.textLink')"
        :imgSrc="require('@/assets/img/advertising-block/02.png')"
        link="#"
      />
    </div>
  </section>
</template>

<script>
import AdvertisingCard from '@/components/AdvertisingBlock/AdvertisingCard.vue'

export default {
  name: 'AdvertisingBlock',
  components: {
    AdvertisingCard,
  },
}
</script>

<style lang="scss" scoped>
@import '../../../public/scss/_functions.scss';
.container {
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: rem(30);
  }
}
.sct-body-cards {
  padding: super-clamp(30, 90, 390, 1600) 0;
}
</style>
