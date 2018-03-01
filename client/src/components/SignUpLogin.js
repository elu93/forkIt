import React, {Component} from 'react'
import styled from 'styled-components'
import OnFire from '../Onfire/MP4/Onfire.mp4'
import OnFireWebM from '../Onfire/Webm/Onfire.webm'
import OnfireJpeg from '../Onfire/Snapshot/Onfire.jpg'

const FormDiv = styled.div`
    margin: 0 auto;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1 0 auto;
    background: linear-gradient(0deg, rgba(36,35,37,0.6), rgba(36,35,37,0.6)), url("https://source.unsplash.com/L1ZhjK-R6uc") center no-repeat;
    background-size: cover;
`

const Labels = styled.label`
    color: white;
`

class SignUpLogIn extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: ''
    }

    signUp = (event) => {
        event.preventDefault()
        this.props.signUp(
            this.state.email,
            this.state.password,
            this.state.password_confirmation
        )
    }

    signIn = (event) => {
        event.preventDefault()
        this.props.signIn(
            this.state.email,
            this.state.password
        )
    }

    signOut = (event) => {
        event.preventDefault()
        this.props.signOut(
            this.state.email,
            this.state.password
        )
    }

    handleChange = (event) => {
        const newState = {...this.state}
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    render() {
        return (
            <FormDiv>
                <form>
                    <div>
                        <Labels htmlFor="email">E-mail: </Labels>
                        <input onChange={this.handleChange} type="text" name="email" value={this.state.email}/>
                    </div>
                    <div>
                        <Labels htmlFor="password">Password: </Labels>
                        <input onChange={this.handleChange} type="password" name="password" value={this.state.password}/>
                    </div>
                    <div>
                        <Labels htmlFor="password_confirmation">Confirm Password: </Labels>
                        <input onChange={this.handleChange} type="password" name="password_confirmation"
                                value={this.state.password_confirmation}/>
                    </div>

                    <button onClick={this.signUp}>Sign Up</button>
                    <button onClick={this.signIn}>Log In</button>
                </form>
            </FormDiv>
        )
    }
}

export default SignUpLogIn