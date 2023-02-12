import React from 'react'
import './LastTransaction.css'
import { LastTransactionDate } from '../../data'

export default function LastTransaction() {

    const Button = ({type}) => {
        return (<button className={`lst-button ${type}`}>{type}</button>)
    }

    return (
        <div className='lst-contaner'>
            <span className='lst-title'>Latest TransActions</span>
            <table className='lst-form'>

                <tr >
                    <th >Customer</th>
                    <th >Date</th>
                    <th >Amuot</th>
                    <th >Status</th>
                </tr>
                {LastTransactionDate.map(item => (
                    <tr>
                        <td className='customer-td'>
                            <img src={item.img} width={40} />
                            <span className='lst-userName'>{item.customer}</span>
                        </td>
                        <td >{item.date} </td>
                        <td > {item.amount} </td>
                        <td > <Button type={item.status} /></td>
                    </tr>

                ))}

            </table>
        </div>
    )
}
