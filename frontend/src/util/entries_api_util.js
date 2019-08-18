import axios from 'axios';

export const getJournalEntries = id => {
  return axios.get(`/api/entries/journal/${id}`)
}

export const writeEntry = data => {
  return axios.post('/api/entries')
}