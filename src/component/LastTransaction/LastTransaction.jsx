import React from 'react'
import './LastTransaction.css'
import { LastTransactionDate } from '../../data'

export default function LastTransaction() {

    const Button = ({ type, name }) => {
        return (<button className={`lst-button ${type}`}>{name}</button>)
    }

    return (
        <div className='lst-contaner'>
            <span className='lst-title'>آخرین تراکنش ها</span>
            <table className='lst-form'>
                <thead>
                    <tr >
                        <th >خریدار</th>
                        <th >تاریخ</th>
                        <th >مبلغ</th>
                        <th >وضعیت</th>
                    </tr>
                </thead>
                <tbody>

                    {LastTransactionDate.map(item => (
                        <tr key={item.id}>
                            <td className='customer-td'>
                                <img className='home-botton-img' src={item.img} width={40} />
                                <span className='lst-userName'>{item.customer}</span>
                            </td>
                            <td >{item.date} </td>
                            <td > {item.amount} </td>
                            <td > <Button type={item.status} name={item.statusName} /></td>
                        </tr>

                    ))}
                </tbody>

            </table>
        </div>
    )
}
