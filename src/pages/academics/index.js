import React from 'react';
import TopBanner from './TopBanner';
import BoardDetail from './BoardDetail';
import ClassesInfo from './ClassesInfo';
import Syllabus from './Syllabus';
import Results from './Results';
import Layout from '@/layout/Layout';

export default function index() {
  function getFinancialYear() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // Months are 0-based, so +1

    if (currentMonth < 4) {
      return `${currentYear - 1}-${currentYear}`;
    } else {
      return `${currentYear}-${currentYear + 1}`;
    }
  }


  return (
    <>
      <div>
        <Layout>
          <TopBanner getFinancialYear={getFinancialYear} />
          <BoardDetail />
          <ClassesInfo />
          <Syllabus />
          <Results getFinancialYear={getFinancialYear} />
        </Layout>
      </div>

    </>
  )
}
