import { Link, TableCell, TableRow } from "@mui/material";

const TableBodyData = ({ results }) => {
  return (
    <>
      {results.map((result) => (
        <TableRow
          key={result.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            <Link
              href={`https://exoplanetarchive.ipac.caltech.edu/overview/${result.pl_name}`}
              target="_blank"
              underline="hover"
            >
              {result.pl_name}
            </Link>
          </TableCell>
          <TableCell align="right">{result.hostname}</TableCell>
          <TableCell align="right">{result.discoverymethod}</TableCell>
          <TableCell align="right">{result.disc_year}</TableCell>
          <TableCell align="right">{result.disc_facility}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default TableBodyData;
