import axios from 'axios'
import {
    NO_INTERNET,
    FORBIDDEN,
    LOGIN_FAILED,
    SERVER_ERROR
} from '@/helpers/message'
import router from "@/router";
import {userStore} from "@/stores/userStore";
import {useToast} from "vue-toastification";
let activeRequests = 0;
const ApiService = {
    init() {
        const service = this
        axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL
        // intercept every request
        axios.interceptors.request.use(
          (request) => {
              if (activeRequests === 0) {
                  userStore().setLoading();
              }
              activeRequests++;
              const accessToken = localStorage.getItem('__TOKEN');
              if (accessToken) {
                  request.headers['Authorization'] = `Bearer ${accessToken}`;
              }
              return request
          },
          (error) => {
              activeRequests--;
              const {response} = error;
              // Do something with request error
              if (activeRequests === 0) {
                  userStore().finishLoading();
              }
              return Promise.reject(response)
          }
        )
        axios.interceptors.response.use(
          (response) => {
              activeRequests--;
              // const {config} = response;
              if (activeRequests === 0) {
                  userStore().finishLoading();
              }
              return response
          },
          (error) => {
              const {response, config} = error;
              // check if config errorHandler is on
              if (config?.globalErrorHandler?.on) {
                  service.handleError(response, config.globalErrorHandler.exclude)
              }
              userStore().finishLoading()
              return Promise.reject(response)
          }
        )
    },
    get(resource, params = {}, config = {}) {
        return axios.get(resource, {
            ...config,
            params: params,
        });
    },
    post(resource, params, config = {}) {
        return axios.post(`${resource}`, params, config)
    },
    update(resource, params, config = {}) {
        return axios.put(resource, params, config)
    },
    updateBulk(resource, params, config = {}) {
        return axios.put(resource, params, config)
    },
    delete(resource, config = {}) {
        return axios.delete(resource, config)
    },
    setHeader: function () {
        axios.defaults.withCredentials = false;
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Accept'] = 'application/json';
        axios.defaults.globalErrorHandler = {
            on: true,
            exclude: [],
        };
    },
    handleError(response, ignore = []) {
        const $toast = useToast();
        if (ignore.length > 0 && ignore.includes(response.status)) return response
        let error = null
        if (!navigator.onLine || !response) {
            error = new Error(NO_INTERNET)
        } else {
            switch (response.status) {
                case 400:
                    error = new Error(response.data.message)
                    break;

                case 401:
                    router.push('/login')
                    break;

                case 403:
                    error = new Error(FORBIDDEN)
                    break;

                case 404:
                    router.push('/404')
                    break;

                case 422:
                    if (response.config.url === 'auth/login') {
                        error = new Error(LOGIN_FAILED)
                    }
                    $toast.error(response.data.message);
                    break;

                default:
                    error = new Error(SERVER_ERROR)
                    break;
            }
        }
        console.log(error);
    }
}

export default ApiService