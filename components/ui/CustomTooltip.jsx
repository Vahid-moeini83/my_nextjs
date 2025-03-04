import { Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

function CustomTooltip({ children, title, placement }) {
  return (
    <BootstrapTooltip title={title} placement={placement}>
      {children}
    </BootstrapTooltip>
  );
}

export default CustomTooltip;
