import Navbar from './navbar' ;
// import Carousel from './carousel' ;

import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

export default function Layout({ children }) {

  const images = [
    { url: "https://picsum.photos/seed/a/1600/900" },
    { url: "https://picsum.photos/seed/b/1920/1080" },
    { url: "https://picsum.photos/seed/c/1366/768" },
  ];

  return (
    <> 
      
      <Navbar />
      <Slider imageList={images} width={1000} height={300} />
      <main>{children}</main>
      
    </>
  )
}