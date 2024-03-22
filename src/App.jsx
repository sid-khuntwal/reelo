import QueryPanel from "./components/QueryPanel";
import { Stack, Typography, Box } from "@mui/material";
import DataTable from "./components/DataTable";
import { useState } from "react";
import Fallback from "./components/Fallback";

function App() {
  const [results, setResults] = useState([]);
  return (
    <Stack
      sx={{
        height: "100vh",
        py: 2,
        px: 5,
        backgroundImage: `url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8fDA%3D&w=1000&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        mb={3}
        variant="h5"
        sx={{ textAlign: "center", fontWeight: "bold", color: "White" }}
      >
        NASA Exoplanet Query
      </Typography>

      <QueryPanel setResults={setResults} />
      {results.length ? (
        <DataTable results={results} setResults={setResults} />
      ) : (
        <Fallback />
      )}
    </Stack>
  );
}

export default App;
