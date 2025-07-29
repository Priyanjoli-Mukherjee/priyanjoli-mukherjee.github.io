import PersonOffIcon from "@mui/icons-material/PersonOff";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { getBadgeStyle } from "./get-badge-style";
import { getInitials } from "./get-initials";
import { Props } from "./props";

export function UserBadge({ isSelected, user, onClick }: Props) {
  return (
    <Box
      padding={0.25}
      borderRadius={15}
      border={`2px solid ${isSelected ? "blue" : "white"}`}
      title={user?.name ?? "Unassigned"}
    >
      <Box
        width={26}
        height={26}
        borderRadius={15}
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={onClick}
        sx={{ ...getBadgeStyle(user?.name), cursor: onClick && "pointer" }}
      >
        {user ? (
          <Typography variant="caption" style={{ fontSize: "x-small" }}>
            {getInitials(user.name)}
          </Typography>
        ) : (
          <PersonOffIcon color="disabled" fontSize="small" />
        )}
      </Box>
    </Box>
  );
}
