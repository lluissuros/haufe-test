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
  }

  updateBookState(event) {
    const field = event.target.name;
    let book = Object.assign({}, this.state.book);
    book[field] = event.target.value;
    return this.setState({book: book});
  }

  render() {
    return (
      <BookForm
        allRatings={this.props.ratings}
        onChange={this.updateBookState}
        book={this.state.book}
        errors={this.state.errors}/>
    );
  }
}

ManageBookPage.propTypes = {
  books: PropTypes.object.isRequired,
  ratings: PropTypes.array.isRequired,
};


function mapStateToProps(state, ownProps) {
  const books = {id:'', title:'test', author:'', buyHref:'', description:''};
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
