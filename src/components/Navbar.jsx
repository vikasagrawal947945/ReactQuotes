function Navbar(){
    return (
      <>
      <nav className="navbar">
      <div className="logo">
        <a href="#">
          <img src="Geeksfood.svg" alt="GeekFood Logo" />
          <span>GeekFood</span>
        </a>
      </div>

      <div className="links">
        <ul>
          <li>Home</li>
          <li>Quote</li>
          <li>Restaurants</li>
          <li>Foods</li>
          <li>Contacts</li>
        </ul>
      </div>

      <div className="button">
        <button>Get Started</button>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>

    </>
    );
}
export default Navbar;