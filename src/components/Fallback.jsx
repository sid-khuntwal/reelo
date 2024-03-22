import { Stack, Typography } from "@mui/material";

const Fallback = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100%",
        border: "2px ",
        borderRadius: "20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography fontWeight="bold" fontSize={18} sx={{ mb: 1 }}>
        Exoplanets are planets outside the solar System
      </Typography>

      <Typography fontWeight="bold" fontSize={16}>
        Here you can query{" "}
        <span style={{ color: "rgb(70, 100, 255)" }}>
          NASA Exoplanet Archive
        </span>{" "}
        and find the one you love most.
      </Typography>
    </Stack>
  );
};

export default Fallback;
