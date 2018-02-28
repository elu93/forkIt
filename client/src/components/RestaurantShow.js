import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class RestaurantShow extends Component {
    state = {
        restaurant: {},
        posts: [],
        users: {}
    }
    async componentWillMount() {
        const response = await axios.get(`/restaurants/${this.props.match.params.id}`)
        const resPost = await axios.get(`/posts`)
        const resUsers = await axios.get('/users')
        const postArray = []
        const id = parseInt(this.props.match.params.id)

        resPost.data.map((post) => {
            if(post.restaurant_id === id) {
                postArray.push(post)
            }
        })
        postArray.reverse()
        this.setState({restaurant: response.data, posts: postArray, users: resUsers.data})
        console.log(this.state.users)
        
    }
    render() {
        return (
            <div>
                <h1>{this.state.restaurant.name}</h1>
                <img src={this.state.restaurant.image} />
                <div><Link to={`/restaurants/${this.state.restaurant.id}/foods`}>View Menu</Link></div>
                <Link to="/posts/new">Add a Post</Link>
                {
                    this.state.posts.map((post) => {
                        return (
                            <div>
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default RestaurantShow;