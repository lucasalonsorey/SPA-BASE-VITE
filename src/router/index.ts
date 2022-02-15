import Home from '@/views/Home.vue'

const routes = [
  { name: 'Home', path: '/home', component: Home, meta: {Auth: true} },
]

export {
  routes
}