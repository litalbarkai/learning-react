import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
    
    render() {
        const { elements } = this.props;

        return (
            <div className='card-list'>
                {elements.map(element => (
                    <Card elementData={element} />
                ))}
            </div>
        );
    }
}

export default CardList;