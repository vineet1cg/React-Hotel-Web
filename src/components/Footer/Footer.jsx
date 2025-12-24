import './Footer.css'

export default function Footer(){
    return (
      <>
        <footer className='footer-parent'>
          <div className="footer-txt">
            <h3>All Rights Reserved. ©️ Vineet Prajapati</h3>
          </div>
          <div className="footer-links">
            <ul className='footer-list'>
                <li><a href="">Youtube</a></li>
                <li><a href="">GitHub</a></li>
                <li><a href="">LinkedIn</a></li>
            </ul>
          </div>
        </footer>
      </>
    );
}