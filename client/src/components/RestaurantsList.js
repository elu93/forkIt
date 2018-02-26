import React from 'react'
import Restaurant from "./Restaurant"

const RestaurantsList = (props) => {

    const restaurants = props.restaurants.map((restaurant) => {
        return (
            <Restaurant {...restaurant} key={restaurant.id}/>
        )
    })
    return (
        <div>
            <h1>Posts</h1>
            {restaurants}
        </div>
    )
}

export default RestaurantsList