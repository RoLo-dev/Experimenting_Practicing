import React from 'react'
import Card from '../components/Card'

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
    cardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        })
        this.setState({
            items
        })
    }
    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.cardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <div className="wrapper">
                {this.makeItems(this.state.items)}
                <Card />
            </div>
        )
    }
}

export default Carousel;