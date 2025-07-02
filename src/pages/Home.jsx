import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import NewsLetter from "../components/NewsLetter";
import FrequentAsked from "../components/FrequentAsked";
import BlogSection from "../components/BlogSection";

const Home = () => {
  useEffect(() => {
    document.title = "Neighborly | Home";
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Gallery></Gallery>
      <BlogSection></BlogSection>
      <FrequentAsked></FrequentAsked>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
