import { RECEIVE_JOURNAL_ENTRIES, RECEIVE_NEW_ENTRY } from '../actions/entries_actions';

const entryReducer =  (state = { all: {}, user: {}, new: undefined}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_JOURNAL_ENTRIES:
      newState.user = action.entries.data;
      return newState;
    case RECEIVE_NEW_ENTRY:
      newState.new = action.entry.data;
      return newState;
    default:
      return state;
  }
};

export default entryReducer;