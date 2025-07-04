// import type { GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';

// import React, { useState } from 'react';
// import { varAlpha } from 'minimal-shared/utils';

// import AddIcon from '@mui/icons-material/Add';
// import ClearIcon from '@mui/icons-material/Clear';
// import EmailIcon from '@mui/icons-material/Email';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SearchIcon from '@mui/icons-material/Search';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import {
//   Box,
//   Button,
//   useTheme,
//   TextField,
//   Typography,
//   IconButton,
//   FormControl,
//   InputAdornment,
// } from '@mui/material';
// import {
//   DataGrid,
//   GridPagination,
//   useGridSelector,
//   useGridApiContext,
//   gridRowSelectionStateSelector,
// } from '@mui/x-data-grid';

// import { Iconify } from '../iconify';
// import DynamicFilterDrawer from './DynamicFilterDrawer';

// import type { StaffData, ColumnConfig } from './types';

// interface Props {
//   rows: StaffData[];
//   columns: ColumnConfig[];
// }

// type FilterField =
//   | { name: string; label: string; type: 'select'; options: string[] }
//   | { name: string; label: string; type: 'text' };

// const DynamicTable: React.FC<Props> = ({ rows, columns }) => {
//   const theme = useTheme();
//   const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
//   const [searchValue, setSearchValue] = useState<string>('');
//   const [opneFilter, setOpenFilter] = useState<boolean>(false);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
//     setSearchValue(event.target.value);
//   };

//   const handleClick = (): void => {
//     setSearchValue('');
//   };

//   const filterFields: FilterField[] = [
//     { name: 'role', label: 'Role', type: 'select', options: ['Admin', 'Editor', 'Viewer'] },
//     { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] },
//     { name: 'name', label: 'Name', type: 'text' },
//   ];

//   const [filterValues, setFilterValues] = useState<Record<string, any>>({});

//   const handleApplyFilter = (filters: Record<string, any>) => {
//     setFilterValues(filters);
//     setOpenFilter(false);
//   };

//   const CustomFooter = () => {
//     const apiRef = useGridApiContext();

//     const selectedRows = useGridSelector(apiRef, gridRowSelectionStateSelector);
//     const selectedCount = selectedRows.length ?? Object.keys(selectedRows).length;

//     return (
//       <Box
//         sx={{
//           borderTop: '1px solid #ccc',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           flexWrap: 'wrap',
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: 2,
//             flexWrap: 'wrap',
//           }}
//         >
//           <Typography variant="body2">
//             Total Rows: {rows.length} | Selected: {selectedCount}
//           </Typography>

//           {selectedCount > 0 && (
//             <Box
//               display="flex"
//               gap={1}
//             >
//               <Button
//                 sx={{
//                   bgcolor: varAlpha(theme.vars.palette.grey['200Channel']),
//                   fontWeight: 400,
//                   '&:hover': {
//                     bgcolor: varAlpha(theme.vars.palette.grey['300Channel']),
//                   },
//                 }}
//                 startIcon={<Iconify icon="lucide:edit" />}
//               >
//                 Bulk Update
//               </Button>
//               <Button
//                 sx={{
//                   bgcolor: varAlpha(theme.vars.palette.grey['200Channel']),
//                   px: 2,
//                   fontWeight: 400,
//                   '&:hover': {
//                     bgcolor: varAlpha(theme.vars.palette.grey['300Channel']),
//                   },
//                 }}
//                 startIcon={<EmailIcon />}
//               >
//                 Send Email
//               </Button>
//               <Button
//                 variant="soft"
//                 color="error"
//                 sx={{ fontWeight: 400 }}
//                 startIcon={<DeleteIcon />}
//               >
//                 Delete
//               </Button>
//             </Box>
//           )}
//         </Box>

//         <GridPagination
//           sx={{
//             '&.MuiTablePagination-root': {
//               width: 'auto',
//             },
//           }}
//         />
//       </Box>
//     );
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', px: 1.5, pt: 2, width: '100%' }}>
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           mb: 2,
//           flexDirection: { xs: 'column', sm: 'row', md: 'row' },
//         }}
//       >
//         <FormControl>
//           <TextField
//             size="small"
//             variant="outlined"
//             placeholder="Search"
//             value={searchValue}
//             onChange={handleChange}
//             sx={{ bgcolor: theme.palette.background.paper }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//               endAdornment: searchValue && (
//                 <InputAdornment position="end" style={{ cursor: 'pointer' }} onClick={handleClick}>
//                   <ClearIcon />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </FormControl>

