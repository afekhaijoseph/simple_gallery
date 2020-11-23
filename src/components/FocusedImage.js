import React, { Component } from 'react'

class FocusedImage extends Component {
    render() {
        const {image, alt} = this.props
        return (
            <div className="modal">
                <img src={image} alt={alt}/>
            </div>
        )
    }
}

export default FocusedImage
