import Button from "@mui/material/Button";

export default function SecondaryButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Button variant="contained" color="secondary" onClick={onClick}>
      {children}
    </Button>
  );
}
