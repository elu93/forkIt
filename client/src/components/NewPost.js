import React from 'react';

const NewPost = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                    <input
                        name="title"
                        placeholder="Title"
                        type="text"
                        onChange={props.handleChange}/>
                    <input
                        name="content"
                        placeholder="Content"
                        type="text"
                        onChange={props.handleChange}/>
                    <button type="submit" value="submit">Submit</button>
                </form>
        </div>
    );
};

export default NewPost;