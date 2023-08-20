import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Msg from "./components/message/Msg";
import Testimonila from "./components/Testimonial/Testimonila";
import Blogs from "./components/Blogs/blog";
import Proud from "./components/Proud/Proud";
import Second from "./components/second/Second";
import Footer from "./components/Footer/Footer";
import Servicess from "./components/List1/LisCol";
import Part from "./components/Part4/part4";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      {/* Add consistent padding and centering */}
      <Navbar />
      <Intro />
      <Msg />
      <Part />
      <Testimonila />
      <Blogs />
      <Proud />
      <Second />
      <Footer />
    </div>
  );
};

export default App;
