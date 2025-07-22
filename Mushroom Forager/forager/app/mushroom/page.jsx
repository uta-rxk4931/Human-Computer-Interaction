'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PageHeader from '../../components/PageHeader';
import NavBar from '../../components/NavBar';
import ErrorReport from '../../components/ErrorReport';
import Alert from '../../components/alert';
import Mushroom from '../../components/Mushroom';
import MushroomList from '../../components/MushroomList';
import Image from 'next/image';
import AttentionBox from '../../components/attentionbox';

export default function MushroomPage() {
  const [showAttention, setShowAttention] = useState(false);
  
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const fromImage = urlParams.get('fromImage');
    
    setShowAttention(fromImage === 'true');
  }, []);

  return (
    <div className="page flex flex-col min-h-screen w-full bg-[#F2F2F2] relative">
      <div className={showAttention ? 'blur-md' : ''}>
        <PageHeader title="Match Results" />
        
        <div className="w-full mt-40 flex justify-center">
          <div className="container max-w-4xl px-4">
            <ErrorReport />
            <div className="flex justify-center pt-4">
              <Alert />
            </div>
          </div>
        </div>
        
        <div className="w-full bg-[#F2F2F2]">
          <div className="container max-w-4xl mx-auto p-4 flex flex-col items-center">
            <div className="self-end mt-4 mr-14">
              <Link href="/comparison">
                <Image 
                  src="/icons/Compare.svg" 
                  alt="Compare" 
                  width={78} 
                  height={19} 
                />
              </Link>
            </div>
            
            <Mushroom />
            
            <div className="w-full mb-40">
              <MushroomList 
                listType="similar" 
                showComparison={true} 
                title="Similar Matches" 
              />
            </div>
          </div>
        </div>
        
        <footer className="w-full bg-[#579076] flex items-center justify-around h-[60px]">
          <NavBar />
        </footer>
      </div>
      
      {showAttention && (
        <div 
          className="fixed inset-0 bg-black/50" 
          onClick={() => setShowAttention(false)}
        >
          <AttentionBox onClose={() => setShowAttention(false)} />
        </div>
      )}
    </div>
  );
}