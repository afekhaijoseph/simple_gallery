import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FocusedImage from './FocusedImage'
import './styles.css';

export class Image extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isSelected : false
        }
    }
    
    clickHandler = ()=>{
        this.setState({
            isSelected : true
        })  
    }

    render() {
        const{image, alt} = this.props;
        const {isSelected} = this.state;
        return (
            <React.Fragment>
                <div className="image" onClick={this.clickHandler}><img src={image} alt={alt}/></div>
                {isSelected ?  <FocusedImage image={image} alt={alt}/> : null}
            </React.Fragment>
    

        )

        }
    }


export default Image

Image.propTypes = {
    image : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired

}

