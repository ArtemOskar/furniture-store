<template>
  <header>
    <div class="container">
      <div ref="logo" @click="closeBurgerMenu" class="logo">
        <router-link to="/"><img src="@/assets/img/logo.svg" /></router-link>
      </div>

      <nav ref="navigation" class="navigation">
        <router-link @click="closeBurgerMenu" to="/delivery">{{ $t('mainMenu.delivery') }}</router-link>
        <router-link @click="closeBurgerMenu" to="/articles">{{ $t('mainMenu.articles') }}</router-link>
        <router-link @click="closeBurgerMenu" to="/about">{{ $t('mainMenu.about') }}</router-link>
        <router-link @click="closeBurgerMenu" to="/contacts">{{ $t('mainMenu.contacts') }}</router-link>
      </nav>

      <div ref="contacts" class="contacts">
        <a href="email:support@wwwwwww.com" class="link-email">support@wwwwwww.com</a>
        <a href="tel:88001111111" class="link-tel">8 (800) 111-11-11</a>
      </div>

      <button class="btn-catalog">{{ $t('buttons.catalog') }}</button>

      <template v-if="windowInnerWidth <= 1024">
        <div class="mobile-actions-btn">
          <a href="tel:88001111111" class="ic-phone"><img src="@/assets/img/icons/phone.svg" /></a>
          <span @click="toggleBurgerMenu" class="btn-burger" :class="isActivBurgerMenu"></span>
        </div>
        <div ref="burgerMenu" class="burger-menu" :class="isActivBurgerMenu"></div>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  data() {
    return {
      openStatusBurgerMenu: false,
      windowInnerWidth: window.innerWidth,
    }
  },
  methods: {
    toggleBurgerMenu() {
      if (this.openStatusBurgerMenu === false) this.openStatusBurgerMenu = true
      else this.openStatusBurgerMenu = false
    },
    closeBurgerMenu() {
      this.openStatusBurgerMenu = false
    },
    handleResize() {
      this.windowInnerWidth = window.innerWidth
      this.transferMenuItems()
    },
    transferMenuItems() {
      if (this.$refs.burgerMenu && this.$refs.navigation && this.$refs.contacts && this.windowInnerWidth < 1024) {
        this.$refs.burgerMenu.appendChild(this.$refs.navigation)
        this.$refs.burgerMenu.appendChild(this.$refs.contacts)
      } else if (this.$refs.navigation && this.$refs.contacts && this.windowInnerWidth >= 1024) {
        this.$refs.logo.after(this.$refs.contacts)
        this.$refs.logo.after(this.$refs.navigation)
      }
    },
  },
  computed: {
    isActivBurgerMenu() {
      return this.openStatusBurgerMenu === false ? 'close-menu' : 'open-menu'
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.transferMenuItems()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style lang="scss" scoped>
@import '../../public/scss/_functions.scss';
header {
  background-color: #3b3937;
  padding: rem(30) 0;
  @media (max-width: 1024px) {
    padding: rem(15) 0;
  }
}
.navigation {
  display: flex;
  align-items: center;
  column-gap: rem(36);

  @media (max-width: 1200px) {
    column-gap: rem(24);
  }

  @media (max-width: 1023.98px) {
    flex-direction: column;
    column-gap: 0;
    row-gap: rem(35);
    padding-top: rem(100);
    margin-bottom: rem(50);
  }

  a {
    color: #ffffff;
    font-size: 1rem;
    text-wrap: nowrap;

    @media (max-width: 1023.98px) {
      font-size: 1.5rem;
    }
    @media (any-hover: hover) {
      &:hover {
        cursor: pointer;
        color: #926341;
      }
    }
    &.router-link-exact-active {
      color: #ffd6a8;
      border-bottom: 1px solid #ffd6a8;
    }
  }
}
.contacts {
  display: flex;
  align-items: center;
  column-gap: rem(67);
  @media (max-width: 1200px) {
    column-gap: 1.5rem;
  }
  @media (max-width: 1023.98px) {
    flex-direction: column-reverse;
    column-gap: 0;
    row-gap: rem(16);
  }
  & .link-email {
    font-size: 1rem;
    max-width: fit-content;
  }
  & .link-tel {
    font-family: PermianSerifTypeface;
    font-size: 1.25rem;
    font-weight: 700;
    @media (max-width: 1023.98px) {
      font-size: 1.8rem;
    }
  }
  a {
    color: #ffd6a8;
    text-wrap: nowrap;
    @media (any-hover: hover) {
      &:hover {
        cursor: pointer;
        color: #926341;
      }
    }
  }
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  position: relative;
  width: rem(106);
  height: rem(60);
  z-index: 50;
  a,
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1023.98px) {
    width: rem(64);
    height: rem(36);
  }
}
.ic-phone {
  width: rem(18);
  height: rem(18);
}
.btn-catalog {
  position: relative;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  font-size: 0.81rem;
  font-weight: 700;
  padding: rem(12) rem(31);
  border: 1px solid #a9845c;
  background-color: #a9845c;
  z-index: 50;
  @media (max-width: 1023.98px) {
    padding: rem(6) rem(21);
  }
  @media (any-hover: hover) {
    &:hover {
      cursor: pointer;
      border: 1px solid #926341;
      background-color: #926341;
      &::before {
        background: url('~@/assets/img/vector-btn/01-hover.svg') no-repeat;
      }
      &::after {
        background: url('~@/assets/img/vector-btn/02-hover.svg') no-repeat;
      }
    }
  }
  &::before {
    content: '';
    position: absolute;
    width: rem(34);
    height: rem(3);
    top: rem(-5);
    right: rem(11);
    background: url('~@/assets/img/vector-btn/01.svg') no-repeat;
  }
  &::after {
    content: '';
    position: absolute;
    width: rem(65);
    height: rem(2);
    bottom: rem(-5);
    left: rem(17);
    background: url('~@/assets/img/vector-btn/02.svg') no-repeat;
  }
}
.mobile-actions-btn {
  display: flex;
  align-items: center;
  column-gap: rem(26);
  z-index: 50;
  @media (min-width: 1024px) {
    display: none;
  }
}
.btn-burger {
  position: relative;
  display: block;
  width: rem(24);
  height: rem(10);

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: rem(24);
    height: rem(2);
    background-color: #ffffff;
  }
  &::after {
    top: 0;
    left: 0;
  }
  &::before {
    bottom: 0;
    left: 0;
  }
  &.open-menu {
    &::after {
      transform: translateY(4px) rotate(45deg);
      transition-duration: 0.5s;
    }
    &::before {
      transform: translateY(-4px) rotate(-45deg);
      transition-duration: 0.5s;
    }
  }
  &.close-menu {
    &::after {
      transform: translateY(0) rotate(0);
      transition-duration: 0.5s;
    }
    &::before {
      transform: translateY(0.5) rotate(0);
      transition-duration: 0.5s;
    }
  }
}
.burger-menu {
  z-index: 40;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #a9845c;
  top: 0;
  right: 0;
  transform: translateX(100%);
  transition-duration: 0.5s;
  background: url('~@/assets/img/bg-burger-menu.png');
  &.open-menu {
    transform: translateX(0%);
  }
}
</style>
