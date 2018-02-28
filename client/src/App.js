import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom'
import SignUpLogIn from './components/SignUpLogin'
import axios from 'axios'
import PostsList from './components/PostsList'
import RestaurantsList from './components/RestaurantsList'
import { saveAuthTokens, setAxiosDefaults, userIsLoggedIn, clearAuthTokens } from './util/SessionHeaderUtil';
import StickyNav from './components/materialize/Navbar.js'
import RestaurantShow from './components/RestaurantShow'
import FoodsComponent from './components/FoodsComponent'
import NewPost from './components/NewPost'

class App extends Component {

  state = {
    signedIn: false,
    posts: [],
    restaurants: []
  }

  async componentWillMount() {
    try {
      const signedIn = userIsLoggedIn()
      let posts = []
      let restaurants = await this.getRestaurants()
      if (signedIn) {
        setAxiosDefaults()
        posts = await this.getPosts()
      }

      this.setState({ posts, signedIn, restaurants })

    } catch (error) {
      console.log(error)
    }
  }

  getPosts = async () => {
    try {
      const response = await axios.get('/posts')
      return response.data

    } catch (error) {
      console.log(error)
      return []
    }
  }

  getRestaurants = async () => {
    try {
      const response = await axios.get('/restaurants')
      return response.data

    } catch (error) {
      console.log(error)
      return []
    }
  }

  signUp = async (email, password, password_confirmation) => {
    try {
      const payload = {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
      const response = await axios.post('/auth', payload)
      saveAuthTokens(response.headers)

      this.setState({ signedIn: true })

    } catch (error) {
      console.log(error)
    }
  }

  signIn = async (email, password) => {
    try {
      const payload = {
        email,
        password
      }
      const response = await axios.post('/auth/sign_in', payload)
      saveAuthTokens(response.headers)

      const posts = await this.getPosts()

      this.setState({ signedIn: true, posts })

    } catch (error) {
      console.log(error)
    }
  }

  signOut = async (event) => {
    try {
        event.preventDefault()
        
        await axios.delete('/auth/sign_out')

        clearAuthTokens();

        this.setState({signedIn: false})
    } catch(error) {
        console.log(error)
    }
}

deletePost = async (postId) => {
  try {
      await axios.delete(`/posts/${postId}`)

      const posts = await this.getPosts()
      this.setState({posts})
  } catch (error) {
      console.log(error)
  }
}

addNewPost = (newPost) => {
  const posts = [...this.state.posts]
  posts.push(newPost)
  this.setState({posts: posts})
}

addPost = () => {
    axios.post('/posts', this.state.newPost)
    .then((response) => {
      const newPost = this.state.newPost
      newPost._id = response.data._id
      this.addNewPost(newPost)
    }).catch((error) => {
      console.log(error)
    })
}

handleChange = (event) => {
  const attribute = event.target.name
  const val = event.target.value
  const newPost = { ...this.state.newPost }
  newPost[attribute] = val

  this.setState({ newPost })

}

  render() {

    const SignUpLogInComponent = () => (
      <SignUpLogIn
        signUp={this.signUp}
        signIn={this.signIn} />
    )

    const PostsComponent = () => (
      <PostsList 
      posts={this.state.posts}
      deletePost={this.deletePost} />
    )

    const RestaurantComponent = () => (
      <RestaurantsList 
      restaurants={this.state.restaurants}
      />
    )

    const newPostComponent = (props) => {
      return (
        <NewPost {...props} handleChange={this.handleChange} newPost={this.addPost} />
      )
    }

    return (
      <Router>
        <div>
        <StickyNav />
        <button onClick={this.signOut}>Sign Out</button>
        <Link to="/restaurants">Go to Restaurants</Link>
        <Link to="/signUp">Home</Link>
          <Switch>
            <Route exact path="/signUp" render={SignUpLogInComponent} />
            <Route exact path="/posts" render={PostsComponent} />
            <Route exact path="/posts/new" render={newPostComponent} />
            <Route exact path="/restaurants" render={RestaurantComponent} />
            <Route exact path="/restaurants/:id" component={RestaurantShow}/>
            <Route exact path="/restaurants/:id/foods" component={FoodsComponent} />
          </Switch>

          {this.state.signedIn ? <Redirect to="/posts" /> : <Redirect to="/signUp" />}
        </div>
      </Router>
    )
  }
}

export default App