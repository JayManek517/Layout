import type {
  GridRowSelectionModel} from '@mui/x-data-grid';

import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Box, Menu, Button, useTheme, MenuItem, IconButton, Typography } from '@mui/material';
import {
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridToolbarColumnsButton
} from '@mui/x-data-grid';

import { Iconify } from '../iconify';
import { StyledButton, StyledButtonBox } from './Styles';

import type { StaffData } from './types';

interface CustomToolbarProps {
  onOpenFilter: (open: boolean) => void;
  onAddNew: () => void;
  onExport: () => void;
  filterValues: Record<string, any>;
  setFilterValues: (filters: Record<string, any>) => void;
  selectionModel: GridRowSelectionModel;
  setSelectionModel: React.Dispatch<React.SetStateAction<GridRowSelectionModel>>;
  rows: StaffData[];
}

const CustomToolbar = ({
  onOpenFilter,
  onAddNew,
  onExport,
  filterValues,
  setFilterValues,
  selectionModel,
  setSelectionModel,
  rows,
}: CustomToolbarProps) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectAll = () => {
    setSelectionModel(rows.map((r: any) => r.specializationID));
    handleClose();
  };

  const handleInvertSelection = () => {
    const allIds = rows.map((r: any) => r.specializationID);
    const inverted = allIds.filter((id: any) => !selectionModel.includes(id));
    setSelectionModel(inverted);
    handleClose();
  };

  const handleClear = () => {
    setSelectionModel([]);
    handleClose();
  };

  const handleOdd = () => {
    const odd = rows
      .filter((_: any, index: number) => index % 2 === 0)
      .map((r: any) => r.specializationID);
    setSelectionModel(odd);
    handleClose();
  };

  const handleEven = () => {
    const even = rows
      .filter((_: any, index: number) => index % 2 !== 0)
      .map((r: any) => r.specializationID);
    setSelectionModel(even);
    handleClose();
  };

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

        {selectionModel.length > 0 && (
          <>
            <StyledButton
              startIcon={<Iconify icon="fluent:row-triple-20-filled" />}
              onClick={handleClick}
            >
              Rows
            </StyledButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleSelectAll}>Select All</MenuItem>
              <MenuItem onClick={handleInvertSelection}>Invert Selection</MenuItem>
              <MenuItem onClick={handleClear}>Clear Selection</MenuItem>
              <MenuItem onClick={handleOdd}>Select Odd Rows</MenuItem>
              <MenuItem onClick={handleEven}>Select Even Rows</MenuItem>
            </Menu>
          </>
        )}

        <StyledButtonBox>
          <GridToolbarColumnsButton />
        </StyledButtonBox>

        <StyledButton startIcon={<Iconify icon="solar:export-bold" />} onClick={onExport}>
          Export
        </StyledButton>

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
