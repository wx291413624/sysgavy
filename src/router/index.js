import Vue from 'vue'
import Router from 'vue-router'
import Backgroud from '@/components/Backgroud'
import Index from '@/components/Index'
import Whisper from '@/components/Whisper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Backgroud',
      component: Backgroud
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'whisper',
          name: 'whisper',
          component: Whisper
        }
      ]
    }
  ]
})
