import React, { useState, useEffect } from 'react';

import {
  Box,
  Button,
  Drawer,
  Divider,
  MenuItem,
  useTheme,
  TextField,
  Typography,
} from '@mui/material';

import { Scrollbar } from '../scrollbar';

type FilterField = {
  label: string;
  name: string;
  type: 'text' | 'select';
  options?: string[];
};

interface Props {
  open: boolean;
  fields: FilterField[];
  defaultValues: Record<string, any>;
  onApply: (filters: Record<string, any>) => void;
  onClose: () => void;
}

const DynamicFilterDrawer: React.FC<Props> = ({
  open,
  fields,
  defaultValues,
  onApply,
  onClose,
}) => {
  const theme = useTheme();

  const [values, setValues] = useState<Record<string, any>>(defaultValues || {});

  useEffect(() => {
    setValues(defaultValues);
  }, [defaultValues]);

  const handleChange = (name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    const cleared = Object.fromEntries(fields.map((f) => [f.name, '']));
    setValues(cleared);
  };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="right"
      slotProps={{ backdrop: { invisible: true } }}
      PaperProps={{ sx: { width: 420 } }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ fontSize: theme.typography.h6, fontWeight: 'bold' }}>Filter</Typography>
        <Button color="info" onClick={handleClear}>
          Clear All
        </Button>
      </Box>

      <Divider sx={{ bgcolor: theme.palette.divider, mx: 2 }} />

      <Scrollbar>
        <Box
          sx={{
            p: 2,
            gap: 2,
            flexWrap: 'wrap',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {fields.map((field) => (
            <Box key={field.name}>
              {field.type === 'select' ? (
                <TextField
                  fullWidth
                  select
                  value={values[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  size="small"
                  label={field.label}
                >
                  {field.options?.map((opt) => (
                    <MenuItem key={opt} value={opt}>
                      {opt}
                    </MenuItem>
                  ))}
                </TextField>
              ) : (
                <TextField
                  fullWidth
                  size="small"
                  label="Name"
                  value={values[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                />
              )}
            </Box>
          ))}
        </Box>
      </Scrollbar>

      <Box sx={{ display: 'flex', pt: 2 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{ bgcolor: theme.palette.info.dark, borderRadius: 0 }}
          onClick={() => onApply(values)}
        >
          Apply
        </Button>
        <Button variant="soft" fullWidth color="inherit" sx={{ borderRadius: 0 }} onClick={onClose}>
          Cancel
        </Button>
      </Box>
    </Drawer>
  );
};

export default DynamicFilterDrawer;
