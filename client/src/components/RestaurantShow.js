import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {CardPanel} from "react-materialize";
import NewPost from './NewPost';

const CardDiv = styled.div `     
    margin: 0 auto;     
    width: 60vw;    
    display: flex;     
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    text-align: center;
`

const CardWrapper = styled.div`
    width: 100%;
`

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
        },
        isNewPost: false
    }
    async componentWillMount() {
        const response = await axios.get(`/restaurants/${this.props.match.params.id}`)
        const resPost = await axios.get(`/posts`)
        const resUsers = await axios.get('/users')
        const postArray = []
        const id = parseInt(this.props.match.params.id)

        resPost
            .data
            .map((post) => {
                if (post.restaurant_id === id) {
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
        this.setState({posts: posts, isNewPost: false})
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const val = event.target.value
        const newPost = {
            ...this.state.newPost
        }
        newPost[attribute] = val
        this.setState({newPost})
    }

    newPostPost = () => {
        axios
            .post(`/posts`, this.state.newPost)
            .then((response) => {
                const updateNewPost = this.state.newPost
                updateNewPost._id = response.data._id
                this.addNewPost(updateNewPost)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.newPostPost()
    }

    render() {
        return (
            this.state.isNewPost ? <NewPost handleChange={this.handleChange} posts={this.state.posts} handleSubmit={this.handleSubmit} newPostPost={this.state.newPostPost} /> :
            <CardDiv>
                <h1>{this.state.restaurant.name}</h1>
                <img width="400" src={this.state.restaurant.image}/>
                <div>
                    <Link to={`/restaurants/${this.state.restaurant.id}/foods`}>View Menu</Link>
                </div>
                <button onClick={() => { {this.setState({isNewPost: true})}}}>Add Review</button>
                {this
                    .state
                    .posts
                    .map((post) => {
                        return (
                            <CardWrapper>
                                <CardPanel className="left-align">
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                            </CardPanel>
                            </CardWrapper>
                        )
                    })
}
            </CardDiv>
        );
    }
}

export default RestaurantShow;