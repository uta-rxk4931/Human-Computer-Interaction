'use client'
import React from 'react';
import PageHeader from '../../components/PageHeader';
import CompImages from '../../components/CompImages';
import ComparisonTable from '../../components/ComparisonTable';
import NavBar from '../../components/NavBar';
import Alert from '../../components/alert';

export default function MushroomComparisonPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <PageHeader title="Compare" />
      
      <div className="w-full bg-[#F2F2F2] overflow-y-auto mt-[117px] mb-[60px] h-[calc(100vh-177px)]">
        <div className="flex justify-center pt-8 pb-4">
          <Alert />
        </div>
        <CompImages />
        <ComparisonTable />
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 z-10 bg-white h-[60px]">
        <NavBar />
      </div>
    </div>
  );
}