//         <Box
//           sx={{
//             display: 'flex',
//             gap: 1,
//             flexWrap: 'wrap',
//             mb: 1,
//           }}
//         >
//           <Button
//             variant="outlined"
//             sx={{ bgcolor: varAlpha(theme.vars.palette.grey['300Channel'], 0.32) }}
//             startIcon={<Iconify icon="material-symbols-light:view-column-2" />}
//           >
//             Columns
//           </Button>
//           <Button
//             variant="outlined"
//             sx={{ bgcolor: varAlpha(theme.vars.palette.grey['300Channel'], 0.32) }}
//             startIcon={<Iconify icon="uil:import" />}
//           >
//             Export
//           </Button>
//           <Button
//             variant="outlined"
//             sx={{ bgcolor: varAlpha(theme.vars.palette.grey['300Channel'], 0.32) }}
//             startIcon={<FilterListIcon />}
//             onClick={() => setOpenFilter(true)}
//           >
//             Filter
//           </Button>
//           <Button variant="contained" startIcon={<AddIcon />} color="primary">
//             Add New
//           </Button>
//         </Box>
//       </Box>

//       {/* <Box
//         sx={{
//           bgcolor: '#fdf5e8',
//           display: 'flex',
//           flexWrap: 'wrap',
//           py: 1,
//           px: 2,
//           alignItems: 'center',
//           justifyContent: 'space-between',
//         }}
//       >
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//           <Typography sx={{ fontSize: theme.typography.body2, fontWeight: 'bold' }}>
//             Applied Filter :
//           </Typography>
//           {filters.map((filter, index) => (
//             <Chip
//               key={index}
//               label={filter}
//               variant="outlined"
//               sx={{ borderStyle: 'dashed', borderRadius: '5px' }}
//             />
//           ))}
//         </Box>
//         <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
//           <Button
//             sx={{
//               fontSize: theme.typography.body2,
//               fontWeight: 'bold',
//               color: theme.palette.info.main,
//             }}
//             onClick={() => setOpenFilter(true)}
//           >
//             Edit
//           </Button>
//           <IconButton>
//             <ClearIcon color="error" sx={{ height: '22px' }} />
//           </IconButton>
//         </Box>
//       </Box> */}

//       {Object.values(filterValues).some((v) => v) && (
//         <Box
//           sx={{
//             bgcolor: '#fdf5e8',
//             display: 'flex',
//             flexWrap: 'wrap',
//             py: 1,
//             px: 2,
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}
//         >
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//             <Typography fontWeight="bold">Applied Filter :</Typography>

//             {Object.entries(filterValues)
//               .filter(([_, val]) => val)
//               .map(([key, val], idx) => (
//                 <Box
//                   key={idx}
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     border: '1px dashed #999',
//                     borderRadius: '5px',
//                     px: 1,
//                     py: 0.5,
//                     bgcolor: '#fdf5e8',
//                   }}
//                 >
//                   <Typography variant="body2" sx={{ mr: 0.5 }}>
//                     {key}:
//                   </Typography>
//                   <Typography variant="body2" fontWeight="bold" sx={{ mr: 1 }}>
//                     {val}
//                   </Typography>
//                   <IconButton
//                     size="small"
//                     onClick={() => {
//                       const newFilters = { ...filterValues };
//                       delete newFilters[key];
//                       setFilterValues(newFilters);
//                     }}
//                     sx={{ p: 0.3 }}
//                   >
//                     <ClearIcon sx={{ fontSize: 16, color: '#444' }} />
//                   </IconButton>
//                 </Box>
//               ))}
//           </Box>
//           <Box sx={{ display: 'flex', gap: 1 }}>
//             <Button
//               sx={{ fontWeight: 'bold', color: theme.palette.info.main }}
//               onClick={() => setOpenFilter(true)}
//             >
//               Edit
//             </Button>
//             <IconButton onClick={() => setFilterValues({})}>
//               <ClearIcon color="error" sx={{ height: '22px' }} />
//             </IconButton>
//           </Box>
//         </Box>
//       )}

//       <DataGrid
//         rows={rows}
//         columns={columns as GridColDef[]}
//         checkboxSelection
//         disableRowSelectionOnClick
//         paginationModel={{ pageSize: 20, page: 0 }}
//         pagination
//         pageSizeOptions={[10, 20, 50, 100]}
//         initialState={{
//           pagination: { paginationModel: { pageSize: 10, page: 0 } },
//         }}
//         rowSelectionModel={selectionModel}
//         onRowSelectionModelChange={(newModel) => {
//           setSelectionModel(newModel);
//         }}
//         slots={{
//           footer: CustomFooter,
//         }}
//         sx={{ fontSize: 14, minHeight: 'auto', overflow: 'auto' }}
//       />

//       <DynamicFilterDrawer
//         open={opneFilter}
//         fields={filterFields}
//         defaultValues={filterValues}
//         onApply={handleApplyFilter}
//         onClose={() => setOpenFilter(false)}
//       />
//     </Box>
//   );
// };

// export default DynamicTable;

