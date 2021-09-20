import axios from './config'
const API_PRE = process.env.REACT_APP_API_PRE

console.log('api', API_PRE)
export const getData = async () => {
  return axios.get(`${API_PRE}/report/teams`)
}
