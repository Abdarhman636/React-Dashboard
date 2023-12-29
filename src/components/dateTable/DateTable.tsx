import React from 'react'
import './dateTable.scss'
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const DateTable = (props) => {

     const handleDelete = (id) => {
      console.log(` the ${id} has been deleted`);
     }

     const actionColumn: GridColDef = {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="action">
                <Link to={`/${props.slug}/${params.row.id}`}>
                  <img src="/view.svg" alt="" />
                </Link>
                <div className="delete" onClick={() => handleDelete(params.row.id)}>
                  <img src="/delete.svg" alt="" />
                </div>
              </div>
            );
          },
        };

        const rows = [
          { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
          { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
          { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
          { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
          { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
          { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
          { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
          { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
          { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        ];


  return (
 <div className="dataTable">
     <DataGrid className="dataGrid"
       rows={props.rows}
       columns={[...props.columns, actionColumn]}
       initialState={{
         pagination: {
           paginationModel: {
             pageSize: 5,
           },
         },
       }}
       slots={{
          toolbar: GridToolbar
       }}
       slotProps={{
          toolbar: {
               showQuickFilter: true,
               quickFilterProps: {debounceMs: 500}
          }
       }}
       pageSizeOptions={[5]}
       checkboxSelection
       disableRowSelectionOnClick
       disableColumnFilter
       disableColumnSelector
       disableDensitySelector
     />
   </div>
  )
}

export default DateTable