import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/styles.scss"
// import  "./node_modules/sass-loader/dist/cjs.js"

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'vue-bootstrap-calendar'

import 'v-data-table'
import 'v-data-table/dist/v-data-table.js'
import 'v-data-table/src/main.js'
import 'v-data-table/dist-module/main.js'
// import 'v-data-table/dist-module/main.js.map'
import 'v-data-table/src/Components/v-data-table.vue'

// import { DataTable } from 'v-data-table/dist/v-data-table.js';

// import * as yourModuleName from 'module-name';
// const DataTable = require('v-data-table');

// import DataTable from 'v-data-table'
// Vue.use(DataTable)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
