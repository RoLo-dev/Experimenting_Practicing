import React from 'react'

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Project 1',
                    subTitle: 'The first card',
                    imgSrc: '',
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