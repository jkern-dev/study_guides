import {  getJournalEntries, writeEntry } from '../util/entries_api_util';

export const RECEIVE_JOURNAL_ENTRIES = "RECEIVE_JOURNAL_ENTRIES";
export const RECEIVE_NEW_ENTRY = "RECEIVE_NEW_ENTRY";

export const receiveJournalEntries = entries => ({
  type: RECEIVE_JOURNAL_ENTRIES,
  entries
});

export const receiveNewEntry = entry => ({
  type: RECEIVE_NEW_ENTRY,
  entry
});

export const fetchJournalEntries = (id) => dispatch => (
  getJournalEntries(id)
    .then(entries => dispatch(receiveJournalEntries(entries)))
    .catch(err => console.log(err))
);

export const composeEntry = data => dispatch => (
  writeEntry(data)
    .then(entry => dispatch(receiveNewEntry(entry)))
    .catch(err => console.log(err))
);