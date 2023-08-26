import React from 'react'
import { useSelector } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


function ProgressChart() {
    const progress = useSelector((state) => state.progress);
  
  return (
    <>
      <h3>Check your weekly Progress</h3>
      <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={progress} margin={{ top: 20, right: 30, left: 20, bottom: 20 }} className='chart'>
        <Line type="monotone" dataKey="kg" stroke='#2D3748'
 strokeWidth={3} />
          <CartesianGrid stroke='#2D3748'
 strokeDasharray="6 6" />
          <XAxis dataKey="week" />
          <YAxis dataKey="kg" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}

export default ProgressChart


