"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import "./globals.css";
import { AuthContext } from "./layout";

const bikes = [
  {
    id: 1,
    name: "Bajaj",
    description: "Affordable and reliable motorcycles for daily use.",
    price: 1200,
    image: "bajaj.png",
  },
  {
    id: 2,
    name: "BMW",
    description: "Premium bikes with advanced features and luxury designs.",
    price: 15000,
    image: "bmw.png",
  },
  {
    id: 3,
    name: "Hero",
    description: "Fuel-efficient bikes designed for the everyday rider.",
    price: 800,
    image: "hero.png",
  },
  {
    id: 4,
    name: "Honda",
    description: "Innovative and durable motorcycles with excellent mileage.",
    price: 1000,
    image: "honda.png",
  },
  {
    id: 5,
    name: "Benelli",
    description:
      "Stylish bikes with a perfect balance of power and performance.",
    price: 4000,
    image: "benelli.png",
  },
  {
    id: 6,
    name: "Kawasaki",
    description: "High-performance sports bikes for thrill-seekers.",
    price: 8000,
    image: "kawasaki.png",
  },
  {
    id: 7,
    name: "KTM",
    description: "Lightweight bikes with superior handling and power.",
    price: 5000,
    image: "ktm.png",
  },
  {
    id: 8,
    name: "Yamaha",
    description: "Reliable bikes with a legacy of innovation and speed.",
    price: 3000,
    image: "yamaha.png",
  },
  {
    id: 9,
    name: "TVS",
    description: "Budget-friendly bikes with robust build quality.",
    price: 900,
    image: "tvs.png",
  },
];
const bparts = [
  {
    id: 1,
    name: "clutch",
    description: "Affordable and reliable motorcycles for daily use.",
    price: 1200,
    image: "Clutch parts.png",
  },
  {
    id: 2,
    name: "chain",
    description: "Affordable and reliable motorcycles for daily use.",
    price: 1200,
    image: "chain sprocket.png",
  },
  {
    id: 3,
    name: "Electric",
    description: "Affordable and reliable motorcycles for daily use.",
    price: 1200,
    image: "Electric parts.png",
  },
  {
    id: 4,
    name: "Engine",
    description: "Affordable and reliable motorcycles for daily use.",
    price: 1200,
    image: "Engine System.png",
  },
  {
    id: 5,
    name: "Fuel System",
    description: "Affordable and reliable motorcycles for daily use.",
    price: 1200,
    image: "fuel system.png",
  },
  {
    id: 6,
    name: "Break system",
    description: "Affordable and reliable motorcycles for daily use.",
    price: 1200,
    image: "Break system.png",
  },
  {
    id: 7,
    name: "Service parts",
    description: "Affordable and reliable motorcycles for daily use.",
    price: 1200,
    image: "service parts.png",
  },
];
const trending = [
  {
    id: 1,
    name: "Ktm Duke 390|Head Light Assembly With Panels ",
    description: "Affordable and reliable motorcycles for daily use.",
    price: 1200,
    image: "Ktm duke 390.png",
  },
  {
    id: 2,
    name: "Lpg 5 Litres Top Box",
    description: "Affordable and reliable motorcycles for daily use.",
    price: 1200,
    image: "LPG 5 Litres.png",
  },
  {
    id: 3,
    name: "100% Mx Goggle Full black",
    description: "Affordable and reliable motorcycles for daily use.",
    price: 1200,
    image: "mx.png",
  },
  {
    id: 4,
    name: "red hemlate",
    description: "Affordable and reliable motorcycles for daily use.",
    price: 1200,
    image: "red hemlate.png",
  },
];

const Header = () => (
  <header className="header fixed w-screen z-50">
    <div className="logo">
      <span className="logo-text"> motox - part </span>{" "}
    </div>{" "}
    <div className="search-bar">
      <input type="text" placeholder="Search: Fogg Lamps" />
      <select className="category-dropdown">
        <option> All categories </option>{" "}
      </select>{" "}
      <button className="search-button"> 🔍 </button>{" "}
    </div>{" "}
    <div className="user-options flex">
      <Link href={"/signin"}>
        <Button variant="outline"> SignIn </Button>{" "}
      </Link>{" "}
      <Link href={"/signin"}>
        <Button variant="outline"> SignUp </Button>{" "}
      </Link>{" "}
    </div>{" "}
    <CartIcon />
  </header>
);

