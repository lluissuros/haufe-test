import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bookActions from '../../actions/bookActions';
import BookForm from './BookForm';
import toastr from 'toastr';

export class ManageBookPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      book: Object.assign({}, this.props.book),
      errors: {},
      saving: false,
      succesMessage: 'Book Saved',
    };

    this.updateBookState = this.updateBookState.bind(this);
    this.saveBook = this.saveBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.book.id != nextProps.book.id) {
      // Necessary to populate form when existing book is loaded directly.
      this.setState({book: Object.assign({}, nextProps.book)});
    }
  }

  updateBookState(event) {
    const field = event.target.name;
    let book = Object.assign({}, this.state.book);
    book[field] = event.target.value;
    return this.setState({book: book});
  }

  isBookFormValid() {
    let formIsValid = true;
    let errors = {};
    if (this.state.book.title.length < 5){
      errors.title = 'Title must be at least 5 characters';
      formIsValid = false;
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  saveBook(event) {
    event.preventDefault();
    if(!this.isBookFormValid()){
      return;
    }
    this.setState({ saving: true, succesMessage: 'Book Saved' });
    this.props.actions.saveBook(this.state.book)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  deleteBook(event) {
    event.preventDefault();
    this.setState({ saving: true, succesMessage: 'Book Removed' });
    this.props.actions.deleteBook(this.state.book)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success(this.state.succesMessage);
    this.context.router.push('/books');
    this.props.actions.loadBooks();
  }

  render() {
    return (
      <BookForm
        allRatings={this.props.ratings}
        onChange={this.updateBookState}
        onDelete={this.deleteBook}
        book={this.state.book}
        onSave={this.saveBook}
        errors={this.state.errors}
        saving={this.state.saving}/>
    );
  }
}

ManageBookPage.propTypes = {
  book: PropTypes.object.isRequired,
  ratings: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

//Pull in the React Router context so router is available on this.context.router.
ManageBookPage.contextTypes = {
  router: PropTypes.object
};

function getBookById(books, bookId) {
  const book = books.filter(book => book.id === bookId);
  return book.length ? book[0] : null;
}

function mapStateToProps(state, ownProps) {
  const bookId = ownProps.params.id; //from the path book/:id
  const emptyBook = {id:'', title:'', author:'', buyHref:'', description:''};

  const book = bookId && state.books.length > 0
    ? getBookById(state.books, bookId)
    : emptyBook;

  const ratingsFormattedForDropdown = state.ratings.map((rating) => {
    return {
      value: rating.id,
      text: rating.text,
    };
  });

  return {
    book: book,
    ratings: ratingsFormattedForDropdown,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBookPage);
