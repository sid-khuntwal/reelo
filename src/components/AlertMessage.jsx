import Snackbar from "@mui/material/Snackbar";
import { Alert, AlertTitle } from "@mui/material";

const AlertMesage = ({ open, setOpen, alertInfo }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={alertInfo.severity}
        elevation={6}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {alertInfo.title && <AlertTitle>{alertInfo.title}</AlertTitle>}
        {alertInfo.message}
      </Alert>
    </Snackbar>
  );
};

export default AlertMesage;
