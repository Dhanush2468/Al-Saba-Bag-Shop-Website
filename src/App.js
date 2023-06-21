import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import SignUp from './Pages/Login/SignUp';
import SchoolBag from './Components/Components/Bags/SchoolBag';
import Collagebag from './Components/Components/Bags/Collagebag';
import HandBag from './Components/Components/Bags/HandBag';
import TooristBag from './Components/Components/Bags/TooristBag';
import SeelingBag from './Components/Components/Bags/SeelingBag';
import LadiesperseBag from './Components/Components/Bags/LadiesperseBag';
import LunchBag from './Components/Components/Bags/LunchBag';
import RucksackBag from './Components/Components/Bags/RucksackBag';
import ShoulderBag from './Components/Components/Bags/ShoulderBag';
import KidsBag from './Components/Components/Bags/KidsBag';
import FolderBag from './Components/Components/Bags/FolderBag';
import Login from './Pages/Login/Login';
import Collagebag1 from './Components/Components/Bags/Collagebag1';
import LadiesBag from './Components/Components/Bags/LadiesBag';
import DuffelBag from './Components/Components/Bags/DuffelBag';
import About from './Pages/About';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
         <Home />
      }>
      </Route>
      <Route path='/signup' element={
         <SignUp />
      }>
      </Route>
      <Route path='/login' element={
         <Login />
      }>
      </Route>
      <Route path='/schoolbag' element={
         <SchoolBag />
      }>
      </Route>
      <Route path='/collagebag' element={
         <Collagebag />
      }>
      </Route>
      <Route path='/handbag' element={
         <HandBag />
      }>
      </Route>
      <Route path='/ladiesbag' element={
         <LadiesBag />
      }>
      </Route>
      <Route path='/tooristbag' element={
         <TooristBag />
      }>
      </Route>
      <Route path='/about' element={
         <About />
      }>
      </Route>
      <Route path='/breafcase' element={
         <DuffelBag />
      }>
      </Route>
      <Route path='/seelingbag' element={
         <SeelingBag />
      }>
      </Route>
      <Route path='/ladiesperse' element={
         <LadiesperseBag />
      }>
      </Route>
      <Route path='/lunchbag' element={
         <LunchBag />
      }>
      </Route>
      <Route path='/duffel' element={
         <DuffelBag />
      }>
      </Route>
      <Route path='/rucksack' element={
         <RucksackBag />
      }>
      </Route>
      <Route path='/shoulderbag' element={
         <ShoulderBag />
      }>
      </Route>
      <Route path='/kidsbag' element={
         <KidsBag />
      }>
      </Route>
      <Route path='/folderbag' element={
         <FolderBag />
      }>
      </Route>
      <Route path='/collagebag1' element={
         <Collagebag1 />
      }>
      </Route>
      <Route path='/tooristbag' element={
         <TooristBag />
      }>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
