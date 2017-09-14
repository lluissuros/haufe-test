export function ratingsFormattedForDropdown(ratings) {
  return ratings.map((rating) => {
    return {
      value: rating.id,
      text: rating.text,
    };
  });
}
