import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, userRows } from "../../utils/api";
import "./datatable.scss"

const DataTable = () => {


  return (
    <div className="userTable" >
      <DataGrid
        rows={userRows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
