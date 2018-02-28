import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class RestaurantShow extends Component {
    state = {
        restaurant: {},
        posts: [],
        users: {},
        newPost: {
            title: "",
            content: "",
            user_id: 15,
            restaurant_id: `${parseInt(this.props.match.params.id)}`
        }
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

    addNewPost = (newPost) => {
        const posts = [...this.state.posts]
        posts.push(newPost)
        this.componentWillMount()
        this.setState({posts: posts})
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const val = event.target.value
        const newPost = {...this.state.newPost}
        newPost[attribute] = val
        this.setState({newPost})
    }

    newPostPost = () => {
        axios.post(`/posts`, this.state.newPost)
        .then((response) => {
            const updateNewPost = this.state.newPost
            updateNewPost._id = response.data._id
            this.addNewPost(updateNewPost)
        }).catch((error) => {
            console.log(error)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.newPostPost()
    }

    render() {
        return (
            <div>
                <h1>{this.state.restaurant.name}</h1>
                <img src={this.state.restaurant.image} />
                <div><Link to={`/restaurants/${this.state.restaurant.id}/foods`}>View Menu</Link></div>
                <Link to="/posts/new">Add a Post</Link>
                <form onSubmit={this.handleSubmit}>
                <input name="title" placeholder="Title" type="text" onChange={this.handleChange}/>
                <input name="content" placeholder="Content" type="text" onChange={this.handleChange}/>
                <button type="submit" value="submit">Submit</button>
                </form>
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