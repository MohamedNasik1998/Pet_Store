import { useEffect, useState } from "react";
import "../assets/css/Homepage.css";
import HeroSection from "../components/HeroSection";
import PetSection from "../components/PetSection";
import BannerSection from "../components/BannerSection";
import ProductSection from "../components/ProductSection";
import { KnowledgeSection } from "../components/KnowledgeSection";
import { Footer } from "../components/Footer";
import BannerSection2 from "../components/BannerSection2";
import SellersSection from "../components/SellersSection";
import { Pet } from "../models/Pet";

const Homepage = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchPets();
    fetchProducts();
  }, []);

  const fetchPets = async () => {
    try {
      const res = await fetch(
        "https://monitor-backend-rust.vercel.app/api/pets"
      );
      const data = await res.json();
      console.log(data);
      setPets(data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };
  const fetchProducts = async () => {
    try {
      const res = await fetch(
        "https://monitor-backend-rust.vercel.app/api/products"
      );
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="bg-[#FDFDFD]">
      <main className="w-[100vw]">
        <HeroSection />
        <PetSection pets={pets} from="Home Page" />
        <BannerSection />
        <ProductSection products={products} />
        <SellersSection />
        <BannerSection2 />
        <KnowledgeSection />
        <Footer />
      </main>
    </div>
  );
};

export default Homepage;
