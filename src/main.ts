import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory} from 'vue-router'
import { routes } from './router'
import { createPinia } from 'pinia'
import './index.css'

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})
const app = createApp(App,{
})

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  next()  
})
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')