import type { GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';

import axios from 'axios';
import { useState, useEffect } from 'react';

import { Box } from '@mui/material';
import {
  DataGrid,
  GridPagination,
  useGridSelector,
  useGridApiContext,
  gridRowSelectionStateSelector,
} from '@mui/x-data-grid';

import FooterAction from './CustomFooter';
import { dataGridStyles } from './Styles';
import CustomToolbar from './CustomToolbar';
import DynamicFilterDrawer from './DynamicFilterDrawer';

import type { List, StaffData, FilterField } from './types';

const DynamicTable = () => {
  const [rows, setRows] = useState<StaffData[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [opneFilter, setOpenFilter] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [pageOffset, setPageOffset] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(20);
  const [filterValues, setFilterValues] = useState<Record<string, any>>({});

  const columns: GridColDef<List>[] = [
    {
      field: 'courseName',
      headerName: 'Course',
      filterable: true,
      flex: 1,
      minWidth: 180,
      renderCell: (params) => (
        <span style={{ color: '#3598dc' }}>
          {params.row.courseName ? params.row.courseName : ''}
        </span>
      ),
    },
    {
      field: 'specializationName',
      headerName: 'Name',
      filterable: true,
      flex: 1,
      minWidth: 180,
      renderCell: (params) => (
        <span>{params.row.specializationName ? params.row.specializationName : ''}</span>
      ),
    },
    {
      field: 'specializationShortName',
      headerName: 'Short Name',
      filterable: true,
      flex: 1,
      minWidth: 120,
      renderCell: (params) => (
        <span>{params.row.specializationShortName ? params.row.specializationShortName : ''}</span>
      ),
    },
  ];

  const filterFields: FilterField[] = [
    { name: 'role', label: 'Role', type: 'select', options: ['Admin', 'Editor', 'Viewer'] },
    { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] },
    { name: 'name', label: 'Name', type: 'text' },
  ];

  const fetchData = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5143/api/Specialization/list',
        {
          pageOffset,
          pageSize,
          filters: filterValues,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJpZCI6IjEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoie1wiZW1haWxcIjpcImFkbWluQGxvY2FsaG9zdC5jb21cIixcInJvbGVJZFwiOlwiMVwiLFwiYWRtaXNzaW9uWWVhcklkXCI6XCIxXCIsXCJwYXRoXCI6XCIvYWRtaW5wYW5lbC9wYXltZW50U3RhdGlzdGljc1wiLFwiZGlzcGxheU5hbWVcIjpcIkFkbWluXCJ9IiwiZXhwIjoxNzUxNzA2NjIxLCJpc3MiOiJodHRwczovL3d3dy5nbndlYnNvZnQuY29tLyIsImF1ZCI6Imh0dHBzOi8vd3d3Lmdud2Vic29mdC5jb20vIn0.MR7ePAaQs00DvMGqG1s0Fqy2DD0N7pJFWsSIPHdTZpM`,
          },
        }
      );

      const { data, total } = response.data;
      setRows(data);
      setTotalCount(total);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageOffset, pageSize, filterValues]);

  const handleApplyFilter = (filters: Record<string, any>) => {
    setFilterValues(filters);
    setOpenFilter(false);
  };

  const CustomFooter = () => {
    const apiRef = useGridApiContext();

    const selectedRows = useGridSelector(apiRef, gridRowSelectionStateSelector);
    const selectedCount = selectedRows.length ?? Object.keys(selectedRows).length;

    return (
      <Box
        sx={{
          borderTop: '1px solid #ccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          pt: { xs: '20px', sm: '20px', md: 0, lg: 0 },
        }}
      >
        <FooterAction selectedCount={selectedCount} total={totalCount} />

        <GridPagination
          sx={{
            '&.MuiTablePagination-root': {
              width: 'auto',
            },
          }}
        />
      </Box>
    );
  };


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', px: 1.5, pt: 2, width: '100%' }}>
      <DataGrid
        rows={rows}
        rowCount={totalCount}
        columns={columns as GridColDef[]}
        checkboxSelection
        disableRowSelectionOnClick
        pagination
        getRowId={(row) => row.specializationID}
        paginationModel={{
          page: pageOffset,
          pageSize,
        }}
        paginationMode="server"
        sortingMode="server"
        pageSizeOptions={[10, 20, 30, 40, 50, 100]}
        onPaginationModelChange={(newModel) => {
          setPageOffset(newModel.page);
          setPageSize(newModel.pageSize);
        }}
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={(newModel) => {
          setSelectionModel(newModel);
        }}
        slots={{
          toolbar: () => (
            <CustomToolbar
              onOpenFilter={() => setOpenFilter(true)}
              onAddNew={() => console.log('Redirect to add form')}
              filterValues={filterValues}
              setFilterValues={setFilterValues}
            />
          ),
          footer: CustomFooter,
        }}
        sx={{
          ...dataGridStyles,
          fontSize: 14,
          minHeight: 'auto',
          overflow: 'auto',
          '.MuiDataGrid-cell': {
            display: 'flex',
            alignItems: 'center',
          },
        }}
      />

      <DynamicFilterDrawer
        open={opneFilter}
        fields={filterFields}
        defaultValues={filterValues}
        onApply={handleApplyFilter}
        onClose={() => setOpenFilter(false)}
      />
    </Box>
  );
};

export default DynamicTable;
