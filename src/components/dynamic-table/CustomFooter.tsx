import { varAlpha } from 'minimal-shared/utils';

import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, useTheme, Typography } from '@mui/material';

import { Iconify } from '../iconify';


interface Props {
  selectedCount: number;
  total: number;
}
const FooterAction = ({ selectedCount, total }: Props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        flexWrap: 'wrap',
        width: { xs: '100%', sm: '100%', md: 'auto', lg: 'auto' },
        justifyContent: {
          xs: 'space-between',
          sm: 'space-between',
          md: 'normal',
          lg: 'normal',
        },
      }}
    >
      <Typography variant="body2">
        Total Rows: {total} | Selected: {selectedCount}
      </Typography>
      {selectedCount > 0 && (
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: 'wrap',
          }}
        >
          <Button
            sx={{
              bgcolor: varAlpha(theme.vars.palette.grey['200Channel']),
              fontWeight: 400,
              '&:hover': {
                bgcolor: varAlpha(theme.vars.palette.grey['300Channel']),
              },
            }}
            startIcon={<Iconify icon="lucide:edit" />}
          >
            Bulk Update
          </Button>
          <Button
            sx={{
              bgcolor: varAlpha(theme.vars.palette.grey['200Channel']),
              px: 2,
              fontWeight: 400,
              '&:hover': {
                bgcolor: varAlpha(theme.vars.palette.grey['300Channel']),
              },
            }}
            startIcon={<EmailIcon />}
          >
            Send Email
          </Button>
          <Button variant="soft" color="error" sx={{ fontWeight: 400 }} startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Box>
      )}
    </Box>
  );
};
export default FooterAction;
