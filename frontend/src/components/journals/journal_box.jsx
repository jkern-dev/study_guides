import React from 'react';

class JournalBox extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default JournalBox;