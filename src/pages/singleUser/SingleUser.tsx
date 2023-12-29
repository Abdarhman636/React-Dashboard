import React from 'react'
import './singleUser.scss'
import { Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import Single from '../../components/single/Single.tsx'
import {singleUser} from '../../data.js'

const SingleUser = () => {
  return (
<Single {...singleUser}  />
  )
}

export default SingleUser