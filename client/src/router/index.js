import Vue from 'vue'
import Router from 'vue-router'
// The @ is just a nice alias for the /src directory that was setup in webpack by the Vue command line tool.
// from https://scotch.io/tutorials/getting-started-with-vue-router
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs/Index'
import Songs2 from '@/components/Songs2/Index'
import CreateSong from '@/components/CreateSong'
import EditSong from '@/components/EditSong'
import ViewSong from '@/components/ViewSong/Index'

// runs in the browser

Vue.use(Router)    // hbkrouter

console.log('in here hbk')

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songsy', // seems to be http://localhost:8080/#/songs hbkhbk
      name: 'songs',
      component: Songs2
    },
    {
      path: '/songsx', // seems to be http://localhost:8080/#/songs hbkhbk
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/songs/:songId/edit',
      name: 'song-edit',
      component: EditSong
    },
    {
      path: '*',
      redirect: '/songsy'
    }
  ]
})
