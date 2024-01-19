<template>
   <header>
      <div class="container">
         <div class="logo"><router-link to="/"><img src="@/assets/img/logo.svg"></router-link></div>

         <template v-if="windowWidth >= 1024">
            <nav class="pc-navigation">
               <router-link to="/delivery">Доставка</router-link> 
               <router-link to="/articles">Статьи</router-link> 
               <router-link to="/about">О нас</router-link> 
               <router-link to="/contacts">Контакты</router-link> 
            </nav>
         </template>

         <template v-if="windowWidth >= 1024">
            <div class="pc-contacts">
               <a href="email:support@wwwwwww.com" class="link-email">support@wwwwwww.com</a>
               <a href="tel:88001111111" class="link-tel">8 (800) 111-11-11</a>
            </div>
         </template>

         <button class="btn-catalog">Каталог</button>

         <template v-if="windowWidth < 1024">
            <div class="mobile-actions-btn">
               <a href="tel:88001111111" class="ic-phone"><img src="@/assets/img/icons/phone.svg"></a>
               <span @click="openBurgerMenu" class="btn-burger" :class="isActivBurgerMenu"></span>
            </div>
            <div class="burger-menu" :class="isActivBurgerMenu">
               <nav class="mobile-navigation">
                  <router-link to="/delivery">Доставка</router-link> 
                  <router-link to="/articles">Статьи</router-link> 
                  <router-link to="/about">О нас</router-link> 
                  <router-link to="/contacts">Контакты</router-link> 
               </nav>
               <div class="mobile-contacts">
                  <a href="email:support@wwwwwww.com" class="link-email">support@wwwwwww.com</a>
                  <a href="tel:88001111111" class="link-tel">8 (800) 111-11-11</a>
               </div>
            </div>
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
         }
      },
      methods: {
         openBurgerMenu() {
            if(this.openStatusBurgerMenu === false) this.openStatusBurgerMenu = true
            else this.openStatusBurgerMenu = false
         }
      },
      computed: {
         // windowWidth() {
         //    return window.innerWidth
         // },
         isActivBurgerMenu() {
            return this.openStatusBurgerMenu === false ? 'close-menu' : 'open-menu'
         },
      },
   }
</script>

<style lang="scss" scoped>
header {
   background-color: #3B3937;
   padding: 30px 0;
}
.pc-navigation {
display: flex;
align-items: center;
column-gap: 36px;
@media (max-width: 1200px) {
      column-gap: 1.5em;
}
  a {
   color: #ffffff;
   font-size: 1rem;
   text-wrap: nowrap;
   &:hover {
      cursor: pointer;
      color: #926341;
   }

    &.router-link-exact-active {
      color: #FFD6A8;
      border-bottom: 1px solid #FFD6A8;
    }
  }
}
.mobile-navigation {
   display: flex;
   flex-direction: column;
   align-items: center;
   row-gap: 35px;
   padding-top: 100px;
   a {
   color: #ffffff;
   font-size: 1.5rem;
   font-weight: 400;
   text-wrap: nowrap;
   max-width: fit-content;
    &.router-link-exact-active {
      color: #FFD6A8;
      border-bottom: 1px solid #FFD6A8;
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
   a, img {
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
.pc-contacts {
   display: flex;
   align-items: center;
   column-gap: 4.12em;
   @media (max-width: 1200px) {
      column-gap: 1.5em;
   }
   & .link-email {
      font-size: 1rem;
      max-width: fit-content;
   }
   & .link-tel {
      font-family: "PermianSlabSerifTypeface";
      font-size: 1.25rem;
      font-weight: 700;
   }
   a {
      color: #FFD6A8;
      text-wrap: nowrap;
      &:hover {
         cursor: pointer;
         color: #926341;
      }
   }
}
.mobile-contacts {
   display: flex;
   flex-direction: column;
   align-items: center;
   &.link-email {
      font-size: 1rem;
      max-width: fit-content;
   }
   &.link-tel {
      font-family: "PermianSlabSerifTypeface";
      font-size: 1.9rem;
      font-weight: 700;
   }
   a {
      color: #FFD6A8;
      text-wrap: nowrap;
   }
}
.btn-catalog {
   position: relative;
   text-transform: uppercase;
   color: #ffffff;
   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
   font-size: 0.81rem;
   font-weight: 700;
   padding: 12px 31px;
   border: 1px solid #A9845C;
   background-color: #A9845C;
   z-index: 50;
   @media (max-width: 1023.98px) {
      padding: 6px 21px;
   }
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
}
.btn-burger {
      position: relative;
      display: block;
      width: 24px;
      height: 10px;

   &::after, &::before {
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
   background-color: #A9845C;
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