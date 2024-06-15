'use client'

import {useState, useEffect} from 'react';

export function useResponsive(width:number) {

const [responsive, setResponsive] = useState<Boolean | undefined>(undefined);

useEffect(() => {
  const updateResponsive = () => {
    setResponsive(window.innerWidth < width ? true : false)
  }
  updateResponsive()
  window.addEventListener('resize', updateResponsive)
  return () => {
    window.removeEventListener('resize', updateResponsive)
  }
}, [width])

return responsive;
}