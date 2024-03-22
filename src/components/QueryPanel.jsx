import { Stack } from "@mui/material";
import InputList from "./InputList";
import { useState } from "react";
import SearchButton from "./SearchButton";
import ClearButton from "./ClearButton";
import planetData from "../utils/planet_data.json";

const QueryPanel = ({ setResults }) => {
  const [input, setInput] = useState({
    hostname: "",
    discoverymethod: "",
    disc_year: "",
    disc_facility: "",
  });

  return (
    <Stack
      mb={5}
      sx={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "18px",
      }}
    >
      <InputList planetData={planetData} input={input} setInput={setInput} />
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ gap: "14px" }}
      >
        <SearchButton
          input={input}
          planetData={planetData}
          setResults={setResults}
        />
        <ClearButton setInput={setInput} setResults={setResults} />
      </Stack>
    </Stack>
  );
};

export default QueryPanel;
