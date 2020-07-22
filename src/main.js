import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE,
  authDomain: "vuecrm-7c0f1.firebaseapp.com",
  databaseURL: "https://vuecrm-7c0f1.firebaseio.com",
  projectId: "vuecrm-7c0f1",
  storageBucket: "vuecrm-7c0f1.appspot.com",
  messagingSenderId: "656709666677",
  appId: "1:656709666677:web:6c5bf4150c3f47a45a353c",
  measurementId: "G-BRB2WRM2MN"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