const NavBar = () => (
  <nav className="navbar fixed w-screen mt-[62px] z-50">
    <a href="#"> Home </a> <a href="#"> All Collections </a>{" "}
    <a href="#"> Shop By Bike▼ </a> <a href="#"> Shop By Spares▼ </a>{" "}
    <a href="#"> Shop By Accessories▼ </a> <a href="#"> Wholesale Price </a>{" "}
    <a href="#"> Track Order▼ </a> <a href="#"> FAQ </a>{" "}
    <a href="#"> Contact Us </a>{" "}
  </nav>
);

const ShopByBike = () => (
  <section className="shop-by-bike">
    <h2> 𝐒𝐡𝐨𝐩𝐁𝐲𝐁𝐢𝐤𝐞 </h2>{" "}
    <Carousel className="w-[1290px] mx-auto scrollbar-hide">
      <CarouselContent className="">
        {" "}
        {bikes.map((bike, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/5">
            <Link className="item" key={index} href={`/Parts/?bike=${bike.id}`}>
              <img src={bike.image} alt="" />
              <p className="text-black"> {bike.name} </p>{" "}
            </Link>{" "}
          </CarouselItem>
        ))}{" "}
      </CarouselContent>{" "}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>{" "}
  </section>
);

const ShopByParts = () => (
  <section className="shop-by-bike">
    <h2> 𝗦𝗵𝗼𝗽𝗕𝘆𝗣𝗮𝗿𝘁𝘀 </h2>{" "}
    <Carousel className="w-[1290px] mx-auto scrollbar-hide">
      <CarouselContent className="">
        {" "}
        {bparts.map((bike, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/5">
            <Link className="item" key={index} href={`/Parts/?bike=${bike.id}`}>
              <img src={bike.image} alt="" />
              <p className="text-black"> {bike.name} </p>{" "}
            </Link>{" "}
          </CarouselItem>
        ))}{" "}
      </CarouselContent>{" "}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>{" "}
  </section>
);
// const ShopByTrend = () => (

