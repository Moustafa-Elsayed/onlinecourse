import { Box, Typography, Button, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import theme from "@/styles/theme";
import Image from "next/image";
export default function NotFound() {
  const router = useRouter();
  const handleGoHome = () => {
    router.push("/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        p: 3,
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* <Image
        src={NotFoundImage}
        alt="Not Found"
        width={100}
        height={100}
        style={{ marginBottom: "20px" }} // Adjust size and margin as needed
      /> */}
      <Typography variant="h1" sx={{ fontSize: "6rem", fontWeight: "bold" }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The page you are looking for might have been removed, or you may not
        have permission to access it.
      </Typography>
      <Typography variant="body2" sx={{ mb: 4 }}>
        If you think this is a mistake, please contact support.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome}>
        Go to Homepage
      </Button>
    </Box>
  );
}
