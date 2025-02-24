import React, { useEffect, useState } from 'react';
import TopBanner from './TopBanner';
import BoardDetail from './BoardDetail';
import ClassesInfo from './ClassesInfo';
import Syllabus from './Syllabus';
import Results from './Results';
import Layout from '@/layout/Layout';

export default function Index() {

  const [calendarData, setCalendarData] = useState("");

  useEffect(() => {
    getFinancialYear();
  }, [calendarData]); // Ensure 'calendarData' exists in state

  function getFinancialYear() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // Months are 0-based, so +1
    
    let financialYear;
    if (currentMonth < 4) {
      financialYear = `${currentYear - 1}-${currentYear}`;
    } else {
      financialYear = `${currentYear}-${currentYear + 1}`;
    }

    setCalendarData(financialYear);
  }

  return (
    <>
      <div>
        <Layout>
          <TopBanner calendardata={calendarData} />
          <BoardDetail />
          <ClassesInfo />
          <Syllabus />
          <Results calendardata={calendarData} />
        </Layout>
      </div>

    </>
  )
}
