import React from 'react'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, Tooltip } from 'recharts'

export default function Chart({ data, title, grid }) {
    return (
        <div className='chart-contaner'>
            <h2 className='chart-title' >{title}</h2>
            <ResponsiveContainer aspect={4}>
                <LineChart width='100%' data={data} >
                    <Line type='monotone' stroke='#fff' dataKey='تومان' />
                    <XAxis dataKey='name'stroke='#fff' />
                    <Tooltip />
                    {grid && <CartesianGrid stroke='rgb(167, 167, 167)' strokeDasharray='5 5' />}
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}
