import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as bookActions from '../../actions/bookActions';

class BooksPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      book: {title: ''}
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  bookRow(book, index) {
    return <div key={index}>{book.title}</div>;
  }

  onClickSave() {
    this.props.dispatch(bookActions.createBook(this.state.book));
  }

  onTitleChange(event) {
    const book = this.state.book;
    book.title = event.target.value;
    this.setState({book: book});
  }

  render() {
    return (
      <div>
        <h1>Books</h1>
        {this.props.books.map(this.bookRow)}
        <input type="text"
               onChange={this.onTitleChange}
               value={this.state.book.title}/>
        <input type="submit"
               value="Save"
               className="btn btn-primary"
               onClick={this.onClickSave}/>
      </div>
    );
  }
}

BooksPage.propTypes = {
  // actions: PropTypes.object.isRequired,
  dispatch: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BooksPage);
