import React from 'react';
import { Link } from 'react-router-dom'

class JournalBox extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/journal/${this.props.journalID}`}><h3>{this.props.title}</h3></Link>
      </div>
    );
  }
}

export default JournalBox;