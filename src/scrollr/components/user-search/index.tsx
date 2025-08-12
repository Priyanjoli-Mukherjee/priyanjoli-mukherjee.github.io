import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useMemo } from "react";

import { useCurrentUser } from "../../hooks/use-current-user";
import { useUsers } from "../../hooks/use-users";
import { User } from "../../types/user";
import { Props } from "./props";

export function UserSearch({ onChange, twitterHandle }: Props) {
  const users = useUsers();
  const currentUser = useCurrentUser();
  const selectedUser = useMemo(
    () => users.find((u) => u.twitterHandle === twitterHandle),
    [users],
  );

  const filteredUsers = useMemo(
    () =>
      users.filter(
        ({ twitterHandle }) => twitterHandle !== currentUser.twitterHandle,
      ),
    [currentUser, users],
  );

  return (
    <Autocomplete
      id="search-users"
      options={filteredUsers}
      sx={{ margin: 2, width: 200 }}
      value={selectedUser}
      getOptionLabel={(user: User) => user.name}
      renderInput={(params) => <TextField {...params} label="Search Users" />}
      onChange={(_, value) => onChange(value?.twitterHandle)}
    />
  );
}
