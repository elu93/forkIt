import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {CardPanel} from "react-materialize";

const Restaurant = (props) => {

    return (
        <div>
            <CardPanel>
                <span><img
                    width="200"src={`https://maps.googleapis.com/maps/api/staticmap?center=${props.latitude},${props.longitude}&zoom=12&size=400x400&markers=color:red|${props.latitude},${props.longitude}&key=AIzaSyCRiXIAL7OPuPSVUB7O1q1SlZ_QFONdavo `}/>
                <h2>
                    <Link to={`/restaurants/${props.id}`}>{props.name}</Link>
                </h2></span>
            </CardPanel>
            <div></div>
            <div>{props.rating}</div>
        </div>
    )
}

export default Restaurant