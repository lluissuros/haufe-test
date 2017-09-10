import React, { Component, PropTypes } from 'react';
import TextTruncate from 'react-text-truncate';

class EllipsedTextBox extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      numLines: 2,
      readMore: true,
    };

    this.onReadClik = this.onReadClik.bind(this);
  }

  onReadClik() {
    const LINES_TO_SHOW_WHEN_TRUNCATE = 2;
    const MAX_LINES_TO_SHOW = 1000;

    this.setState({
      numLines: this.state.readMore
        ? MAX_LINES_TO_SHOW
        : LINES_TO_SHOW_WHEN_TRUNCATE,
      readMore: !this.state.readMore,
    });
  }

  render(){
    return (
      <div>
        <TextTruncate
          line={this.state.numLines}
          truncateText="…"
          text={this.props.text}
        />
        <div
          onClick={this.onReadClik}>
            { this.state.readMore ? 'more' : 'less' }
        </div>
      </div>
    );
  }
}


EllipsedTextBox.propTypes = {
  text: PropTypes.string.isRequired,
};

export default EllipsedTextBox;
