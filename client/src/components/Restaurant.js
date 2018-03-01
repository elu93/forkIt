import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {CardPanel} from "react-materialize";

const InlineHeader = styled.h2`
    display: inline;
    padding: 5%;
`

const ParagraphSize = styled.p`
    font-size: .3em;
`

const Restaurant = (props) => {

    return (
        <div>
            <CardPanel className="valign-wrapper">
                <img
                    width="200"src={`https://maps.googleapis.com/maps/api/staticmap?center=${props.latitude},${props.longitude}&zoom=12&size=400x400&markers=color:red|${props.latitude},${props.longitude}&key=AIzaSyCRiXIAL7OPuPSVUB7O1q1SlZ_QFONdavo `}/>
                <InlineHeader>
                    <Link to={`/restaurants/${props.id}`}>{props.name}</Link>
                    <ParagraphSize>Rating: {props.rating}</ParagraphSize>
                </InlineHeader>
            </CardPanel>
        </div>
    )
}

export default Restaurant