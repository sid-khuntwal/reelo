import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import headers from "../utils/headers";
import TableBodyData from "./TableBodyData";

const DataTable = (props) => {
  const { results, setResults } = props;
  const sortData = (key, order) => {
    const resultData = [...results];
    resultData.sort((a, b) => {
      if (a[key] === b[key]) {
        return 0;
      }
      return order === "ascending"
        ? a[key] < b[key]
          ? -1
          : 1
        : a[key] < b[key]
        ? 1
        : -1;
    });
    setResults(resultData);
  };

  return (
    <TableContainer component={Paper} sx={{ borderRadius: "20px" }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead stickyHeader>
          <TableRow>
            {headers.map((header) => (
              <TableCell
                key={header.key}
                sx={{ color: "black" }}
                align={header.key === "pl_name" ? "left" : "right"}
              >
                <Typography sx={{ fontWeight: "bold", mb: 0.5 }}>
                  {header.title}
                </Typography>
                <ArrowUpward
                  onClick={() => sortData(header.key, "ascending")}
                  sx={{
                    mr: 0.8,
                    cursor: "pointer",
                    fontSize: "20px",
                    borderRadius: "50%",
                    border: " 1px solid ",
                    "&:hover": {
                      color: "#fafafa",
                      borderColor: "black",
                      backgroundColor: "black",
                    },
                  }}
                />
                <ArrowDownward
                  onClick={() => sortData(header.key, "descending")}
                  sx={{
                    cursor: "pointer",
                    fontSize: "20px",
                    borderRadius: "50%",
                    border: " 1px solid ",
                    "&:hover": {
                      color: "#fafafa",
                      borderColor: "black",
                      backgroundColor: "black",
                    },
                  }}
                />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableBodyData results={results} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
