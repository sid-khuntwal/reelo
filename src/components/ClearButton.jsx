import { Clear } from "@mui/icons-material";
import { Button } from "@mui/material";

const ClearButton = ({ setInput, setResults }) => {
  const handleClearData = () => {
    setInput({
      hostname: "",
      discoverymethod: "",
      disc_year: "",
      disc_facility: "",
    });
    setResults([]);
  };

  return (
    <Button
      onClick={handleClearData}
      sx={{ width: "100px", height: "40px", textTransform: "none" }}
      variant="contained"
    >
      Clear
    </Button>
  );
};

export default ClearButton;
