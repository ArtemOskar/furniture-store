<template>
  <footer>
    <div class="container">
      <section class="box">
        <div class="sct-logo">
          <div @click="closeBurgerMenu" class="logo">
            <router-link to="/"><img src="@/assets/img/logo.svg" /></router-link>
          </div>
          <p>{{ $t('footer.label') }}</p>
          <p>{{ $t('footer.privatePolicy') }}</p>
        </div>

        <div class="sct-contacts">
          <a href="#" class="contacts-phone">8 (800) 111-11-11</a>
          <p>{{ $t('footer.contacts.metro') }}</p>
          <p v-html="$t('footer.contacts.location')"></p>

          <a href="#" class="contacts-email">support@wwwwwww.com</a>
        </div>
      </section>

      <section class="box">
        <div class="sct-links">
          <router-link to="/">{{ $t('footer.links.doors') }}</router-link>
          <router-link to="/">{{ $t('footer.links.furniture') }}</router-link>
          <router-link to="/">{{ $t('footer.links.wallPanels') }}</router-link>
          <router-link to="/">{{ $t('footer.links.stairs') }}</router-link>
          <router-link to="/">{{ $t('footer.links.furnitureFacades') }}</router-link>
        </div>

        <div class="sct-menu">
          <router-link class="link link-pc" to="/delivery">{{ $t('mainMenu.delivery') }}</router-link>
          <router-link class="link link-pc" to="/articles">{{ $t('mainMenu.articles') }}</router-link>
          <router-link class="link link-pc" to="/about">{{ $t('mainMenu.about') }}</router-link>
          <router-link class="link privacy-policy" to="/contacts">{{ $t('footer.links.privacyPolicy') }}</router-link>

          <div class="social">
            <a href="#" class="vk"><img src="@/assets/img/icons/vk.svg" /></a>
            <a href="#" class="p"><img src="@/assets/img/icons/p.svg" /></a>
            <a href="#"><img src="@/assets/img/icons/tg.svg" class="tg" /></a>
          </div>
        </div>
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
  background: url('~@/assets/img/bg-footer.png') 100% / cover no-repeat;

  @media (max-width: 600px) {
    padding: super-clamp(40, 80, 320, 600) 0;
  }
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
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
    row-gap: rem(70);
  }

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
.box {
  display: flex;
  justify-content: space-between;
  width: super-clamp(453, 537, 1024, 1320);
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    row-gap: rem(40);
    width: 100%;
  }
}
.sct-logo {
  & .logo {
    margin-bottom: rem(21);
  }

  p:not(:last-child) {
    margin-bottom: rem(6);
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
.sct-links {
  display: flex;
  flex-direction: column;
  row-gap: rem(18);
  @media (max-width: 600px) {
    display: none;
  }
  a {
    opacity: 0.6;
  }
}
.social {
  position: absolute;
  display: flex;
  left: rem(150);

  @media (max-width: 600px) {
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }

  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: rem(40);
    height: rem(40);
    border-radius: 50%;
    border: 1px solid #505050;
    background-color: #3b3937;
    opacity: 1;

    &.vk {
      margin-right: rem(-6);
      z-index: 3;
    }

    &.p {
      margin-right: rem(-6);
      z-index: 2;
    }

    @media (any-hover: hover) {
      &:hover {
        img {
          opacity: 1;
        }
      }
    }
  }
  img {
    width: rem(20);
    height: rem(20);
    opacity: 0.6;

    @media (max-width: 600px) {
      opacity: 1;
    }
    &.tg {
      position: absolute;
      left: rem(7);
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
.sct-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: rem(18);
  min-width: rem(254);

  @media (max-width: 1024px) {
    min-width: rem(0);
  }

  & .link {
    opacity: 0.6;
  }

  & .link-pc {
    @media (max-width: 600px) {
      display: none;
    }
  }

  & .privacy-policy {
    margin-top: rem(35);

    @media (max-width: 600px) {
      margin-top: rem(0);
      margin-bottom: rem(80);
    }
  }
}
</style>
