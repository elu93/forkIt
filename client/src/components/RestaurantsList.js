import React from 'react'
import Restaurant from "./Restaurant"
import styled from 'styled-components'
import {Link} from 'react-router-dom'
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

const RestaurantsList = (props) => {

    const restaurants = props.restaurants.map((restaurant) => {
        return (
            <Restaurant {...restaurant} key={restaurant.id}/>
        )
    })
    return (
        <CardDiv>
            <h1>Restaurants</h1>
            <Link to='/spotlight'>Spotlight Restaurant</Link>
            {restaurants}
        </CardDiv>
    )
}

export default RestaurantsList