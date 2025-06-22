const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE 
          TO HELP YOU WITH OUR SHOES TO MAKE YOUR FEET FEEL COMFORT.
        </p>

        <div className="hero-buttons">
          <button className="shop-btn">Shop Now</button>
          <button className="category-btn">Category</button>
        </div>

        <div className="marketplace">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/assets/amazon.png" alt="amazon" />
            <img src="/assets/flipkart.jpg" alt="flipkart" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/assets/shoe.jpg" alt="Adidas Shoe" />
      </div>
    </div>
  );
};

export default Hero;
