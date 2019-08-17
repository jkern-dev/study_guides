import React from 'react';
import JournalBox from './journal_box';

class JournalCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      newJournal: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({newJournal: nextProps.newJournal.title});
  }

  handleSubmit(e) {
    e.preventDefault();
    let journal = {
      title: this.state.title
    };

    this.props.composeJournal(journal);
    this.setState({title: ''});
  }

  update() {
    return e => this.setState({
      title: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="textarea"
              value={this.state.title}
              onChange={this.update()}
              placeholder="Journal Title"
            />
            <input type="submit" value="Create Journal" />
          </div>
        </form>
        <br />
        <JournalBox title={this.state.newJournal} />
      </div>
    )
  }
}

export default JournalCompose;