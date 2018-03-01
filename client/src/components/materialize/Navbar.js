import React, {Component} from "react";
import {Navbar, NavItem, Icon} from "react-materialize";
import styled from "styled-components"; 

class StickyNav extends Component {
    render() {
        
        return (
            <Navbar className="#ef5350 red lighten-1"brand='forkIt' right>
                <NavItem href='/restaurants'>
                    <Icon>search</Icon>
                </NavItem>
                <NavItem href='/posts'>
                    <Icon>view_module</Icon>
                </NavItem>
                <NavItem href='/'>
                    <Icon>refresh</Icon>
                </NavItem>
                <NavItem href='get-started.html'>
                    <Icon>more_vert</Icon>
                </NavItem>
            </Navbar>
        );
    }
}
export default StickyNav;