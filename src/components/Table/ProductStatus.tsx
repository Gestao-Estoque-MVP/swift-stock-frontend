import React from 'react';

interface IFormPageProps {
  children: React.ReactNode
}

const ProductStatus = ({children}: IFormPageProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default ProductStatus