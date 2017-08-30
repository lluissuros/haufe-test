import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bookActions from '../../actions/bookActions';
import BookForm from './BookForm';
import toastr from 'toastr';

class ManageBookPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      book: Object.assign({}, this.props.books),
      errors: {}
    };

    this.updateBookState = this.updateBookState.bind(this);
    this.saveBook = this.saveBook.bind(this);
  }

  updateBookState(event) {
    const field = event.target.name;
    let book = Object.assign({}, this.state.book);
    book[field] = event.target.value;
    return this.setState({book: book});
  }

  saveBook(event) {
    event.preventDefault();
    this.props.actions.saveBook(this.state.book);
    this.context.router.push('/books');
  }

  render() {
    return (
      <BookForm
        allRatings={this.props.ratings}
        onChange={this.updateBookState}
        book={this.state.book}
        onSave={this.saveBook}
        errors={this.state.errors}/>
    );
  }
}

ManageBookPage.propTypes = {
  books: PropTypes.object.isRequired,
  ratings: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

//Pull in the React Router context so router is available on this.context.router.
ManageBookPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const books = {id:'', title:'', author:'', buyHref:'', description:''};
  const ratingsFormattedForDropdown = state.ratings.map((rating) => {
    return {
      value: rating.id,
      text: rating.text,
    };
  });
  return {
    books: books,
    ratings: ratingsFormattedForDropdown,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBookPage);
