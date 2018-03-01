import React, {Component} from 'react';
import axios from 'axios';
import {setZomatoDefaults, setAxiosDefaults} from '../util/SessionHeaderUtil';

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
                                <p>{restaurant.restaurant.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Spotlight;