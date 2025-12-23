import "./Navbar.css";
export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>HOTEL LOGO</h1>
        </div>
        <div className="search-bar">
          <input type="text" class="city-input" placeholder="Search City" />
          {/* <button class="search-btn">
            <span class="material-symbols-outlined"> search </span>
          </button> */}
        </div>
        <div className="language-selector">English</div>
        <div className="cta book-now"><button>BOOK NOW</button></div>
      </nav>
    </header>
  );
}
