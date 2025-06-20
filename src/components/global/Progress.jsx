'use client';
import React from "react";
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';

const Progress = () => {
  return (
    <div>
      <ProgressBar
        height="10px"
        color="#FF0000"
        options={{ showSpinner: true }}
      />
    </div>
  );
};

export default Progress;
