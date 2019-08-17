import {  connect } from 'react-redux';
import { composeJournal } from '../../actions/journal_actions';
import JournalCompose from './journal_compose';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newJournal: state.journals.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeJournal: data => dispatch(composeJournal(data))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(JournalCompose);