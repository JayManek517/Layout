import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
  height: 'calc(100dvh - 150px)',
  display: 'flex',
  overflow: 'auto',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down('lg')]: {
    height: 'calc(100dvh - 170px)',
  },
}));
