import { Button } from "@mui/material";
import inputs from "../utils/inputs";
import { useState } from "react";
import AlertMesage from "./AlertMessage";

const SearchButton = (props) => {
  const { input, setResults, planetData } = props;
  const [open, setOpen] = useState(false);
  const [alertInfo, setAlertInfo] = useState({});

  const getQueryKeys = () => {
    const inputKeys = inputs.map((item) => item.name);
    const queryKeys = [];
    for (const key of inputKeys) {
      if (input[key]) queryKeys.push(key);
    }
    return queryKeys;
  };

  const handleSearch = () => {
    const queryKeys = getQueryKeys();
    if (!queryKeys.length) {
      setAlertInfo({
        title: "Empty Query",
        message: "Please select at least one option to query !",
        severity: "error",
      });
      setOpen(true);
      return;
    }
    const results = [];
    const hashSet = new Set();

    for (const item of planetData) {
      const matched = queryKeys.every((key) => item[key] === input[key].value);

      if (matched) {
        const id =
          item.pl_name +
          item.hostname +
          item.discoverymethod +
          item.disc_year +
          item.disc_facility;
        if (!hashSet.has(id)) {
          hashSet.add(id);
          results.push({
            ...item,
            id,
          });
        }
      }
    }
    setResults(results);
    if (results.length === 0) {
      setOpen(true);
      setAlertInfo({
        message: "No matches found for your query",
        severity: "warning",
      });
    }
  };

  return (
    <>
      <Button
        onClick={handleSearch}
        sx={{ width: "100px", height: "40px", textTransform: "none" }}
        variant="contained"
      >
        Search
      </Button>
      <AlertMesage open={open} setOpen={setOpen} alertInfo={alertInfo} />
    </>
  );
};

export default SearchButton;
