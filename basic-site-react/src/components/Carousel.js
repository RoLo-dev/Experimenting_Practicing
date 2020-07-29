import React from 'react'

import Img1 from '../assets/img/img1.jpg';
import Img2 from '../assets/img/img2.jpg';
import Img3 from '../assets/img/img3.jpg';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Project 1',
                    subTitle: 'The first card',
                    imgSrc: Img1,
                    link: 'https://unsplash.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Project 2',
                    subTitle: 'The second card',
                    imgSrc: Img2,
                    link: 'https://unsplash.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Project 3',
                    subTitle: 'The third card',
                    imgSrc: Img3,
                    link: 'https://unsplash.com/',
                    selected: false
                }
            ]
        }
    }

    render() {
        return(
            <p>Carousel works</p>
        )
    }
}

export default Carousel;