import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import IMAGES from './Resources/images';


class Photos extends Component {

    render() {
        return (
            <div style={photosContainer}>
                <h2 style={titleStyle} >Some photos... </h2>
                <div style={galleryContainer}>
                    <Gallery images={IMAGES} />
                </div>
            </div>
        );
    }

}
export default Photos;

const photosContainer = {
    marginTop: '70px', // Header fixed
    marginBottom: '50px', // get some space
}

const titleStyle = {
    textAlign: 'center'
}

const galleryContainer = {
    width : '96%',
    height : '100%',
    marginLeft : '2%'
}