import React from 'react'
import Post from "./Post"
import styled from 'styled-components'

const CardDiv = styled.div`     
    margin: 0 auto;     
    width: 50vw;    
    display: flex;    
    justify-content: center;
    flex-direction: column; 

    h2, h3{
        text-align: center; 
    }
`

const PostsList = (props) => {
    const posts = props.posts.map((post) => {
        return (
            <Post {...post} deletePost={props.deletePost} key={post.id}/>
        )
    })
    return (
        <CardDiv>
            <h2>Welcome, {props.currentUser.email}</h2>
            <h3>Posts</h3>
            {props.posts.length > 0 ? posts : null}
        </CardDiv>
    )
}

export default PostsList