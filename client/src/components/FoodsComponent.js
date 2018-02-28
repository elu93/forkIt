import React, { Component } from 'react';
import axios from 'axios'

class FoodsComponent extends Component {
    state = {
        menu: []
    }
    async componentWillMount() {
        const response = await axios.get(`/restaurants/${this.props.match.params.id}/foods`)
        const menuArray = []
        const id = parseInt(this.props.match.params.id)
        response.data.map((food) => {
            if(food.restaurant_id === id) {
                menuArray.push(food)
            }
        })
        this.setState({menu: menuArray})
        console.log(this.state.menu)
    }
    render() {
        
        return (
            <div>
                { 
                    this.state.menu.map((food) => {
                        return (
                            <div>
                                <h3>{food.name}</h3>
                                <p>${food.price}</p>
                                <p>{food.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default FoodsComponent;