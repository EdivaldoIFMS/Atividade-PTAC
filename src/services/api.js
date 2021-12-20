import axios from 'axios'

const api = axios.create({
  baseURL: 'https://@luizpicoli.repl.co/'
})

export default api