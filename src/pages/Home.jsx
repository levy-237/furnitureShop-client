import FAQ from "../components/FAQ";
import HomeVideo from "../components/HomeVideo";
import NewsLetter from "../components/NewsLetter";
import PopularCategory from "../components/PopularCategory";
import ProductGallery from "../components/ProductGallery";
import WhyUs from "../components/WhyUs";
export function Main() {
  return (
    <div>
      <HomeVideo />
      <PopularCategory />
      <ProductGallery />
      <WhyUs />
      <FAQ />
      <NewsLetter />
    </div>
  );
}
