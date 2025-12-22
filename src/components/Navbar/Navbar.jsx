import "./Navbar.css";
export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>Hotel Logo</h1>
        </div>
        <div className="search-bar">
          <input type="text" class="city-input" placeholder="Search City" />
          <button class="search-btn">
            <span class="material-symbols-outlined"> search </span>
          </button>
        </div>
        <div className="language-selector"></div>
        <div className="cta book-now"></div>
      </nav>
    </header>
  );
}
