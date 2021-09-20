import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const instance = axios.create({
  timeout: 2000,
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('res', response)
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default instance
