import React from 'react'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, Tooltip } from 'recharts'

export default function Chart({ data, title, grid }) {
    return (
        <div className='chart-contaner'>
            <h2 className='chart-title'>{title}</h2>
            <ResponsiveContainer aspect={4}>
                <LineChart width='100%' data={data} >
                    <Line type='monotone' stroke='#5550bd' dataKey='price' />
                    <XAxis dataKey='name'stroke='#5550bd' />
                    <Tooltip />
                    {grid && <CartesianGrid stroke='rgb(169 168 168)' strokeDasharray='5 5' />}
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}
