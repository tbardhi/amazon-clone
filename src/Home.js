import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />

        <Product
          id="52321345"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough"
          price={236}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321346"
          title="Samsung UN55KU7500 Curved 55-Inch 4K Ultra HD Smart LED TV (2016 Model)
          4
          (209)"
          price={119.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/912r79L9gIL._AC_SX355_.jpg"
        />

        <Product
          id="12321343"
          title="Police SPL872 Sunglasses"
          price={80.12}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51WrY9EJEqL._AC_UX522_.jpg"
        />

        <Product
          id="12321342"
          title="HP ProBook 4530s Laptop (Core i5 2nd Gen/4 GB/500 GB/Windows 7/1)"
          price={310.56}
          rating={5}
          image="https://www.91-img.com/pictures/laptops/hp/hp-4530s-core-i5-2nd-gen-4-gb-500-gb-windows-7-1-gb-6467-large-1.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321340"
          title="Sony X750H 55-inch 4K Ultra HD LED TV (2020 Model)"
          price={1002.36}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61qVVtdXJ1L._AC_SY355_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
