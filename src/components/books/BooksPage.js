import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as bookActions from '../../actions/bookActions';

class BooksPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  bookRow(book, index) {
    return <div key={index}>{book.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Books</h1>
        {this.props.books.map(this.bookRow)}
      </div>
    );
  }
}

BooksPage.propTypes = {
  actions: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
