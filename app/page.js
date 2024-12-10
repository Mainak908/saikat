"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import "./globals.css";
import { AuthContext } from "./layout";

const Header = () => (
  <header className="header fixed w-screen z-50">
    <div className="logo">
      <span className="logo-text">motox-part</span>
    </div>
    <div className="search-bar">
      <input type="text" placeholder="Search: Fogg Lamps" />
      <select className="category-dropdown">
        <option>All categories</option>
      </select>
      <button className="search-button">🔍</button>
    </div>
    <div className="user-options flex">
      <Link href={"/signin"}>
        <Button variant="outline">SignIn</Button>
      </Link>

      <Link href={"/signin"}>
        <Button variant="outline">SignUp</Button>
      </Link>
    </div>
    <CartIcon />
  </header>
);

const NavBar = () => (
  <nav className="navbar fixed w-screen mt-[62px] z-50">
    <a href="#">Home</a>
    <a href="#">All Collections</a>
    <a href="#">Shop By Bike ▼</a>
    <a href="#">Shop By Spares ▼</a>
    <a href="#">Shop By Accessories ▼</a>
    <a href="#">Wholesale Price</a>
    <a href="#">Track Order ▼</a>
    <a href="#">FAQ</a>
    <a href="#">Contact Us</a>
  </nav>
);

const ShopByBike = () => (
  <section className="shop-by-bike">
    <h2>𝐒𝐡𝐨𝐩 𝐁𝐲 𝐁𝐢𝐤𝐞</h2>
    <div className="bike-grid">
      <div className="carousel">
        <button className="btn left" id="prevBtn">
          &#9664;
        </button>
        <div className="carousel-wrapper">
          <div className="carousel-content">
            {[
              "bajaj.png",
              "bmw.png",
              "hero.png",
              "honda.png",
              "benelli.png",
              "kawasaki.png",
              "ktm.png",
              "yamaha.png",
              "tvs.png",
            ].map((bike, index) => (
              <Link className="item" key={index} href={"/Parts"}>
                <img src={bike} alt={bike.split(".")[0].toUpperCase()} />
                <p className="text-black">{bike.split(".")[0].toUpperCase()}</p>
              </Link>
            ))}
          </div>
        </div>
        <button className="btn right" id="nextBtn">
          &#9654;
        </button>
      </div>
    </div>
  </section>
);

const Helmets = () => {
  const { setCartItem } = useContext(AuthContext);
  const addCart = (helmet) => {
    setCartItem((prev) => [...prev, helmet]);
  };
  return (
    <section className="helmets">
      <h1 className="text-black text-xl">𝐎𝐮𝐫 𝐇𝐞𝐥𝐦𝐞𝐭𝐬</h1>
      <div className="helmet-container">
        {[
          { src: "helmate1.png", name: "Srm", price: 100, quantity: 1 },
          {
            src: "helmate2.png",
            name: "Saber Single Colors Helmet",
            price: 120,
            quantity: 1,
          },
          {
            src: "helmate3.png",
            name: "Saber X-Sport Helmet",
            price: 150,
            quantity: 1,
          },
        ].map((helmet, index) => (
          <div className="helmet-item" key={index}>
            <img src={helmet.src} alt={helmet.name} className="helmet-image" />
            <h3 className="text-black">{helmet.name}</h3>
            <p className="price text-black">${helmet.price}</p>
            <button className="add-to-cart" onClick={() => addCart(helmet)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      {[
        {
          title: "Information",
          links: [
            "Contact Us",
            "FAQs",
            "Track Order",
            "Terms Of Service",
            "Refund Policy",
          ],
        },
        {
          title: "About Us",
          links: [
            "About Us",
            "Privacy Policy",
            "Terms And Conditions",
            "Refund / Cancellation Policy",
            "Shipping Policy",
          ],
        },
      ].map((section, index) => (
        <div className="footer-section" key={index}>
          <h3>{section.title}</h3>
          <ul>
            {section.links.map((link, idx) => (
              <li key={idx}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="footer-section">
        <h3>Subscribe to our emails</h3>
        <p>
          Subscribe to get notified about product launches, special offers, and
          news.
        </p>
        <form>
          <input type="email" placeholder="Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-country">
        <label htmlFor="country">Country/region</label>
        <select id="country">
          <option value="india">India | INR ₹</option>
        </select>
      </div>
      <p>© 2024, Motox Parts</p>
      <p>Made with love by ❤️ GNIT BOYS</p>
    </div>
    <div className="footer-social">
      {[
        "facebook-icon.png",
        "instagram-icon.png",
        "linkedin-icon.png",
        "youtube-icon.png",
      ].map((icon, index) => (
        <a href="#" key={index}>
          <img src={icon} alt={icon.split("-")[0]} />
        </a>
      ))}
    </div>
  </footer>
);
const CartIcon = () => {
  const { cartItem } = useContext(AuthContext);

  let len = cartItem.length;

  return (
    <Link className="mr-4" href={"/Cart"}>
      <div className="relative">
        <CiShoppingCart className="relative flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full shadow-lg" />

        {len > 0 && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {len}
          </span>
        )}
      </div>
    </Link>
  );
};
const App = () => {
  return (
    <div className="">
      <Header />
      <NavBar />
      <div className="pt-[105px]">
        <img src="jaydeb.png" alt="" className="h-full w-full" />
        <div>
          <i className="fa-brands fa-facebook"></i>
        </div>
      </div>
      <ShopByBike />
      <Helmets />
      <Footer />
    </div>
  );
};

export default App;
