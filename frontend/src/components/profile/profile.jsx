import React from 'react';
import JournalBox from '../journals/journal_box';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      journals: []
    }
  }

  componentWillMount() {
    console.log(this.props.currentUser.id);
    this.props.fetchUserJournals(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {
    this.setState({ journals: newState.journals });
  }

  render() {
    if (this.state.journals.length === 0) {
      return (<div>User has no journals</div>);
    } else {
      return (
        <div>
          <h2>All of this users journals</h2>
          {this.state.journals.map(journal => (
            <JournalBox key={journal._id} title={journal.title} journalID={journal._id} />
          ))}
        </div>
      );
    }
  }
}

export default Profile;