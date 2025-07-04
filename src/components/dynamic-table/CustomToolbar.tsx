// import type { ReactElement } from 'react';
// import type { SxProps} from '@mui/material';

// import AddIcon from '@mui/icons-material/Add';
// import ManageSearchIcon from '@mui/icons-material/ManageSearch';
// import { Box, Button, Divider, useTheme, Typography } from '@mui/material';
// import {
//   GridToolbarExport,
//   GridToolbarContainer,
//   GridToolbarQuickFilter,
//   GridToolbarColumnsButton,
// } from '@mui/x-data-grid'

// const CustomToolbar = ({
//   rowCount,
//   onCreateClick,
//   title,
//   createSx,
//   titleSx,
//   icon,
// }: {
//   rowCount: number;
//   onCreateClick: () => void;
//   title?: string;
//   createSx?: SxProps;
//   titleSx?: SxProps;
//   icon?: ReactElement;
// }) => {
//   const theme = useTheme();

//   return (
//     <GridToolbarContainer
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         width: '100%',
//         alignItems: 'normal',
//         p: 0,
//       }}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           mt: 1,
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: 1,
//             flexWrap: 'wrap',
//           }}
//         >
//           {icon ? (
//             icon
//           ) : (
//             <ManageSearchIcon sx={{ color: theme.palette.text.secondary, height: '2rem' }} />
//           )}
//           <Typography
//             variant="h6"
//             sx={{
//               ...titleSx,
//               color: theme.palette.text.secondary,
//               fontWeight: 'bold',
//             }}
//           >
//             {title ? title : 'List'} ({rowCount})
//           </Typography>
//         </Box>

//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: 1,
//             flexWrap: 'wrap',
//           }}
//         >
//           <GridToolbarQuickFilter
//             sx={{
//               '& .MuiInputBase-root': {
//                 borderRadius: '8px',
//                 padding: '6px 10px',
//               },
//               '& input': {
//                 fontSize: '14px',
//                 color: '#333',
//               },
//               '.MuiOutlinedInput-notchedOutline': {
//                 borderRadius: '8px',
//               },
//             }}
//           />
//           <Button
//             variant="outlined"
//             color="inherit"
//             sx={{
//               fontSize: '0.875rem',
//               display: 'flex',
//               alignItems: 'center',
//               height: '2.4rem',
//             }}
//           >
//             <GridToolbarColumnsButton />
//           </Button>

//           <Button
//             variant="outlined"
//             color="inherit"
//             sx={{
//               fontSize: '0.875rem',
//               display: 'flex',
//               alignItems: 'center',
//               height: '2.4rem',
//             }}
//           >
//             <GridToolbarExport />
//           </Button>

//           <Button
//             startIcon={<AddIcon />}
//             onClick={onCreateClick}
//             variant="contained"
//             color="info"
//             sx={{
//               ...createSx,
//               fontSize: '0.875rem',
//               display: 'flex',
//               alignItems: 'center',
//               height: '2.4rem',
//             }}
//           >
//             Create
//           </Button>
//         </Box>
//       </Box>
//       <Divider sx={{ mb: 2 }} />
//     </GridToolbarContainer>
//   );
// };

// export default CustomToolbar;


import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Box, Button, useTheme, IconButton, Typography } from '@mui/material';
import {
  GridToolbarExport,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridToolbarColumnsButton,
} from '@mui/x-data-grid';

import { StyledButton, StyledButtonBox } from './Styles';

interface CustomToolbarProps {
  onOpenFilter: (open: boolean) => void;
  onAddNew: () => void;
  filterValues: Record<string, any>;
  setFilterValues: (filters: Record<string, any>) => void;
}

const CustomToolbar = ({
  onOpenFilter,
  onAddNew,
  filterValues,
  setFilterValues,
}: CustomToolbarProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <GridToolbarContainer
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 1.5,
          py: 1,
          px: 2,
          flexWrap: 'wrap',
        }}
      >
        <GridToolbarQuickFilter
          sx={{
            '& .MuiInputBase-root': {
              borderRadius: '8px',
              padding: '6px 10px',
            },
            '& input': {
              fontSize: '14px',
              color: '#333',
            },
            '.MuiOutlinedInput-notchedOutline': {
              borderRadius: '8px',
            },
            '&.MuiTextField-root': {
              height: '2rem !important',
            },
          }}
        />
        <Box sx={{ flexGrow: 1 }} />

        {/* <Box
          sx={{
            borderRadius: 1,
            px: 1.5,
            py: 0.3,
            bgcolor: varAlpha(theme.vars.palette.grey['200Channel']),
            fontWeight: 400,
            '&:hover': {
              bgcolor: varAlpha(theme.vars.palette.grey['300Channel']),
            },
          }}
        >
          <GridToolbarColumnsButton />
        </Box> */}

        <StyledButtonBox>
          <GridToolbarColumnsButton />
        </StyledButtonBox>

        <StyledButtonBox>
          <GridToolbarExport />
        </StyledButtonBox>

        <StyledButton startIcon={<FilterListIcon />} onClick={() => onOpenFilter(false)}>
          Filter
        </StyledButton>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          color="primary"
          sx={{ textTransform: 'none', fontSize: 14 }}
          onClick={onAddNew}
        >
          Add New
        </Button>
      </GridToolbarContainer>

      {Object.values(filterValues).some((v) => v) && (
        <Box
          sx={{
            bgcolor: '#fdf5e8',
            display: 'flex',
            flexWrap: 'wrap',
            py: 1,
            px: 2,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography fontWeight="bold">Applied Filter :</Typography>

            {Object.entries(filterValues)
              .filter(([_, val]) => val)
              .map(([key, val], idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px dashed #999',
                    borderRadius: '5px',
                    px: 1,
                    py: 0.5,
                    bgcolor: '#fdf5e8',
                  }}
                >
                  <Typography variant="body2" sx={{ mr: 0.5 }}>
                    {key}:
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" sx={{ mr: 1 }}>
                    {val}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => {
                      const newFilters = { ...filterValues };
                      delete newFilters[key];
                      setFilterValues(newFilters);
                    }}
                    sx={{ p: 0.3 }}
                  >
                    <ClearIcon sx={{ fontSize: 16, color: '#444' }} />
                  </IconButton>
                </Box>
              ))}
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              sx={{ fontWeight: 'bold', color: theme.palette.info.main }}
              onClick={() => onOpenFilter(true)}
            >
              Edit
            </Button>
            <IconButton onClick={() => setFilterValues({})}>
              <ClearIcon color="error" sx={{ height: '22px' }} />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};
export default CustomToolbar;
