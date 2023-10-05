import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon prime banner"
          className="home_image"
        />
        <div className="home_row">
         <Product id="1" productName="The lean startup" rating={4} productImage="https://m.media-amazon.com/images/I/81-QB7nDh4L._SL1500_.jpg" price={100}/>
         <Product id="2" productName="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" productImage="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" price={230} rating={3} />
        </div>
        <div className="home_row">
        <Product id="3" productName="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" rating={4} productImage="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" price={300}/>
         <Product id="4" productName="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" rating={3} productImage="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" price={500}/>
         <Product id="5" productName="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" rating={5} productImage="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" price={1000}/>
         
        </div>
        <div className="home_row">
        <Product id="6" productName="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" rating={5} productImage="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" price={1990}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
