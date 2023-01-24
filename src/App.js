import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import HomeCont from './container/HomeCont/HomeCont';
import SkillCont from './container/SkillCont/SkillCont';
import TailedBeast from './component/TailedBeast/TailedBeast';
import TierList from './component/TierList/TierList';
import KarakterCont from './container/KarakterCont/KarakterCont';
import FooterComp from './component/FooterComp/FooterComp';
import ContactComp from './component/ContactComp/ContactComp';
import PrivacyComp from './component/PrivacyComp/PrivacyComp';
import DetailCharCont from './container/DetailCharCont/DetailCharCont';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './component/ScrollToTop';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/NinjaBocil' element={<HomeCont />} exact />
          <Route path='/Karakter' element={<KarakterCont />} exact />
          <Route path='/detail-char/:id'element={<DetailCharCont />} />
          <Route path='/Skill' element={<SkillCont />} exact />
          <Route path='/Tailed' element={<TailedBeast />} exact />
          <Route path='/Tier' element={<TierList />} exact />
          <Route path='/Contact' element={<ContactComp />} exact />
          <Route path='/Privacy' element={<PrivacyComp />} exact />
        </Routes>
        <FooterComp />
      </div>
    </Router>
  );
}

export default App;
