import React from 'react'
import './singleProduct.scss'
import {singleProduct} from '../../data.js'
import Single from '../../components/single/Single.tsx'

const SingleProduct = () => {
  return (
    <Single {...singleProduct} />
  )
}

export default SingleProduct