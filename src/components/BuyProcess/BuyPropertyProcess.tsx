'use client'
import React from 'react'

import MultiStepForm from './MultiStepForm';
import { useSearchParams } from 'next/navigation';
const BuyPropertyProcess = () => {

  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  console.log(type, "buy");
  
  return (

    <div>
       
      <div>
        <MultiStepForm  type={type}/>
      </div>
    </div>
  )
}

export default BuyPropertyProcess


