import './Card.css';

const Card = (props) => 
{
    return(
        <div className="Card" onClick={props.onCardClick}>
            
            <h4>{props.cardName}</h4>

            <img src={props.imageLink}
            alt="card"/>

        </div>
    );
}

export default Card;