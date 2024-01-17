<template>
   <header>
      <div class="container">
         <div class="logo"><router-link to="/"><img src="@/assets/img/logo.svg" alt=""></router-link></div>
         <nav>
            <router-link to="/delivery">Доставка</router-link> 
            <router-link to="/articles">Статьи</router-link> 
            <router-link to="/about">О нас</router-link> 
            <router-link to="/contacts">Контакты</router-link> 
         </nav>
         <div class="contacts">
            <a href="email:support@wwwwwww.com" class="link-email">support@wwwwwww.com</a>
            <a href="tel:8 (800)111-11-11" class="link-tel">8 (800) 111-11-11</a>
            <button class="btn-catalog">Каталог</button>
         </div>
      </div>
      </header>
</template>

<script>
   export default {
      name: 'MainHeader',
   }
</script>

<style lang="scss" scoped>
.container {
   display: flex;
   justify-content: space-between;
}
.logo {
   width: 106px;
   height: 60px;
}
.contacts {
   display: flex;
   align-items: center;
   column-gap: 66px;
   & .link-email {
      font-size: 1rem;
   }
   & .link-tel {
      font-family: "PermianSlabSerifTypeface";
      font-size: 1.25rem;
      font-weight: 700;
   }
   a {
      color: #FFD6A8;
   }
}
.btn-catalog {
   width: 120px;
   height: 40px;
}
header {
   background-color: #3B3937;
   padding: 30px 0;
}
nav {
display: flex;
align-items: center;
column-gap: 36px;
  a {
   color: #ffffff;
   font-size: 1rem;

    &.router-link-exact-active {
      color: #FFD6A8;
      border-bottom: 1px solid #FFD6A8;
    }
  }
}
</style>