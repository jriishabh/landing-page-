import React from 'react';
import Hero from './components/Hero/Hero';
import Summary from './components/Summary/Summary';
import Module from './components/Module/Module';
import Career from './components/Career/Career';
import SuccessStories from './components/Success/SuccessStories';
import WhyUs from './components/WhyUs/WhyUs';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Exam from './components/Exam/Exam';


const App = () => {
  return (
    <div>
      
      <Hero />
      <div id="summary"><Summary /></div>
      <div id="module"><Module /></div>
      <Exam></Exam>
      <div id="whyus"><WhyUs /></div>
      <SuccessStories/>
      <div id="career"><Career /></div>
      <div id="faq"><FAQ /></div>
      <Footer />
    </div>
  );
};

export default App;
