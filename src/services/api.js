import axios from 'axios'

const api = axios.create({
  baseURL: 'https://atividade3.edivaldojunior1.repl.co/'
})

export default api