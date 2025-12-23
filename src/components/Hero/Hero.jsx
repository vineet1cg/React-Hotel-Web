import './Hero.css'
import Heroimg from '../../assets/hero-img.jpg'
export default function Hero(){
    return(
        <>
        <main className='hero-img'>
            <div className="hero1">
            <h2 className='hero-header'>HOTEL LOGO</h2>
            <p>Your Unforgettable Getway</p>
            </div>
            <div className="hero2">
                <h3>Arrival</h3>
                <h3>Departure</h3>
                <h3>2 Guests</h3>
                <button className='cta2'>Find Hotel</button>
            </div>
        </main>
        </>
    )
}