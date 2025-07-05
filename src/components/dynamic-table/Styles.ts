import { varAlpha } from 'minimal-shared/utils';

import { Box, Button, styled } from '@mui/material';

export const dataGridStyles = {
  pt: '0px !important',
  fontSize: 14,
  minHeight: 'auto',
  overflow: 'auto',
  '.MuiDataGrid-cell': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .MuiDataGrid-row:hover': {
    cursor: 'pointer',
  },
  '.MuiTextField-root': {
    height: '1.5rem',
  },
  // '.MuiOutlinedInput-root': {
  //   height: '2rem !important',
  // },
  '.MuiTextField-root input': {
    pt: '0px',
    pb: '0px',
    height: '1.3rem',
  },
  '.MuiTextField-root label': {
    top: '-4px',
  },
  '& .MuiDataGrid-toolbarContainer': {
    px: 0,
  },
  '& .MuiDataGrid-overlayWrapper': {
    height: '200px',
  },
  '& .MuiTablePagination-selectLabel': {
    display: 'block',
  },
  '& .MuiTablePagination-input': {
    display: 'inline-flex',
  },

  '& .MuiDataGrid-toolbarQuickFilter .MuiOutlinedInput-root': {
    height: '2rem',
    minHeight: '2rem',
    alignItems: 'center',
  },
  '& .MuiDataGrid-toolbarQuickFilter input': {
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    height: '1.3rem',
  },
  '& .MuiDataGrid-toolbarQuickFilter label': {
    top: '-4px',
  },
};

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  paddingRight: '15px',
  paddingLeft: '15px',
  backgroundColor: varAlpha(theme.vars.palette.grey['200Channel']),
  fontWeight: 600,
  '&:hover': {
    backgroundColor: varAlpha(theme.vars.palette.grey['300Channel']),
  },
}));

export const StyledButtonBox = styled(Box)(({ theme }) => ({
  borderRadius: '8px',
  padding: '2.4px 12px',
  backgroundColor: varAlpha(theme.vars.palette.grey['200Channel']),
  fontWeight: 400,
  '&:hover': {
    backgroundColor: varAlpha(theme.vars.palette.grey['300Channel']),
  },
}));

export const StyledFooterBox = styled(Box)(({ theme }) => ({
  borderTop: '1px solid #ccc',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  paddingTop: theme.spacing(0),

  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(2.5),
  },
}));
