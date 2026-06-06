import Chip from '@mui/material/Chip';

export default function StatusChip({ status }: { status: string }) {
  if (status === 'kritisch') {
    return (
      <Chip
        label="Kritisch"
        color="warning"
        variant="outlined"
        size="small"
      />
    );
  } else if (status === 'nicht-verfügbar') {
    return (
      <Chip
        label="Nicht verfügbar"
        color="error"
        variant="filled"
        size="small"
      />
    );
  } else if (status === 'aktiv') {
    return (
      <Chip
        label="Aktiv"
        color="success"
        variant="filled"
        size="small"
      />
    );
  } else {
    return null; // Kein Chip für unbekannten Status
  }
}