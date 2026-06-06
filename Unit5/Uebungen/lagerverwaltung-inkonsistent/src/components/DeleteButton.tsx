import Button from "@mui/material/Button";

export default function DeleteButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Button variant="contained" color="error" onClick={onClick}>
      {children}
    </Button>
  );
}
