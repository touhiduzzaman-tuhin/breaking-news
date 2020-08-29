import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import BreakingNews from './components/BreakingNews/BreakingNews';
// import Fragment from './components/Fragment/Fragment';

function App() {
  return (
    <div>
        <Header></Header>
        {/* <Fragment></Fragment> */}
        <BreakingNews></BreakingNews>
    </div>
  );
}

export default App;
