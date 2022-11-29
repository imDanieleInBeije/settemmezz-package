import React from 'react'
import { useMediaQuery } from "react-responsive"

const useResponsive = () => {

  const isDesktop = useMediaQuery({ minWidth: 992 })

  return isDesktop
}

export default useResponsive