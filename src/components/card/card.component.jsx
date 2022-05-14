import { Component } from "react";
import './card.styles.css';

class Card extends Component {
  render(){
    const {monster: {id, name, email}} = this.props;
    return(
      <div className="card-container" key={id}>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
            <h1>{name}</h1>
            <p>{email}</p>
          </div>
    )
  }
}

export default Card;