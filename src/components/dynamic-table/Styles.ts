import { varAlpha } from 'minimal-shared/utils';

import { Box, Button, styled } from '@mui/material';

export const dataGridStyles = {
  pt: '0px !important',
  '& .MuiDataGrid-row:hover': {
    cursor: 'pointer',
  },
  '.MuiTextField-root': {
    height: '1.5rem',
  },
  '.MuiOutlinedInput-root': {
    height: '2rem !important',
  },
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
};

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  paddingRight: '12px',
  paddingLeft: '12px',
  backgroundColor: varAlpha(theme.vars.palette.grey['200Channel']),
  fontWeight: 400,
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