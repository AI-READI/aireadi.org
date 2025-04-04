import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Header />
      <div className='pt-[61px]'>{children}</div>

      <div className='fixed bottom-0 z-50 w-screen bg-sky-200 p-2 text-center text-sm text-gray-900 max-sm:bottom-2'>
        This repository is under review for potential modification in compliance
        with Administration directives.
      </div>
      <Footer />
    </>
  );
}
