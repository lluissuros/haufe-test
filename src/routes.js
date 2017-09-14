import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import BooksPage from './components/books/BooksPage';
import ManageBookPage from './components/books/ManageBookPage'; //eslint-disable-line import/no-named-as-default

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="about" component={AboutPage} />
    <Route path="books" component={BooksPage}/>
    <Route path="book" component={ManageBookPage}/>
    <Route path="book/:id" component={ManageBookPage}/>
	</Route>
);
