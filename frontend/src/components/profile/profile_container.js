import { connect } from 'react-redux';
import { fetchUserJournals } from '../../actions/journal_actions';
import Profile from  './profile';

const mapStateToProps = (state) => {
  return {
    journals: Object.values(state.journals.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserJournals: id => dispatch(fetchUserJournals(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);