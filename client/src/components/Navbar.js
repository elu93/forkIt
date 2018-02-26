import React, {Component} from "react";
import {Navbar, NavItem, Icon} from "react-materialize";
// import styled from "styled-components"; import { Link } from
// "react-router-dom";

class StickyNav extends Component {
    render() {
        
        return (
            <Navbar brand='logo' right>
                <NavItem href='get-started.html'>
                    <Icon>search</Icon>
                </NavItem>
                <NavItem href='get-started.html'>
                    <Icon>view_module</Icon>
                </NavItem>
                <NavItem href='get-started.html'>
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