import React, { Component, PropTypes } from 'react';
import TextTruncate from 'react-text-truncate';

class EllipsedTextBox extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      numLines: 2,
    };

    this.onReadClik = this.onReadClik.bind(this);
  }

  onReadClik() {
    const LINES_TO_SHOW_WHEN_TRUNCATE = 2;
    const MAX_LINES_TO_SHOW = 1000;

    this.setState({
      numLines: this.state.numLines !== MAX_LINES_TO_SHOW
        ? MAX_LINES_TO_SHOW
        : LINES_TO_SHOW_WHEN_TRUNCATE,
    });
  }

  render(){
    return (
      <div onClick={this.onReadClik} style={{cursor:'pointer'}}>
        <TextTruncate
          line={this.state.numLines}
          truncateText="…"
          text={this.props.text}
        />
      </div>
    );
  }
}

EllipsedTextBox.propTypes = {
  text: PropTypes.string.isRequired,
};

export default EllipsedTextBox;
