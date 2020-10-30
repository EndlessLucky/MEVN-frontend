import Vue from 'vue'
import Router from 'vue-router'
import Posts from '../components/Posts'
import NewPost from '../components/NewPost'
import EditPost from '../components/EditPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/posts/:id',
      name: 'EditPost',
      component: EditPost
    }
  ]
})
