import axios from 'axios';

export const getUserJournals = id => {
  return axios.get(`/api/journals/user/${id}`)
}

export const writeJournal = data => {
  return axios.post('/api/journals/', data)
}