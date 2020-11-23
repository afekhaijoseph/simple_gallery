import React, { Component } from 'react';
import Image from './Image';
import {Consumer} from './Context';

class Images extends Component {
    render() {
        return(
            <Consumer>
                    {value =>{
                        const {images} = value;
                        return (
                                images.map(image =>{
                                    return <Image key={image.id} image={image.pic} alt={image.alternative} name="joe"/>  
                                })
                        )
                    }
                    }
            </Consumer>
        )
    }  
}

export default Images