//   <section className="shop-by-bike">
//     <h2> 𝐒𝐡𝐨𝐩𝐁𝐲𝐓𝐫𝐞𝐧𝐝 </h2>{" "}
//     <Carousel className="w-[1290px] mx-auto scrollbar-hide">
//       <CarouselContent className="">
//         {" "}
//         {trending.map((bike, index) => (
//           <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/5">
//             <Link className="item" key={index} href={`/Parts/?bike=${bike.id}`}>
//               <img src={bike.image} alt="" />
//               <p className="text-black"> {bike.name} </p>{" "}
//             </Link>{" "}
//           </CarouselItem>
//         ))}{" "}
//       </CarouselContent>{" "}
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>{" "}
//   </section>
// );
const ShopByTrend = () => {
  const { setCartItem } = useContext(AuthContext);

  const addCart = (item) => {
    setCartItem((prev) => {
      // Check if the item already exists in the cart
      const itemExists = prev.find((cartItem) => cartItem.id === item.id);

      if (itemExists) {
        // Update the quantity of the existing item
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      // If the item doesn't exist, add it to the cart with quantity 1
      return [...prev, { ...item, quantity: 1 }];
    });
  };
  return (
    <section className="shop-by-bike py-8">
      <h2 className="text-center text-2xl font-bold mb-6 text-black">
        𝐒𝐡𝐨𝐩 𝐁𝐲 𝐓𝐫𝐞𝐧𝐝
      </h2>
      <Carousel className="w-[1290px] mx-auto scrollbar-hide">
        <CarouselContent>
          {trending.map((bike, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/5"
            >
              <div className="bg-white rounded-2xl shadow-lg p-4 m-2 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                <Link
                  href={`/Parts/?bike=${bike.id}`}
                  className="w-full text-center"
                >
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-40 object-contain mb-3"
                  />
                  <p className="text-black font-semibold">{bike.name}</p>
                </Link>
                <button
                  onClick={() => addCart(bike)}
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

const Helmets = () => {
  const { setCartItem } = useContext(AuthContext);
  const addCart = (helmet) => {
    setCartItem((prev) => {
      // Check if the item already exists in the cart
      const itemExists = prev.find((item) => item.id === helmet.id);

      if (itemExists) {
        // Update the quantity of the existing item
        return prev.map((item) =>
          item.id === helmet.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // If the item doesn't exist, add it to the cart with quantity 1
      return [...prev, { ...helmet, quantity: 1 }];
    });
  };

  return (
    <section className="helmets">
      <h1 className="text-black text-xl"> 𝐎𝐮𝐫𝐇𝐞𝐥𝐦𝐞𝐭𝐬 </h1>{" "}
      <div className="helmet-container">
        {" "}
        {[
          { src: "helmate1.png", name: "Srm", price: 100, quantity: 1, id: 1 },
          {
            src: "helmate2.png",
            name: "Saber Single Colors Helmet",
            price: 120,
            quantity: 1,
            id: 2,
          },
          {
            src: "helmate3.png",
            name: "Saber X-Sport color Helmet",
            price: 150,
            quantity: 1,
            id: 3,
          },
          {
            src: "hemlate4.png",
            name: "Saber X-Sport color Helmet",
            price: 150,
            quantity: 1,
            id: 4,
          },

          {
            src: "helamte6.png",
            name: "Saber X-Sport color Helmet",
            price: 150,
            quantity: 1,
            id: 5,
          },
        ].map((helmet, index) => (
          <div className="helmet-item" key={index}>
            <img src={helmet.src} alt={helmet.name} className="helmet-image" />
            <h3 className="text-black"> {helmet.name} </h3>{" "}
            <p className="price text-black"> $ {helmet.price} </p>{" "}
            <button className="add-to-cart" onClick={() => addCart(helmet)}>
              Add to Cart{" "}
            </button>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      {" "}
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
          <h3> {section.title} </h3>{" "}
          <ul>
            {" "}
            {section.links.map((link, idx) => (
              <li key={idx}>
                <a href="#"> {link} </a>{" "}
              </li>
            ))}{" "}
          </ul>{" "}
        </div>
      ))}{" "}
      <div className="footer-section">
        <h3> Subscribe to our emails </h3>{" "}
        <p>
          Subscribe to get notified about product launches, special offers, and
          news.{" "}
        </p>{" "}
        <form>
          <input type="email" placeholder="Email" />
          <button type="submit"> Subscribe </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>{" "}
    <div className="footer-bottom">
      <div className="footer-country">
        <label htmlFor="country"> Country / region </label>{" "}
        <select id="country">
          <option value="india"> India | INR₹ </option>{" "}
        </select>{" "}
      </div>{" "}
      <p> ©2024, Motox Parts </p> <p> Made with love by❤️ GNIT BOYS </p>{" "}
    </div>{" "}
    <div className="footer-social">
      {" "}
      {[
        "facebook-icon.png",
        "instagram-icon.png",
        "linkedin-icon.png",
        "youtube-icon.png",
      ].map((icon, index) => (
        <a href="#" key={index}>
          <img src={icon} alt={icon.split("-")[0]} />{" "}
        </a>
      ))}{" "}
    </div>{" "}
  </footer>
);
const CartIcon = () => {
  const { cartItem } = useContext(AuthContext);

  let len = cartItem.length;

  return (
    <Link className="mr-4" href={"/Cart"}>
      <div className="relative">
        <CiShoppingCart className="relative flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full shadow-lg" />{" "}
        {len > 0 && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {" "}
            {len}{" "}
          </span>
        )}{" "}
      </div>{" "}
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
          <i className="fa-brands fa-facebook"> </i>{" "}
        </div>{" "}
      </div>{" "}
      <ShopByBike />
      <ShopByParts />
      <ShopByTrend />
      <Helmets />
      <Footer />
    </div>
  );
};

export default App;
