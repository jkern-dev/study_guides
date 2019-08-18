import React from 'react';

class Entries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
      journal: []
    }
  }

  componentWillMount() {
    this.props.fetchJournalEntries(this.props.match.params.id);
  }

  componentWillReceiveProps(newState) {
    this.setState({entries: newState.entries});
  }

  render() {
    if (this.state.entries.length === 0) {
      return (<div>Journal has no entries</div>);
    } else {
      return (
        <div>
          <h2>All Journal Entries</h2>
        </div>
      );
    }
  }
}

export default Entries;