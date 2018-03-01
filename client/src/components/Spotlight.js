import React, {Component} from 'react';
import axios from 'axios';
import {setZomatoDefaults, setAxiosDefaults} from '../util/SessionHeaderUtil';
import {Card, CardTitle, CardPanel, Row, Col} from 'react-materialize'
import styled from 'styled-components'


const CardDiv = styled.div`     
    margin: 0 auto;     
    width: 60vw;    
    display: flex;     
    justify-content: center;
    flex-direction: column; 
    text-align: center;
`

const CardWrapper = styled.div`
    display: flex;
    width: 50%;
    flex-wrap: wrap;
    flex-direction: row;
`

class Spotlight extends Component {
    state = {
        spotlight: []
    }

    async componentWillMount() {
        const spotlightArray = []
        try {
            setZomatoDefaults()
            const zomato = await axios.get("https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&collection_id=1")
            setAxiosDefaults()
            console.log("Zomato with API call", zomato)
            spotlightArray.push(...zomato.data.restaurants)
        } catch (err) {
            console.log(err)
        }
        this.setState({spotlight: spotlightArray})
        console.log(this.state.spotlight)
    }

    render() {
        return (
            <CardDiv>
                {
                    this.state.spotlight.map((restaurant) => {
                        return (
                            <Card className='medium left-align' header={<CardTitle image={restaurant.restaurant.featured_image}>{restaurant.restaurant.name}</CardTitle>} actions={[<a href={restaurant.restaurant.url}>Find out more...</a>]}>
                                <p>Address: {restaurant.restaurant.location.address}, {restaurant.restaurant.location.city}</p>
                                <p>Cuisine: {restaurant.restaurant.cuisines}</p>
                                <p>Ratings: {restaurant.restaurant.user_rating.aggregate_rating} {restaurant.restaurant.user_rating.rating_text}</p>
                            </Card>
                        )
                    })
                }
            </CardDiv>
        );
    }
}

export default Spotlight;