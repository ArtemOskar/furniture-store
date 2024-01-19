import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ResizeMixin from './mixins/ResizeMixin'

createApp(App).use(store).use(router).mixin(ResizeMixin).mount('#app')
