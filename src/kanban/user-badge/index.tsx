import { Box, Typography } from "@mui/material";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import { getBadgeStyle } from "./get-badge-style";
import { getInitials } from "./get-initials";
import { Props } from "./props";

export function UserBadge({ isSelected, user, onClick }: Props) {
  return (
    <Box
      marginLeft={1}
      padding={0.25}
      borderRadius={15}
      border={`2px solid ${isSelected ? "blue" : "white"}`}
    >
      <Box
        width={26}
        height={26}
        borderRadius={15}
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ ...getBadgeStyle(user?.name), cursor: onClick && "pointer" }}
        onClick={onClick}
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
