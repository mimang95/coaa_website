import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class ImageCarousel extends Component<any, any> {
    render() {
        return (
            <Carousel>
                <div>
                    <img src= {this.props.image1} />
                    <p className="legend">Shirt Logo</p>
                </div>
                <div>
                    <img src={this.props.image2} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={this.props.image3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default ImageCarousel;
//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>