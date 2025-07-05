import { useState } from 'react';
import { varAlpha } from 'minimal-shared/utils';

import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, useTheme, MenuItem, TextField, Typography } from '@mui/material';

import { Iconify } from '../iconify';

interface Props {
  selectedCount: number;
  total: number;
  onDelete: () => void
}
const FooterAction = ({ selectedCount, total, onDelete }: Props) => {
  const theme = useTheme();
  const [rowOption, setRowOption] = useState('');
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
          <Button variant="soft" color="error" sx={{ fontWeight: 400 }} startIcon={<DeleteIcon />} onClick={onDelete}>
            Delete
          </Button>
          <TextField
            select
            value={rowOption}
            onChange={(e) => setRowOption(e.target.value)}
            size="medium"
            label="Record Option"
            sx={{
              width: '10rem',
              '& .MuiOutlinedInput-root': {
                height: '2.4rem',
                paddingRight: '1rem',
              },
              '&.MuiTextField-root .MuiInputLabel-root': {
                top: '-7px',
              },
              '& .MuiSelect-select': {
                display: 'flex',
                alignItems: 'center',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
              },
            }}
          >
            <MenuItem value="all">Select all page rows</MenuItem>
            <MenuItem value="clear">Clear all page rows</MenuItem>
          </TextField>
        </Box>
      )}
    </Box>
  );
};
export default FooterAction;
