import './Card.css';

const Card = (props) => 
{
    return(
        <div className="Card">
            {props.cardName}
            {props.imageLink}
        </div>
    );
}

export default Card;