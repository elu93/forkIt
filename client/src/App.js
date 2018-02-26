import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom'
import SignUpLogIn from './components/SignUpLogIn'
import axios from 'axios'
import PostsList from './components/PostsList'
// import RestaurantsList from './components/RestaurantsList'
import { saveAuthTokens, setAxiosDefaults, userIsLoggedIn, clearAuthTokens } from './util/SessionHeaderUtil';
// import Placeholder from './components/Placeholder'

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

  // getRestaurants = async () => {
  //   try {
  //     const response = await axios.get('/restaurants')
  //     return response.data

  //   } catch (error) {
  //     console.log(error)
  //     return []
  //   }
  // }

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

    // const PlaceholderComponent = () => (
    //   <Placeholder/>
    // )

    // const RestaurantComponent = () => (
    //   <RestaurantsList 
    //   restaurants={this.state.restaurants}
    //   />
    // )

    return (
      <Router>
        <div>
        <button onClick={this.signOut}>Sign Out</button>
        {/* <Link to="/blogs">Go to Blogs</Link> */}
        {/* <Link to="/restaurants">Go to Restaurants</Link> */}
          <Switch>
            <Route exact path="/signUp" render={SignUpLogInComponent} />
            <Route exact path="/posts" render={PostsComponent} />
            <Route exact path="/blogs" render={PlaceholderComponent} />
            <Route exact path="/restaurants" render={RestaurantComponent} />
          </Switch>

          {this.state.signedIn ? <Redirect to="/posts" /> : <Redirect to="/signUp" />}
        </div>
      </Router>
    )
  }
}

export default App