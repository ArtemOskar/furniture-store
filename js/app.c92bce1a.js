(function(){"use strict";var e={967:function(e,t,i){var n=i(9242),r=i(3396);function o(e,t,i,n,o,a){const l=(0,r.up)("general-layout");return(0,r.wg)(),(0,r.j4)(l)}function a(e,t,i,n,o,a){const l=(0,r.up)("main-header"),c=(0,r.up)("router-view"),s=(0,r.up)("main-footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l),(0,r.Wm)(c),(0,r.Wm)(s)],64)}var l=i(7139),c=i.p+"img/logo.a9790fde.svg",s=i.p+"img/phone.124c2664.svg";const u=e=>((0,r.dD)("data-v-98fd13c6"),e=e(),(0,r.Cn)(),e),d={class:"container"},p=u((()=>(0,r._)("img",{src:c},null,-1))),g={ref:"navigation",class:"navigation"},m={ref:"contacts",class:"contacts"},f=u((()=>(0,r._)("a",{href:"email:support@wwwwwww.com",class:"link-email"},"support@wwwwwww.com",-1))),v=u((()=>(0,r._)("a",{href:"tel:88001111111",class:"link-tel"},"8 (800) 111-11-11",-1))),h=[f,v],w={class:"btn-catalog"},y={class:"mobile-actions-btn"},b=u((()=>(0,r._)("a",{href:"tel:88001111111",class:"ic-phone"},[(0,r._)("img",{src:s})],-1)));function _(e,t,i,n,o,a){const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",null,[(0,r._)("div",d,[(0,r._)("div",{ref:"logo",onClick:t[0]||(t[0]=(...e)=>a.closeBurgerMenu&&a.closeBurgerMenu(...e)),class:"logo"},[(0,r.Wm)(c,{to:"/"},{default:(0,r.w5)((()=>[p])),_:1})],512),(0,r._)("nav",g,[(0,r.Wm)(c,{onClick:a.closeBurgerMenu,to:"/delivery"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.$t("mainMenu.delivery")),1)])),_:1},8,["onClick"]),(0,r.Wm)(c,{onClick:a.closeBurgerMenu,to:"/articles"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.$t("mainMenu.articles")),1)])),_:1},8,["onClick"]),(0,r.Wm)(c,{onClick:a.closeBurgerMenu,to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.$t("mainMenu.about")),1)])),_:1},8,["onClick"]),(0,r.Wm)(c,{onClick:a.closeBurgerMenu,to:"/contacts"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.$t("mainMenu.contacts")),1)])),_:1},8,["onClick"])],512),(0,r._)("div",m,h,512),(0,r._)("button",w,(0,l.zw)(e.$t("buttons.catalog")),1),o.windowInnerWidth<=1024?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r._)("div",y,[b,(0,r._)("span",{onClick:t[1]||(t[1]=(...e)=>a.toggleBurgerMenu&&a.toggleBurgerMenu(...e)),class:(0,l.C_)(["btn-burger",a.isActivBurgerMenu])},null,2)]),(0,r._)("div",{ref:"burgerMenu",class:(0,l.C_)(["burger-menu",a.isActivBurgerMenu])},null,2)],64)):(0,r.kq)("",!0)])])}var S={name:"MainHeader",data(){return{openStatusBurgerMenu:!1,windowInnerWidth:window.innerWidth}},methods:{toggleBurgerMenu(){!1===this.openStatusBurgerMenu?this.openStatusBurgerMenu=!0:this.openStatusBurgerMenu=!1},closeBurgerMenu(){this.openStatusBurgerMenu=!1},handleResize(){this.windowInnerWidth=window.innerWidth,this.transferMenuItems()},transferMenuItems(){this.$refs.burgerMenu&&this.$refs.navigation&&this.$refs.contacts&&this.windowInnerWidth<1024?(this.$refs.burgerMenu.appendChild(this.$refs.navigation),this.$refs.burgerMenu.appendChild(this.$refs.contacts)):this.$refs.navigation&&this.$refs.contacts&&this.windowInnerWidth>=1024&&(this.$refs.logo.after(this.$refs.contacts),this.$refs.logo.after(this.$refs.navigation))}},computed:{isActivBurgerMenu(){return!1===this.openStatusBurgerMenu?"close-menu":"open-menu"}},mounted(){window.addEventListener("resize",this.handleResize),this.transferMenuItems()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)}},k=i(89);const P=(0,k.Z)(S,[["render",_],["__scopeId","data-v-98fd13c6"]]);var M=P,I=i.p+"img/vk.612b7018.svg",C=i.p+"img/p.9eded154.svg",$=i.p+"img/tg.ff6acb93.svg";const O=e=>((0,r.dD)("data-v-1899cebe"),e=e(),(0,r.Cn)(),e),B={class:"container"},x={class:"box"},W={class:"sct-logo"},D=O((()=>(0,r._)("img",{src:c},null,-1))),L={class:"sct-contacts"},z=O((()=>(0,r._)("a",{href:"#",class:"contacts-phone"},"8 (800) 111-11-11",-1))),A=["innerHTML"],N=O((()=>(0,r._)("a",{href:"#",class:"contacts-email"},"support@wwwwwww.com",-1))),U={class:"box"},E={class:"sct-links"},q={class:"sct-menu"},F=(0,r.uE)('<div class="social" data-v-1899cebe><a href="#" class="vk" data-v-1899cebe><img src="'+I+'" data-v-1899cebe></a><a href="#" class="p" data-v-1899cebe><img src="'+C+'" data-v-1899cebe></a><a href="#" data-v-1899cebe><img src="'+$+'" class="tg" data-v-1899cebe></a></div>',1);function j(e,t,i,n,o,a){const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("footer",null,[(0,r._)("div",B,[(0,r._)("section",x,[(0,r._)("div",W,[(0,r._)("div",{onClick:t[0]||(t[0]=(...t)=>e.closeBurgerMenu&&e.closeBurgerMenu(...t)),class:"logo"},[(0,r.Wm)(c,{to:"/"},{default:(0,r.w5)((()=>[D])),_:1})]),(0,r._)("p",null,(0,l.zw)(e.$t("footer.label")),1),(0,r._)("p",null,(0,l.zw)(e.$t("footer.privatePolicy")),1)]),(0,r._)("div",L,[z,(0,r._)("p",null,(0,l.zw)(e.$t("footer.contacts.metro")),1),(0,r._)("p",{innerHTML:e.$t("footer.contacts.location")},null,8,A),N])]),(0,r._)("section",U,[(0,r._)("div",E,[(0,r.Wm)(c,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.$t("footer.links.doors")),1)])),_:1}),(0,r.Wm)(c,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.$t("footer.links.furniture")),1)])),_:1}),(0,r.Wm)(c,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.$t("footer.links.wallPanels")),1)])),_:1}),(0,r.Wm)(c,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.$t("footer.links.stairs")),1)])),_:1}),(0,r.Wm)(c,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.$t("footer.links.furnitureFacades")),1)])),_:1})]),(0,r._)("div",q,[(0,r.Wm)(c,{class:"link link-pc",to:"/delivery"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.$t("mainMenu.delivery")),1)])),_:1}),(0,r.Wm)(c,{class:"link link-pc",to:"/articles"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.$t("mainMenu.articles")),1)])),_:1}),(0,r.Wm)(c,{class:"link link-pc",to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.$t("mainMenu.about")),1)])),_:1}),(0,r.Wm)(c,{class:"link privacy-policy",to:"/contacts"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.$t("footer.links.privacyPolicy")),1)])),_:1}),F])])])])}var T={name:"MainFooter"};const V=(0,k.Z)(T,[["render",j],["__scopeId","data-v-1899cebe"]]);var Y=V,Z={name:"GeneralLayout",components:{MainHeader:M,MainFooter:Y}};const H=(0,k.Z)(Z,[["render",a]]);var K=H,G={components:{GeneralLayout:K},mounted(){const e=navigator.language||navigator.userLanguage;this.$i18n.locale=e.toLowerCase().slice(0,2)}};const R=(0,k.Z)(G,[["render",o]]);var J=R,Q=i(2483),X=i.p+"img/home-main-scrin.f1757cc3.png",ee=i.p+"img/home-main-decor.775f8639.png";const te=e=>((0,r.dD)("data-v-59a46231"),e=e(),(0,r.Cn)(),e),ie={class:"home-scrin"},ne=te((()=>(0,r._)("div",{class:"img-container"},[(0,r._)("img",{src:X,alt:""})],-1))),re={class:"sct-text"},oe=te((()=>(0,r._)("img",{src:ee,alt:""},null,-1)));function ae(e,t,i,n,o,a){const c=(0,r.up)("advertising-block"),s=(0,r.up)("product-showcase");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("section",ie,[ne,(0,r._)("div",re,[oe,(0,r._)("h1",null,(0,l.zw)(e.$t("homePage.mainScrin.title")),1),(0,r._)("h2",null,(0,l.zw)(e.$t("homePage.mainScrin.subtitle")),1),(0,r._)("p",null,(0,l.zw)(e.$t("homePage.mainScrin.text")),1),(0,r._)("button",null,(0,l.zw)(e.$t("homePage.mainScrin.mainScrinButton")),1)])]),(0,r._)("main",null,[(0,r.Wm)(c),(0,r.Wm)(s)])],64)}const le={class:"sct-body-cards"},ce={class:"container"};function se(e,t,n,o,a,l){const c=(0,r.up)("advertising-card");return(0,r.wg)(),(0,r.iD)("section",le,[(0,r._)("div",ce,[(0,r.Wm)(c,{title:e.$t("advertisingBlock.card01.title"),description:e.$t("advertisingBlock.card01.description"),textLink:e.$t("advertisingBlock.card01.textLink"),imgSrc:i(6446),link:"#"},null,8,["title","description","textLink","imgSrc"]),(0,r.Wm)(c,{title:e.$t("advertisingBlock.card02.title"),description:e.$t("advertisingBlock.card02.description"),textLink:e.$t("advertisingBlock.card02.textLink"),imgSrc:i(1478),link:"#"},null,8,["title","description","textLink","imgSrc"])])])}const ue={class:"sct-card"},de={class:"img-body"},pe=["src"],ge=["href"];function me(e,t,i,n,o,a){return(0,r.wg)(),(0,r.iD)("section",ue,[(0,r._)("div",de,[(0,r._)("img",{src:i.imgSrc,alt:""},null,8,pe)]),(0,r._)("h1",null,(0,l.zw)(i.title),1),(0,r._)("p",null,(0,l.zw)(i.description),1),(0,r._)("a",{href:i.link},(0,l.zw)(i.textLink),9,ge)])}var fe={name:"AdvertisingCard",props:{title:{type:String,required:!0},description:{type:String,required:!0},textLink:{type:String,required:!0},imgSrc:{type:String,required:!0},link:{type:String,required:!0}}};const ve=(0,k.Z)(fe,[["render",me],["__scopeId","data-v-66865565"]]);var he=ve,we={name:"AdvertisingBlock",components:{AdvertisingCard:he}};const ye=(0,k.Z)(we,[["render",se],["__scopeId","data-v-2547d910"]]);var be=ye;const _e=e=>((0,r.dD)("data-v-3d2ed9cc"),e=e(),(0,r.Cn)(),e),Se={class:"sct-main"},ke={class:"container"},Pe=_e((()=>(0,r._)("h1",null,"Витрина товаров",-1))),Me={class:"btn-body"},Ie={class:"products-body"};function Ce(e,t,i,n,o,a){const l=(0,r.up)("btn-categori-showcase"),c=(0,r.up)("product-card"),s=(0,r.up)("btn-schow-all");return(0,r.wg)(),(0,r.iD)("section",Se,[(0,r._)("div",ke,[Pe,(0,r._)("div",null,[(0,r._)("div",Me,[(0,r.Wm)(l,{text:"Межкомнатные двери"}),(0,r.Wm)(l,{text:"Мебель"}),(0,r.Wm)(l,{text:"Стеновые панели «Буазери»"}),(0,r.Wm)(l,{text:"Лестницы"}),(0,r.Wm)(l,{text:"Мебельные фасады"})])]),(0,r._)("div",Ie,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.getDoorsCollection(this.$i18n.locale),(e=>((0,r.wg)(),(0,r.j4)(c,{key:e.id,id:e.id,title:e.title,price:e.price,oldPrice:e.oldPrice,"img-collection":e.img},null,8,["id","title","price","oldPrice","img-collection"])))),128))])]),(0,r.Wm)(s)])}function $e(e,t,i,n,o,a){return(0,r.wg)(),(0,r.iD)("button",null,(0,l.zw)(i.text),1)}var Oe={name:"BtnCategoriShowcase",props:{text:{type:String,required:!0}}};const Be=(0,k.Z)(Oe,[["render",$e],["__scopeId","data-v-306520c0"]]);var xe=Be;const We=e=>((0,r.dD)("data-v-214fddb2"),e=e(),(0,r.Cn)(),e),De={class:"card-body"},Le={class:"prices"},ze=["src"],Ae={class:"card-actions"},Ne=We((()=>(0,r._)("a",{href:""},"купить",-1)));function Ue(e,t,i,n,o,a){const c=(0,r.up)("swiper-slide"),s=(0,r.up)("swiper");return(0,r.wg)(),(0,r.iD)("div",De,[(0,r._)("h1",null,(0,l.zw)(i.title),1),(0,r._)("div",Le,[(0,r._)("span",{class:(0,l.C_)(["price",a.discountedPrice])},(0,l.zw)(a.priceSplit)+" "+(0,l.zw)(a.currencyUnitPrice),3),(0,r._)("span",{class:(0,l.C_)(["old-price",a.discountedPrice])},(0,l.zw)(a.oldPriceSplit)+" "+(0,l.zw)(a.currencyUnitOldPrice),3)]),(0,r._)("div",null,[(0,r.Wm)(s,{class:"slider","slides-per-view":1,"space-between":0,pagination:{clickable:!0,el:a.classFromId},modules:a.modulesSlider},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.imgCollection,((e,t)=>((0,r.wg)(),(0,r.j4)(c,{key:t},{default:(0,r.w5)((()=>[(0,r._)("img",{src:e,alt:""},null,8,ze)])),_:2},1024)))),128))])),_:1},8,["pagination","modules"])]),(0,r._)("div",Ae,[(0,r._)("div",{class:(0,l.C_)(["slider-pagination",i.id])},null,2),Ne])])}var Ee=i(4528),qe=i(1008),Fe={name:"ProductCard",components:{Swiper:Ee.tq,SwiperSlide:Ee.o5},props:{id:{type:String,required:!0},title:{type:String,required:!0},price:{type:Number,required:!0},oldPrice:{type:Number,required:!0},imgCollection:{type:Array,required:!0}},computed:{modulesSlider(){return[qe.tl]},classFromId(){return"."+this.id},currencyUnitPrice(){return"ru"==this.$i18n.locale||"ua"==this.$i18n.locale?"₴":"$"},currencyUnitOldPrice(){return null!==this.oldPrice?"ru"==this.$i18n.locale||"ua"==this.$i18n.locale?"₴":"$":""},discountedPrice(){return null!==this.oldPrice?"discounted-price":null},priceSplit(){let e=this.price.toString();return e.slice(0,-3)+" "+e.slice(-3)},oldPriceSplit(){if(null!==this.oldPrice){let e=this.oldPrice.toString();return e.slice(0,-3)+" "+e.slice(-3)}return""}}};const je=(0,k.Z)(Fe,[["render",Ue],["__scopeId","data-v-214fddb2"]]);var Te=je;const Ve=e=>((0,r.dD)("data-v-9616d992"),e=e(),(0,r.Cn)(),e),Ye={class:"container"},Ze=Ve((()=>(0,r._)("button",null,"показать все",-1))),He=[Ze];function Ke(e,t,i,n,o,a){return(0,r.wg)(),(0,r.iD)("div",Ye,He)}var Ge={name:"BtnSchowAll"};const Re=(0,k.Z)(Ge,[["render",Ke],["__scopeId","data-v-9616d992"]]);var Je=Re,Qe=i(65),Xe={name:"ProductShowcase",components:{BtnCategoriShowcase:xe,ProductCard:Te,BtnSchowAll:Je},computed:{...(0,Qe.Se)("doors",["getDoorsCollection"])}};const et=(0,k.Z)(Xe,[["render",Ce],["__scopeId","data-v-3d2ed9cc"]]);var tt=et,it={name:"HomePage",components:{AdvertisingBlock:be,ProductShowcase:tt}};const nt=(0,k.Z)(it,[["render",ae],["__scopeId","data-v-59a46231"]]);var rt=nt;const ot=[{path:"/",name:"home",component:rt},{path:"/delivery",name:"delivery",component:()=>i.e(443).then(i.bind(i,1842))},{path:"/articles",name:"articles",component:()=>i.e(443).then(i.bind(i,2268))},{path:"/about",name:"about",component:()=>i.e(443).then(i.bind(i,2104))},{path:"/contacts",name:"contacts",component:()=>i.e(443).then(i.bind(i,4488))},{path:"/catalog",name:"catalog",component:()=>i.e(443).then(i.bind(i,7015))}],at=(0,Q.p7)({history:(0,Q.PO)("/furniture-store/"),routes:ot});var lt=at;i(560);const ct={doorsList:[{id:"aa1638247141996",title:{ua:"Sofia Original 50.07",ru:"Sofia Original 50.07",en:"Sofia Original 50.07"},price:{uah:8400,usd:219},oldPrice:{uah:null,usd:null},img:[i(8533),i(101),i(2469)],typeDoor:"",style:"",material:"",covering:"","typeСonstruction":"","typeСladding":""},{id:"aa1638247141997",title:{ua:"VISION Модель 64.43",ru:"VISION Модель 64.43",en:"VISION Model 64.43"},price:{uah:8400,usd:219},oldPrice:{uah:10200,usd:269},img:[i(8533),i(101),i(2469)],typeDoor:"",style:"",material:"",covering:"","typeСonstruction":"","typeСladding":""},{id:"aa1638247141998",title:{ua:"VISION Модель 64.44",ru:"VISION Модель 64.44",en:"VISION Model 64.44"},price:{uah:8400,usd:219},oldPrice:{uah:null,usd:null},img:[i(8533),i(101),i(2469)],typeDoor:"",style:"",material:"",covering:"","typeСonstruction":"","typeСladding":""},{id:"aa1638247141999",title:{ua:"SKYLINE Модель 55.21",ru:"SKYLINE Модель 55.21",en:"SKYLINE Model 55.21"},price:{uah:8400,usd:219},oldPrice:{uah:null,usd:null},img:[i(8533),i(101),i(2469)],typeDoor:"",style:"",material:"",covering:"","typeСonstruction":"","typeСladding":""},{id:"aa1638247142000",title:{ua:"SKYLINE Модель 55.23",ru:"SKYLINE Модель 55.23",en:"SKYLINE Model 55.23"},price:{uah:8400,usd:219},oldPrice:{uah:null,usd:null},img:[i(8533),i(101),i(2469)],typeDoor:"",style:"",material:"",covering:"","typeСonstruction":"","typeСladding":""},{id:"aa1638247142001",title:{ua:"VISION Модель 64.44",ru:"VISION Модель 64.44",en:"VISION Model 64.44"},price:{uah:8400,usd:219},oldPrice:{uah:11900,usd:314},img:[i(8533),i(101),i(2469)],typeDoor:"",style:"",material:"",covering:"","typeСonstruction":"","typeСladding":""},{id:"aa1638247142002",title:{ua:"CLASSIC Модель 65.44",ru:"CLASSIC Модель 65.44",en:"CLASSIC Model 65.44"},price:{uah:8400,usd:219},oldPrice:{uah:null,usd:null},img:[i(8533),i(101),i(2469)],typeDoor:"",style:"",material:"",covering:"","typeСonstruction":"","typeСladding":""},{id:"aa1638247142003",title:{ua:"CLASSIC Модель 64.22",ru:"CLASSIC Модель 64.22",en:"CLASSIC Model 64.22"},price:{uah:8400,usd:219},oldPrice:{uah:null,usd:null},img:[i(8533),i(101),i(2469)],typeDoor:"",style:"",material:"",covering:"","typeСonstruction":"","typeСladding":""},{id:"aa1638247142004",title:{ua:"METAMORFOSA Модель 65.171",ru:"METAMORFOSA Модель 65.171",en:"METAMORFOSA Model 65.171"},price:{uah:8400,usd:219},oldPrice:{uah:null,usd:null},img:[i(8533),i(101),i(2469)],typeDoor:"",style:"",material:"",covering:"","typeСonstruction":"","typeСladding":""},{id:"aa1638247142005",title:{ua:"Sofia Original 50.07",ru:"Sofia Original 50.07",en:"Sofia Original 50.07"},price:{uah:8400,usd:219},oldPrice:{uah:null,usd:null},img:[i(8533),i(101),i(2469)],typeDoor:"",style:"",material:"",covering:"","typeСonstruction":"","typeСladding":""},{id:"aa1638247142006",title:{ua:"VISION Модель 64.43",ru:"VISION Модель 64.43",en:"VISION Model 64.43"},price:{uah:8400,usd:219},oldPrice:{uah:10200,usd:269},img:[i(8533),i(101),i(2469)],typeDoor:"",style:"",material:"",covering:"","typeСonstruction":"","typeСladding":""},{id:"aa1638247142007",title:{ua:"VISION Модель 64.44",ru:"VISION Модель 64.44",en:"VISION Model 64.44"},price:{uah:8400,usd:219},oldPrice:{uah:null,usd:null},img:[i(8533),i(101),i(2469)],typeDoor:"",style:"",material:"",covering:"","typeСonstruction":"","typeСladding":""}]},st={getDoorsCollection:({doorsList:e})=>t=>{const i=[];if("ru"===t)for(const n of e)i.push({id:n.id,title:n.title.ru,price:n.price.uah,oldPrice:n.oldPrice.uah,img:n.img});else if("ua"===t)for(const n of e)i.push({id:n.id,title:n.title.ua,price:n.price.uah,oldPrice:n.oldPrice.uah,img:n.img});else if("en"===t)for(const n of e)i.push({id:n.id,title:n.title.en,price:n.price.usd,oldPrice:n.oldPrice.usd,img:n.img});return i}},ut={},dt={};var pt={namespaced:!0,state:ct,getters:st,mutations:ut,actions:dt},gt=(0,Qe.MT)({state:{},getters:{},mutations:{},actions:{},modules:{doors:pt}}),mt=i(7853),ft=JSON.parse('{"mainMenu":{"delivery":"Delivery","articles":"Articles","about":"About","contacts":"Contacts"},"buttons":{"catalog":"Catalog"},"footer":{"label":"Factory G&G. 2024","privatePolicy":"© All rights reserved","contacts":{"metro":"m. Universitet","location":"02000, city Kyiv,<br> b-r. Tarasa Shevchenko, 00, h. 00"},"links":{"doors":"Interior doors","furniture":"Furniture","wallPanels":"Wall panels \'Boiserie\'","stairs":"Stairs","furnitureFacades":"Furniture facades","privacyPolicy":"Privacy Policy"}},"homePage":{"mainScrin":{"mainScrinButton":"More","title":"Classic Wood Stile","subtitle":"enterior-exterior","text":"Invites architects, designers and builders to cooperate"}},"advertisingBlock":{"card01":{"title":"Doors to order","description":"At our own factory, we create beautiful, safe and almost eternal doors, interior partitions, wall panels and other solutions for your interior.","textLink":"order a unique door"},"card02":{"title":"3D milling","description":"The products created by a computer-controlled milling machine are distinguished by the highest quality, absolute detail and perfect accuracy.","textLink":"choose from the catalog"}}}'),vt=JSON.parse('{"mainMenu":{"delivery":"Доставка","articles":"Статті","about":"Про нас","contacts":"Контакти"},"buttons":{"catalog":"Каталог"},"footer":{"label":"Фабрика G&G. 2024","privatePolicy":"© Всі права захищені","contacts":{"metro":"м. Університет","location":"02000, м. Київ,<br> б-р. Тараса Шевченка, б. 00"},"links":{"doors":"Міжкімнатні двері","furniture":"Меблі","wallPanels":"Стінові панелі «Буазері»","stairs":"Сходи","furnitureFacades":"Меблеві фасади","privacyPolicy":"Політика конфіденційності"}},"homePage":{"mainScrin":{"mainScrinButton":"Детальніше","title":"Classic Wood Stile","subtitle":"enterior-exterior","text":"Запрошує до співпраці архітекторів, дизайнерів та будівельників"}},"advertisingBlock":{"card01":{"title":"Двері на замовлення","description":"На власній фабриці ми створюємо красиві, безпечні та практично вічні двері, міжкімнатні перегородки, стінові панелі та інші рішення для вашого інтер\'єру.","textLink":"замовити унікальні двері"},"card02":{"title":"3D фрезерування","description":"Вироби, які створює фрезерний верстат, керований комп\'ютером, вирізняються найвищою якістю, абсолютною деталізацією та ідеальною точністю.","textLink":"вибрати з каталогу"}}}'),ht=JSON.parse('{"mainMenu":{"delivery":"Доставка","articles":"Статьи","about":"О нас","contacts":"Контакты"},"buttons":{"catalog":"Каталог"},"footer":{"label":"Фабрика G&G. 2024","privatePolicy":"© Все права защищены","contacts":{"metro":"м. Университет","location":"02000, г. Киев,<br> б-р. Тараса Шевченко, д. 00"},"links":{"doors":"Межкомнатные двери","furniture":"Мебель","wallPanels":"Стеновые панели «Буазери»","stairs":"Лестницы","furnitureFacades":"Мебельные фасады","privacyPolicy":"Политика конфиденциальности"}},"homePage":{"mainScrin":{"mainScrinButton":"Подробнее","title":"Classic Wood Stile","subtitle":"enterior-exterior","text":"Приглашает к сотрудничеству архитекторов, дизайнеров и строителей"}},"advertisingBlock":{"card01":{"title":"Двери на заказ","description":"На собственной фабрике мы создаем красивые, безопасные и практически вечные двери, межкомнатные перегородки, стеновые панели и другие решения для вашего интерьера.","textLink":"заказать уникальную дверь"},"card02":{"title":"3D фрезеровка","description":"Изделия, которые создает фрезерный станок, управляемый компьютером, отличаются высочайшим качеством, абсолютной детализацией и идеальной точностью.","textLink":"выбрать из каталога"}}}');const wt=(0,mt.o)({legacy:!1,locale:"en",fallbackLocale:"en",messages:{en:ft,ua:vt,ru:ht}});var yt=wt;(0,n.ri)(J).use(gt).use(lt).use(yt).mount("#app")},6446:function(e,t,i){e.exports=i.p+"img/01.8e8bafff.png"},1478:function(e,t,i){e.exports=i.p+"img/02.8d270256.png"},8533:function(e,t,i){e.exports=i.p+"img/01.b58daaef.png"},101:function(e,t,i){e.exports=i.p+"img/02.8800b1d4.png"},2469:function(e,t,i){e.exports=i.p+"img/03.c25d4d73.png"}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,i),o.exports}i.m=e,function(){var e=[];i.O=function(t,n,r,o){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],o=e[u][2];for(var l=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(l=!1,o<a&&(a=o));if(l){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))}}(),function(){i.u=function(e){return"js/about.fb6f0960.js"}}(),function(){i.miniCssF=function(e){}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="furniture-store:";i.l=function(n,r,o,a){if(e[n])e[n].push(r);else{var l,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",t+o),l.src=n),e[n]=[r];var p=function(t,i){l.onerror=l.onload=null,clearTimeout(g);var r=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(i)})),t)return t(i)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),c&&document.head.appendChild(l)}}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p="/furniture-store/"}(),function(){var e={143:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(i,n){r=e[t]=[i,n]}));n.push(r[2]=o);var a=i.p+i.u(t),l=new Error,c=function(n){if(i.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,r[1](l)}};i.l(a,c,"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],l=n[1],c=n[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);if(c)var u=c(i)}for(t&&t(n);s<a.length;s++)o=a[s],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},n=self["webpackChunkfurniture_store"]=self["webpackChunkfurniture_store"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(967)}));n=i.O(n)})();
//# sourceMappingURL=app.c92bce1a.js.map