<template>
  <footer>
    <div class="container">
      <section class="sct-logo">
        <div @click="closeBurgerMenu" class="logo">
          <router-link to="/"><img src="@/assets/img/logo.svg" /></router-link>
        </div>
        <p>{{ $t('footer.label') }}</p>
        <p>{{ $t('footer.privatePolicy') }}</p>
      </section>

      <section class="sct-contacts">
        <a href="#" class="contacts-phone">8 (800) 111-11-11</a>
        <p>{{ $t('footer.contacts.metro') }}</p>
        <p v-html="$t('footer.contacts.location')"></p>

        <a href="#" class="contacts-email">support@wwwwwww.com</a>
      </section>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
}
</script>

<style lang="scss" scoped>
@import '../../public/scss/_functions.scss';
footer {
  min-height: rem(360);
  padding: rem(100) 0;
  background: url('~@/assets/img/bg-footer.png') no-repeat;
}
.logo {
  position: relative;
  width: rem(90);
  height: rem(51);
  opacity: 1;
  a,
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
.container {
  display: flex;
  a {
    @media (any-hover: hover) {
      &:hover {
        opacity: 1;
      }
    }
  }
  p {
    opacity: 0.6;
  }
  a,
  p {
    color: #ffffff;
    font-size: rem(13);
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
  }
}
.sct-logo {
  & .logo {
    margin-bottom: rem(21);
  }

  p:not(:last-child) {
    margin-bottom: rem(6);
  }
}
.sct-contacts {
  p:not(:last-child) {
    margin-bottom: rem(18);
  }

  & .contacts-phone {
    color: #ffffff;
    font-family: PermianSerifTypeface;
    font-size: rem(25);
    font-style: normal;
    font-weight: 700;
    margin-bottom: rem(36);
    display: block;
  }
  & .contacts-email {
    opacity: 0.6;
  }
}
</style>
