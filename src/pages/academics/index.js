import React from 'react';
import TopBanner from './TopBanner';
import BoardDetail from './BoardDetail';
import ClassesInfo from './ClassesInfo';
import Syllabus from './Syllabus';
import Results from './Results';
import Layout from '@/Component/Layout';

export default function index() {
  return (
     <>
     <div>
      <Layout>
      <TopBanner /> 
      <BoardDetail /> 
      <ClassesInfo /> 
      <Syllabus />
      <Results/>
      </Layout>
    </div>     
       
     </>
  )
}
