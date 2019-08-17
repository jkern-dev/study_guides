import { RECEIVE_USER_JOURNALS, RECEIVE_NEW_JOURNAL } from '../actions/journal_actions';

const journalReducer = (state = { all: {}, user: {}, new: undefined}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_USER_JOURNALS:
      newState.user = action.journals.data;
      return newState;
    case RECEIVE_NEW_JOURNAL:
      newState.new = action.journal.data;
      return newState;
    default:
      return state;
  }
};

export default journalReducer;