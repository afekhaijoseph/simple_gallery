import React, {Component} from 'react';

const GalleryContext = React.createContext();

export class Provider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             images : [
                 {
                    id: 1,
                    pic: '/images/cat-one.jpeg',
                    alternative : 'Image of a cat',
                },
                 {
                    id: 2,
                    pic: '/images/cat-two.jpg',
                    alternative : 'Image of a cat',
                 },
                 {
                    id: 3,
                    pic : '/images/cat-three.jpg',
                    alternative : 'Image of a cat',
                },
                 {
                    id: 4,
                     pic : '/images/cat-four.jpeg',
                     alternative : 'Image of a cat',

                },
                 {
                    id: 5,
                     pic : '/images/cat-five.jpg',
                     alternative : 'Image of a cat',

                },
                 {
                    id: 6,
                    pic: '/images/cat-six.jpg',
                    alternative : 'Image of a cat',
                },
                 {
                    id: 7,
                    pic : '/images/dog-one.jpg',
                    alternative : 'Image of a dog',
                },
                 {
                    id: 8,
                    pic : '/images/dog-two.jpeg',
                    alternative : 'Image of a dog',
                },
                 {
                    id: 9,
                    pic : '/images/wolf-one.jpg',
                    alternative : 'Image of a wolf',
                },
                 {
                    id: 10,
                    pic: '/images/wolf-two.jpeg',
                    alternative : 'Image of a wolf',
                 },
             ]
}
    }
    render(){
        return(
            <GalleryContext.Provider value={this.state}>
               {this.props.children}
            </GalleryContext.Provider>
        )
        
    }
}


export const Consumer = GalleryContext.Consumer;
