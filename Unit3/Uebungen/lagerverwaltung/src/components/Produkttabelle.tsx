import { produkte } from '.././data/mockData'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Box from '@mui/material/Box'


const columns: GridColDef<(typeof produkte)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'artikelnummer',
    headerName: 'Artikelnummer',
    type: 'string',
    width: 140,
  },
  {
    field: 'name',
    headerName: 'Name',
    type: 'string',
    width: 150,
  },
  {
    field: 'kategorie',
    headerName: 'Kategorie',
    type: 'string',
    width: 100,
  },
  {
    field: 'lagerbestand',
    headerName: 'Lagerbestand',
    type: 'number',
    width: 100,
  },
  {
    field: 'mindestbestand',
    headerName: 'Mindestbestand',
    type: 'number',
    width: 110,
  },
  {
    field: 'einheit',
    headerName: 'Einheit',
    type: 'string',
    width: 70,
  },
  {
    field: 'preis',
    headerName: 'Preis',
    type: 'number',
    width: 80,
  },
  {
    field: 'lieferant',
    headerName: 'Lieferant',
    type: 'string',
    width: 130,
  },
  {
    field: 'standort',
    headerName: 'Standort',
    type: 'string',
    width: 80,
  },
];

export default function Tabelle() {
  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={produkte}
        columns={columns}
        getRowClassName={(params) =>
          params.row.lagerbestand < params.row.mindestbestand
            ? 'row-low-stock'
            : ''
        }
        sx={{
          '& .row-low-stock': {
            backgroundColor: 'rgba(244, 67, 54, 0.08)',
          },
          '& .row-low-stock:hover': {
            backgroundColor: 'rgba(244, 67, 54, 0.14)',
          },
          '& .row-low-stock.Mui-selected': {
            backgroundColor: 'rgba(244, 67, 54, 0.20)',
          },
          '& .row-low-stock.Mui-selected:hover': {
            backgroundColor: 'rgba(244, 67, 54, 0.26)',
          },
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10, 25, 50]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}
