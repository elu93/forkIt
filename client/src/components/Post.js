import React from 'react'
import {CardPanel} from "react-materialize";
import styled from 'styled-components'

const CardDiv = styled.div`     
    margin: 0 auto;     
    width: 50vw;    
    display: flex;     
    justify-content: center;
    flex-direction: column; 
`

const Post = (props) => {
    const deletePost = () => {
        props.deletePost(props.id)
    }
    return (
        <CardDiv>
            <CardPanel className="black-text">
                <h3>{props.title}</h3>
                <span>{props.content}</span>
                <button onClick={deletePost}>Delete</button>
            </CardPanel>
        </CardDiv>
    )
}

export default Post