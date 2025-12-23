import heroImg from "../../assets/hero-img.jpg";
import "./HotelCards.css";
export default function HotelCards(props) {
  return (
    <>
      
        <div className="card">
          <div className="card-top">
            <img src={props.img} alt={props.alt} className="card-img" />
            <h2 className="card-name">{props.name}</h2>
          </div>
          <div className="card-bottom">
            <p className="card-desc">{props.description}</p>
            <button className="check-btn">Check Out</button>
          </div>
        </div>
    </>
  );
}
