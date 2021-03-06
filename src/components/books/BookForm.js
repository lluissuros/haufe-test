import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const BookForm = ({book, allRatings, onSave, onDelete, onChange, saving, errors}) => {
  const showDeleteButton = (book) => {

    const deleteButton = {
      marginRight: 10,
    };

    return book.id
      ? <div
        className="btn btn-danger"
        style={deleteButton}
        onClick={onDelete}>Delete</div>
      : null;
  };

  return (
    <form>
      <h1>Manage Book</h1>
      <TextInput
        name="title"
        label="Title"
        value={book.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="ratingId"
        label="Rating"
        value={book.ratingId}
        defaultOption="Select Rating"
        options={allRatings}
        onChange={onChange} error={errors.ratingId}/>

      <TextInput
        name="buyHref"
        label="buyHref"
        value={book.buyHref}
        onChange={onChange}
        error={errors.buyHref}/>

      <TextInput
        name="author"
        label="author"
        value={book.author}
        onChange={onChange}
        error={errors.author}/>

      <TextInput
        name="description"
        label="description"
        value={book.description}
        onChange={onChange}
        error={errors.description}/>

      {showDeleteButton(book)}

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

BookForm.propTypes = {
  book: PropTypes.object.isRequired,
  allRatings: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default BookForm;
