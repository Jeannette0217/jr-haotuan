import Vue from "vue";
import App from "./App";
import DialogBox from "./components/DialogBox/DialogBox";
import mixin from "./common/mixin/mixin";
import store from "./store";

import {
  msg,
  isLogin,
  debounce,
  throttle,
  prePage,
  date,
} from "@/common/js/util";
Vue.mixin(mixin);

Vue.config.productionTip = false;
Vue.prototype.$store = store;

Vue.prototype.$util = {
  msg,
  isLogin,
  debounce,
  throttle,
  prePage,
  date,
};

// 全局组件
Vue.component("DialogBox", DialogBox);
//mescroll
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
Vue.component("mescroll-body", MescrollBody);
Vue.component("mescroll-uni", MescrollUni);

App.mpType = "app";

const app = new Vue({
  ...App,
});
app.$mount();
