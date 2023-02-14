import React, { useState } from 'react'
import '../UserListComp/UserListComp.css';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid'
import { Allproduct } from '../../data';
import Box from '@mui/material/Box';
import { DeleteOutline } from '@mui/icons-material';

export default function UserListComp() {

    const [rows, setRows] = useState(Allproduct)


    const DeleteUser=Id=>{
        setRows(rows.filter(user=>user.id!=Id))
    }



    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'User', headerName: 'User', width: 200,
            renderCell: (params) => {
                return (
                    <div className='user-Div'>
                        <img src={params.row.avatar} className='Usr-img-Product' />{params.row.name}
                    </div>
                )
            }
        },
        {
            field: 'action', headerName: 'Action', width: 120,
            renderCell: (params) => {
                return (
                    <div className='action-div'>
                        <Link to={`/product/${params.row.id}`}><button className='action-button'>Edit</button> </Link>
                        
                        <DeleteOutline className='action-icon' onClick={()=>DeleteUser(params.row.id)} />
                    </div>
                )
            }
        },
    ]


    return (
        <div className='Data-grid-contaner'>
            <Box sx={{ height: 500, width: '100%'}} className='Boxxx'>
                <DataGrid
                    columns={columns}
                    rows={rows}
                    pageSize={4}

                    disableSelectionOnClick
                />
            </Box >
        </div>
    )
}