import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import theme from "@/styles/theme";

const RememberMeCheckbox = () => (
  <FormControlLabel
    control={
      <Checkbox
        sx={{
          color: "customColor.main",
          '&.Mui-checked': {
            color: theme.palette.secondary.main,
          },
        }}
      />
    }
    label={<Typography sx={{ textAlign: "left" }}>Remember Me</Typography>}
  />
);

export default RememberMeCheckbox;
