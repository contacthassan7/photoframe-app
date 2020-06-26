import React, { Component } from 'react'


class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const photo = {
            id : Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if(description && imageLink) {
            this.props.startAddingPhoto(photo)
            this.props.onHistory.push('/')
        }
    }

    render() {
        return (
            <div>
                
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link" />
                        <input type="text" placeholder="Description" name="description" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddPhoto