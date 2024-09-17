import React from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer'; 
import TopBanner from './TopBanner';
import BoardDetail from './BoardDetail';
import ClassesInfo from './ClassesInfo';
import Syllabus from './Syllabus';
import Results from './Results';

export default function index() {
  return (
     <>
     <div>
      <Header/>
      <TopBanner /> 
      <BoardDetail /> 
      <ClassesInfo /> 
      <Syllabus />
      <Results/>
      <Footer/>
    </div>     
       
     </>
  )
}
