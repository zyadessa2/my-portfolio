import React from 'react'

const Layout = ({children , ClassName=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 ${ClassName}`}>
      {children}
    </div>
  )
}

export default Layout
