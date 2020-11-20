import Vue from 'vue'
import Vuex from 'vuex'
import PostsService from '../services/PostsService'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: []
  },
  getters: {
    POSTS: state => {
      return state.posts
    }
  },
  mutations: {
    SET_POST: (state, payload) => {
      state.posts = payload
    },
    ADD_POST: (state, payload) => {
      state.posts.push(payload)
    }
  },
  actions: {
    GET_POST: async (context, payload) => {
      const response = await PostsService.fetchPosts()
      let data = response.data.posts
      context.commit('SET_POST', data)
    },
    SAVE_POST: async (context, payload) => {
      await PostsService.addPost(payload)
      context.commit('ADD_POST', payload)
    }
  }
})

export default store
