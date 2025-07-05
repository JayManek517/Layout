import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
  height: 'calc(100dvh - 160px)',
  display: 'flex',
  overflow: 'auto',
  backgroundColor: theme.palette.background.paper,
  borderRadius:'8px',
  [theme.breakpoints.down('lg')]: {
    height: 'calc(100dvh - 180px)',
  },
}));
