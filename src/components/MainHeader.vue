<template>
  <header>
    <div class="container">
      <div @click="closeBurgerMenu" class="logo">
        <router-link to="/"><img src="@/assets/img/logo.svg" /></router-link>
      </div>

      <nav class="navigation">
        <router-link @click="closeBurgerMenu" to="/delivery">Доставка</router-link>
        <router-link @click="closeBurgerMenu" to="/articles">Статьи</router-link>
        <router-link @click="closeBurgerMenu" to="/about">О нас</router-link>
        <router-link @click="closeBurgerMenu" to="/contacts">Контакты</router-link>
      </nav>

      <div class="contacts">
        <a href="email:support@wwwwwww.com" class="link-email">support@wwwwwww.com</a>
        <a href="tel:88001111111" class="link-tel">8 (800) 111-11-11</a>
      </div>

      <button class="btn-catalog">Каталог</button>

      <template v-if="windowInnerWidth <= 1024">
        <div class="mobile-actions-btn">
          <a href="tel:88001111111" class="ic-phone"><img src="@/assets/img/icons/phone.svg" /></a>
          <span @click="toggleBurgerMenu" class="btn-burger" :class="isActivBurgerMenu"></span>
        </div>
        <div class="burger-menu" :class="isActivBurgerMenu"></div>
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
      this.showMenuItems()
    },
    showMenuItems() {
      const burgerMenu = document.querySelector('.burger-menu')
      const navigation = document.querySelector('.navigation')
      const contacts = document.querySelector('.contacts')
      const logo = document.querySelector('.logo')
      if (burgerMenu && navigation && contacts && this.windowInnerWidth < 1024) {
        burgerMenu.appendChild(navigation)
        burgerMenu.appendChild(contacts)
      } else if (navigation && contacts && this.windowInnerWidth >= 1024) {
        logo.after(contacts)
        logo.after(navigation)
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
    this.showMenuItems()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style lang="scss" scoped>
header {
  background-color: #3b3937;
  padding: 30px 0;
  @media (max-width: 1024px) {
    padding: 15px 0;
  }
}
.navigation {
  display: flex;
  align-items: center;
  column-gap: 36px;

  @media (max-width: 1200px) {
    column-gap: 1.5em;
  }

  @media (max-width: 1023.98px) {
    flex-direction: column;
    column-gap: 0;
    row-gap: 35px;
    padding-top: 100px;
    margin-bottom: 50px;
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
  column-gap: 4.12em;
  @media (max-width: 1200px) {
    column-gap: 1.5em;
  }
  @media (max-width: 1023.98px) {
    flex-direction: column-reverse;
    column-gap: 0;
    row-gap: 1em;
  }
  & .link-email {
    font-size: 1rem;
    max-width: fit-content;
  }
  & .link-tel {
    font-family: 'PermianSlabSerifTypeface';
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
  width: 106px;
  height: 60px;
  z-index: 50;
  a,
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1023.98px) {
    width: 64px;
    height: 36px;
  }
}
.ic-phone {
  width: 18px;
  height: 18px;
}
.btn-catalog {
  position: relative;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  font-size: 0.81rem;
  font-weight: 700;
  padding: 12px 31px;
  border: 1px solid #a9845c;
  background-color: #a9845c;
  z-index: 50;
  @media (max-width: 1023.98px) {
    padding: 6px 21px;
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
    width: 34px;
    height: 3px;
    top: -5px;
    right: 11px;
    background: url('~@/assets/img/vector-btn/01.svg') no-repeat;
  }
  &::after {
    content: '';
    position: absolute;
    width: 65px;
    height: 2px;
    bottom: -5px;
    left: 17px;
    background: url('~@/assets/img/vector-btn/02.svg') no-repeat;
  }
}
.mobile-actions-btn {
  display: flex;
  align-items: center;
  column-gap: 26px;
  z-index: 50;
  @media (min-width: 1024px) {
    display: none;
  }
}
.btn-burger {
  position: relative;
  display: block;
  width: 24px;
  height: 10px;

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
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
