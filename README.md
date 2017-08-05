# murmurAlley

The Application is deployed here: [murmurAlley](https://murmuralley.herokuapp.com/)

The tikLdmonkey is a single page Content Management System web application designed to manage my personal portfolio and interests, with the hope of extending the features to allow multiple users to manage and track their own individual tasks or interests. It is built on a Rails backend with PostgreSQL database and React/Redux frontend. It is made up of two main layers; an inner area requirng authentication / sign up and/or sign, and an outer area that is publicly available to all visitors of the site. Currently any logged in user can access any content within the allowed routes to the database except desctructive actions. Users not signed in can only access limited content accessible through the homepage navigation.


## Features

### User Authentication
  Sample information from the database is made publicly available to any visitor to read or watch, with more exclusive access reserved for users who sign in to the excluisve zone. 
  Detailed information from the database on my Projects, Trivia, Games (not made by me but in the future I plan to include those that I perosnally build to the database), trending Tech News, and my imaginary Monkeys are available to a user after authentication. The user has access to their individualized page where they can customize the page with profile images, perosnal info, etc. However, a user will not be able to access other users' pages or information. A user has not editing privileges of the content of the database (via the disabled CRUD functionality buttons available on their pages).


### Content Management
  As the sole administrator, I am able to activate the editing privileges for my page via the backend to mutate the database from the frontend. In addition to the publicly available content of the site, I am able to add, edit, and delete users and content of my job applications which I am managing with the application.
  There are six models altogther; User, Trivia, Game, Project, JobApplication, and Category (with a has_many relationship with the Trivia model). Sample code is shown below.


### 

```
import React from 'react';

class TriviaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      excerpt: '',
      body: '',
      image_url: '',
      video_url: '',
      category_id: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const trivium = Object.assign({}, this.state);
    this.props.createTrivium({ trivium }).then(
      () => this.setState({ 
        title: '',
        excerpt: '',
        body: '',
        image_url: '',
        video_url: '',
        category_id: ''
      })
    );
  }

  render() {

    return (
      <form className="add-form" onSubmit={ this.handleSubmit }>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={ this.state.title }
            placeholder="Add Title"
            onChange={ this.update('title') }
            />
        </label>
        <label>Excerpt:
          <input
            className="input"
            ref="excerpt"
            value={ this.state.excerpt }
            placeholder="Add Excerpt"
            onChange={ this.update('excerpt') }
            />
        </label>
        <label>Body:
          <input
            className="input"
            ref="body"
            value={ this.state.body }
            placeholder="Add Body"
            onChange={ this.update('body') }
            />
        </label>
        <label>Image Url:
          <input
            className="input"
            ref="image_url"
            value={ this.state.image_url }
            placeholder="Add Image Url"
            onChange={ this.update('image_url') }
            />
        </label>
        <label>Video:
          <input
            className="input"
            ref="video"
            value={ this.state.video }
            placeholder="Add Video Url"
            onChange={ this.update('video_url') }
            />
        </label>
        <label>Category:
          <input
            className="input"
            ref="category_id"
            value={ this.state.category_id }
            placeholder="Add Category"
            onChange={ this.update('category_id') }
            />
        </label>
        <div className='upload-buttons'>
          <button  className='signup'>Cancel</button>
          <button  className='signup'>Save</button>
        </div>
      </form>
    );
  }
};

export default TriviaForm;
```


```js
import React from 'react';

const Trivium = (props) => (
  <li className="trivium media group">
    <img className="trivium-img" src={props.img} alt="trivium" />
    <div>
      <h3>{props.title}</h3>
      <p className="triv-p">{props.excerpt}</p>
    </div>
  </li>
);

export default Trivium;
```


## Homepage

![Alt text](https://res.cloudinary.com/swy/image/upload/v1501895992/murmur1_i6zdm2.png "homepage")


## Homepage Signup
![Alt text](https://res.cloudinary.com/swy/image/upload/v1501895991/murmur2_kwvrrt.png "homepage signup")



### Plans For The Future

* I pan to make the user page more fluid to individual user preferences with a user being offered multiple options in choosing the theme of their page, and the ability to enable or disable optional features (yet to be decided on).

* I plan to add a chat service to the homepage where a visitor can see if I am currently available online to chat or answer questions they may have regarding the website or any genral topic of mutual interest. And possibly extend this feature to all users to chat with each other.

* I also plan to include more appealing content on trivia to generate more visitors to test the basic traffic handling of the site.


