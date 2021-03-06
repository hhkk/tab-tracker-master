import Vue from 'vue'
import Router from 'vue-router'
// The @ is just a nice alias for the /src directory that was setup in webpack by the Vue command line tool.
// from https://scotch.io/tutorials/getting-started-with-vue-router
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs/Index'
import Songs2 from '@/components/Songs2/Index'
import CreateSong from '@/components/CreateSong'
import CreateUstodo from '@/components/CreateUstodo'
import EditSong from '@/components/EditSong'
import EditUstodo from '@/components/EditUstodo'
import ViewSong from '@/components/ViewSong/Index'
import ViewUstodo from '@/components/ViewUstodo/Index'

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
      name: 'songsx',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/ustodos/create',
      name: 'ustodos-create',
      component: CreateUstodo
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/ustodos/:ustodoId',
      name: 'ustodo',
      component: ViewUstodo
    },
    {
      path: '/songs/:songId/edit',
      name: 'song-edit',
      component: EditSong
    },
    {
      path: '/ustodos/:ustodoId/edit',
      name: 'ustodo-edit',
      component: EditUstodo
    },
    {
      path: '*',
      redirect: '/songsy'
    }
  ]
})
