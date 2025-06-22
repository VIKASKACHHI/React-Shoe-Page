const Navigation =() =>{
    return (
        <nav>
        <div className="logo">
          <img
            className="logo-img"
            src="/assets/adidas.png"
            alt="logo"
            style={{ height: '60px' }}
          />
          
        </div>
        <ul>
          <li><a href="#">Menu</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button>Login</button>
      </nav>
    )
}

export default Navigation;