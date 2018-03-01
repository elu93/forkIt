import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import {CardPanel} from "react-materialize";

const CardDiv = styled.div`     
    margin: 0 auto;     
    width: 50vw;    
    display: flex;     
    justify-content: center;
    flex-direction: column; 
    text-align: center;
`

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
            <CardDiv>
                <h1>Menu</h1>
                { 
                    this.state.menu.map((food) => {
                        return (
                            <CardPanel className="left-align">
                                <h3>{food.name}</h3>
                                <p>Price: ${food.price}</p>
                                <p>{food.description}</p>
                            </CardPanel>
                        )
                    })
                }
            </CardDiv>
        );
    }
}

export default FoodsComponent;