import React from 'react';

class AboutPage extends React.Component {
	render() {
		return (
			<div>
        <div>
          <h2>About this test</h2>
          <a href="https://github.com/lluissuros" className="btn btn-primary">my Github</a>
          <br/>
          <br/>
          <p>This is a Front End for a basic book app that uses React, Redux, Redux-Thunk middleware for dealing with server requests, nd a variety of other helpful libraries.</p>
          <p>I will be happy to discuss it with you if you want to, and in any case, if you want any further improvements just let me know and I will do my best!</p>

        <br/>
          <h5>Below there are some thoughts in question-answer fashion.</h5>
        </div>

        <br/>
        <br/>

        <ul>
            <li><h4>Isn't the example overengineered?</h4></li>
            <p>Yes, absolutely!</p>
            <p>
              I've used this test as an opportunity to get to know better React + Redux ecosystem.
              If I'm not selected for the job, It will have paid off anyway because I get knowledge
              and a nice starting point for future projects.
            </p>
            <p>
              On a trivial app like this it might feel like a lot of boilerplate,
              but I wanted to explore how an scalable and more maintainable arquitecture
              for larger and more complex apps is made.
            </p>
        </ul>

        <br/>
        <br/>

        <ul>
            <li><h4>Did you develop ALL this code all by yourself?</h4></li>
            <p>Absolutely not! I'm standing on the shoulders of giants.</p>
            <p>
              What I did was to ask the React tech lead in my company about a nice course to
              get to know React + Redux, and he said came back recommending
              <a href="https://app.pluralsight.com/library/courses/react-redux-react-router-es6"> this course </a>
               in Pluralsight by Cory House: <strong> Building Applications with React and Redux in ES6</strong>.
            </p>
            <p>
              So I followed the course, changing the type of objects from courses to books (very creative...),
               forcing myself to understand all steps along the way. I still need further practice to integrate all the information,
               but I think my understanding has improved quite a lot.
            </p>
            <p>
              From there I started to play around, specially when I started connecting the client to my real back end instead of
              the original mock.
            </p>
        </ul>

        <br/>
        <br/>

        <ul>
            <li><h4>What about the express server side part?</h4></li>
            <p>I started following the course, which is using a mock Api. From there I created a back end with server, using some ideas
            from other courses and articles, and adapting it to my needs.</p>
        </ul>

        <br/>
        <br/>

        <ul>
            <li><h4>What areas about the exercise you feel more uncomfortable with?</h4></li>
            <p>Pretty much everything at the moment :p but I would specially point out the following:</p>
            <ul>
              <li>
                I don't know bootstrap and the styling is in bootstrap. I just went along with the example,
                because I wanted to focus in React + Redux arquitecture. I couldn't show my not-so-awesome-anyway CSS skills in
                this test so far.
              </li>
              <li>
                Webpack: I understand what it does high-level wise, but it's pretty magical to me at the moment.
              </li>
              <li>
                Could be more responsive, more progressive.
              </li>
              <li>
                NO TESTS YET: To come in the future, hopefully.
              </li>
            </ul>
        </ul>


			</div>
		);
	}
}

export default AboutPage;
