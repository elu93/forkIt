import React, {Component} from 'react';
import axios from 'axios';
import {setZomatoDefaults, setAxiosDefaults} from '../util/SessionHeaderUtil';
import {Card, CardTitle, CardPanel} from 'react-materialize'
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
            <div>
                {
                    this.state.spotlight.map((restaurant) => {
                        return (
                            <div>
                                <Card className='small' header={<CardTitle image={restaurant.restaurant.featured_image}>{restaurant.restaurant.name}</CardTitle>} actions={[<a href={restaurant.restaurant.url}>Find out more...</a>]}>
                                    <p>Address: {restaurant.restaurant.location.address}, {restaurant.restaurant.location.city}<span> Cuisine: {restaurant.restaurant.cuisines}</span></p>
                                    <p>Ratings: {restaurant.restaurant.user_rating.aggregate_rating} {restaurant.restaurant.user_rating.rating_text}</p>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Spotlight;