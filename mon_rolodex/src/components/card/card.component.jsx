import { Component } from "react";
import "./card.styles.css";

class Card extends Component {

    render() {
        const { elementData } = this.props;
        const { id, name, email } = elementData;

        return (
            <div className='card-container'>
                {/* <img className='card-container-image' */}
                <img
                    alt={name}
                    src={`https://robohash.org/${id}?set=set2&size=180x180`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
    }
}

export default Card;