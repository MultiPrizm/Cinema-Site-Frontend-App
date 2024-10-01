import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/FilmCard.css';

interface FilmCardInput{
  imageSrc: string;
  title: string;
  time: string;
  schedule: string;
}

function FilmCard({ imageSrc, title, time, schedule }: FilmCardInput) {
  return (
    <div className="film-card">
      <img className="film-image" src={imageSrc} alt={title} />
      <div className="film-info">
        <h5>{title}</h5>
        <div className="film-time">
          <span className="nearest-showing">Найближчий сеанс</span>
          <div className="time-box">{time}</div>
        </div>
        <div className="schedule-link">
          <Button variant="secondary" href={schedule}>Розклад на тиждень</Button>
        </div>
      </div>
    </div>
  );
}

export default FilmCard;