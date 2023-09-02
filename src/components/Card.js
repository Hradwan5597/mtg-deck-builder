import './Card.css';

const Card = (props) => 
{
    return(
        <div className="Card">
            <h4>{props.cardName}</h4>
            <img src={props.imageLink} alt="card-image"/>
            
        </div>
    );
}

export default Card;