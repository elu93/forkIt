import React from 'react'
import Post from "./Post"
import styled from 'styled-components'

const CardDiv = styled.div`     
    margin: 0 auto;     
    width: 50vw;    
    display: flex;    
    justify-content: center;
    flex-direction: column; 

    h1{
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
            <h1>Posts</h1>
            {props.posts.length > 0 ? posts : null}
        </CardDiv>
    )
}

export default PostsList