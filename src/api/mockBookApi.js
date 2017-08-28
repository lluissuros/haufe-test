import delay from './delay';
import shortid from 'shortid';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const books = [
  {
    id: "1",
    title: "the power of habits",
    author: "Charles Duhigg",
    buyHref: "https://www.amazon.com/Power-Habit-What-Life-Business-ebook/dp/B0055PGUYU",
    description: "In The Power of Habit, Pulitzer Prize–winning business reporter Charles Duhigg takes us to the thrilling edge of scientific discoveries that explain why habits exist and how they can be changed. Distilling vast amounts of information into engrossing narratives that take us from the boardrooms of Procter & Gamble to sidelines of the NFL to the front lines of the civil rights movement, Duhigg presents a whole new understanding of human nature and its potential. At its core, The Power of Habit contains an exhilarating argument: The key to exercising regularly, losing weight, being more productive, and achieving success is understanding how habits work. As Duhigg shows, by harnessing this new science, we can transform our businesses, our communities, and our lives."
  },
  {
    id: "2",
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    buyHref: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship-ebook/dp/B001GSTOAM/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1503958436&sr=1-1&keywords=clean+code",
    description: "Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way."
  },
  {
    id: "3",
    title: "Guide to the I Ching",
    buyHref: "https://www.amazon.com/Guide-Ching-Carol-K-Anthony-ebook/dp/B005HXM6SO/ref=sr_1_4?s=digital-text&ie=UTF8&qid=1503958498&sr=1-4&keywords=i+ching",
    description: "Used by its readers as an oracle, this book, based on the terminology used in the classic Wilhelm/Baynes translation, puts the I Ching into modern language. This allows its wisdom to be applied to the situations of everyday life. Decoded are words such as the superior and inferior man, and the inferiors, which refer respectively to the true self, the ego, and the bodily self. Expressions such as crossing the great water and seeing the great man are seen to mean getting past the danger of giving up on oneself, and remembering the potential for good in every person. "
  },
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () =>  shortid.generate();

class BookApi {
  static getAllBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], books));
      }, delay);
    });
  }

  static saveBook(book) {
    book = Object.assign({}, book); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minBookTitleLength = 1;
        if (book.title.length < minBookTitleLength) {
          reject(`Title must be at least ${minBookTitleLength} characters.`);
        }

        if (book.id) {
          const existingBookIndex = books.findIndex(a => a.id == book.id);
          books.splice(existingBookIndex, 1, book);
        } else {
          //Just simulating creation here.
          //The server would generate ids in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          book.id = generateId();
          books.push(book);
        }

        resolve(book);
      }, delay);
    });
  }

  static deleteBook(bookId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfBookToDelete = books.findIndex(book => {
          book.id == bookId;
        });
        books.splice(indexOfBookToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default BookApi;
