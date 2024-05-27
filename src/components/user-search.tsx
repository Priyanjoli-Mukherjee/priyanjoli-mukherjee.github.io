import { useUsers } from "../hooks/use-users";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { User } from "../types/user";
import { useMemo } from "react";

interface Props {
  twitterHandle?: string;
  onChange(twitterHandle?: string): void;
}

export function UserSearch({ onChange, twitterHandle }: Props) {
  const users = useUsers();
  const selectedUser = useMemo(
    () => users.find((u) => u.twitterHandle === twitterHandle),
    [users],
  );

  return (
    <Autocomplete
      id="search-users"
      options={users}
      sx={{ margin: 2, width: 200 }}
      value={selectedUser}
      getOptionLabel={(user: User) => user.name}
      renderInput={(params) => <TextField {...params} label="Search Users" />}
      onChange={(evt, value) => onChange(value?.twitterHandle)}
    />
  );
}
