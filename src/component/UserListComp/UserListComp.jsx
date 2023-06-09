import React, { useState } from 'react'
import './UserListComp.css'
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid'
import { AllUsers } from '../../data';
import Box from '@mui/material/Box';
import { DeleteOutline } from '@mui/icons-material';

export default function UserListComp() {

    const [rows, setRows] = useState(AllUsers)


    const DeleteUser = Id => {
        setRows(rows.filter(user => user.id != Id))
    }



    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'User', headerName: 'کاربر', width: 200,
            renderCell: (params) => {
                return (
                    <div className='user-Div'>
                        <img src={params.row.avatar} className='Usr-img' />{params.row.userName}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'ایمیل', width: 150 },
        { field: 'status', headerName: 'وضعیت', width: 150 },
        { field: 'transeAction', headerName: 'مقدار معامله', width: 150 },
        {
            field: 'action', headerName: 'حزف', width: 120,
            renderCell: (params) => {
                return (
                    <div className='action-div'>
                    
                        <DeleteOutline className='action-icon' onClick={() => DeleteUser(params.row.id)} />
                    </div>
                )
            }
        },
    ]


    return (
        <div className='Data-grid-contaner'>
            <Box sx={{ height: 500, width: '100%' }} className='Boxxx'>
                <DataGrid
                    columns={columns}
                    rows={rows}
                    pageSize={6}
                    disableSelectionOnClick
                />
            </Box >
        </div>
    )
}