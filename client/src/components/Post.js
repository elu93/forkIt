import React from 'react'
import {CardPanel, Icon} from "react-materialize";
import styled from 'styled-components'

const CardDiv = styled.div`     
    margin: 0 auto;     
    width: 50vw;    
    display: flex;     
    justify-content: center;
    flex-direction: column; 
`

const SpanDiv = styled.span`
    display:block;
    text-align: center;
`

const Post = (props) => {
    const deletePost = () => {
        props.deletePost(props.id)
    }
    return (
        <CardDiv>
            <CardPanel className="black-text">
                <h3>{props.title}</h3>
                <SpanDiv>{props.content}</SpanDiv>
                <SpanDiv onClick={deletePost}><Icon >delete_forever</Icon></SpanDiv>
                
            </CardPanel>
        </CardDiv>
    )
}

export default Post