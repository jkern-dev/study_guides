import { getUserJournals, writeJournal } from '../util/journal_api_util';

export const RECEIVE_USER_JOURNALS = "RECEIVE_USER_JOURNALS";
export const RECEIVE_NEW_JOURNAL = "RECEIVE_NEW_JOURNAL";

export const receiveUserJournals = journals => ({
  type: RECEIVE_USER_JOURNALS,
  journals
});

export const receiveNewJournal = journal => ({
  type: RECEIVE_NEW_JOURNAL,
  journal
});

export const fetchUserJournals = (id) => dispatch => (
  getUserJournals(id)
    .then(journals => dispatch(receiveUserJournals(journals)))
    .catch(err => console.log(err))
);

export const composeJournal = data => dispatch => (
  writeJournal(data)
    .then(journal => dispatch(receiveNewJournal(journal)))
    .catch(err => console.log(err))
);