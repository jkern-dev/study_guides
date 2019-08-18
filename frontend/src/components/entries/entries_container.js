import { connect } from 'react-redux';
import { fetchJournalEntries } from '../../actions/entries_actions';
import Entries from './entries';

const mapStateToProps = (state) => {
  return {
    entries: Object.values(state.entries.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchJournalEntries: id => dispatch(fetchJournalEntries(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Entries);