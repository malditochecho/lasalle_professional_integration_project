import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import SignInView from '../views/SignInView.vue'
import ProfileView from '../views/ProfileView.vue'
import AdminNewMovie from '../views/AdminNewMovie.vue'
import Movie from '../views/MovieView.vue'
import List from '../views/ListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/signup', name: 'signup', component: SignUpView },
    { path: '/signin', name: 'signin', component: SignInView },
    { path: '/profile', name: 'profile', component: ProfileView },
    { path: '/movie/new', name: 'newmovie', component: AdminNewMovie },
    { path: '/movie/:id', name: 'moviedetail', component: Movie },
    { path: '/list/:name', name: 'movielist', component: List }
  ]
})

export default router
