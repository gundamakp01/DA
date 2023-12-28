import { defineStore } from "pinia";

export const userStore = defineStore('userStore', {
  state : () => ({
    user: {
      id: '',
      name: '',
      email: '',
      role: ''
    },
    errors: {
    },
    loading: false
  }),

  getters: {
    isLoading(state) {
      return state.loading
    }
  },

  actions: {
    setLoading() {
      this.loading = true;
    },
    finishLoading() {
      this.loading = false;
    },
    setUser() {
      console.log('aaaaaaaaaaaaaaaaaa')
      this.user = {
        id: '',
        name: '',
        email: '',
        role: ''
      };
    },

    register(data) {

    },

    async login(data){
      localStorage.setItem('__TOKEN', data.access_token);
      this.user = data.user
    },

    async signup(data){

    },

    storeUser(data){
      this.user = data.user
    },

    logout(){
      this.router.push("/")
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: localStorage,
      },
    ],
  },
})