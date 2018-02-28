import React, { Component } from 'react';

class NewPost extends Component {
    state = {
        redirect: false
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.newPost()
        this.setState({redirect: true})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input name="title" placeholder="Title" type="text" onChange={this.props.handleChange}/>
                <input name="content" placeholder="Content" type="text" onChange={this.props.handleChange}/>
                <select name="retaurant">
                    <option value="JCT Kitchen" onChange={this.props.handleChange}>JCT Kitchen</option>
                    <option value="Royal China" onChange={this.props.handleChange}>Royal China</option>
                </select>
                <button type="submit" value="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default NewPost;