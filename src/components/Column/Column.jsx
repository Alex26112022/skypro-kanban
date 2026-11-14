import { cardList } from '../../data';
import Card from '../Card/Card';

function Column(props) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{props.status}</p>
      </div>
      <div className="cards">
        {cardList
          .filter((card) => card.status === props.status)
          .map((card) => (
            <Card key={card.id} card={card} />
          ))}
      </div>
    </div>
  );
}

export default Column;
