import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as bookActions from '../../actions/bookActions';
import BookList from './BookList';
import isEmpty from 'lodash.isempty';

export class BooksPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddBookPage = this.redirectToAddBookPage.bind(this);
  }

  redirectToAddBookPage() {
    browserHistory.push('/book');
  }

  render() {
    const {books} = this.props;

    return (
      <div>
        <h1>Books that I'm reading</h1>
        <input type="submit"
               value="Add Book"
               className="btn btn-primary"
               onClick={this.redirectToAddBookPage}/>
        {isEmpty(books)
          ? null
          : <BookList books={books}/>}
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
