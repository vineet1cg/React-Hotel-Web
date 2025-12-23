import "./Hotel.css";
import hotelData from "../../hotel";
import HotelCards from "../HotelCards/HotelCards";
const hotelDataJsx = hotelData.map((e) => (
  <HotelCards
    img={e.image.src}
    name={e.name}
    alt={e.image.alt}
    description={e.description}
    key = {e.id}
  />
));
export default function Hotel() {
  return <div className="parent-card">
    {hotelDataJsx}
  </div>;
}
