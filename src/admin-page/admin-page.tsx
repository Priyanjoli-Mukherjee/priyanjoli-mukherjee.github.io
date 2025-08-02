import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";

import { BASE_URL } from "../service/base-url";

export function AdminPage() {
  const [isLoading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <Box>
      <TextField
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <Button
        disabled={isLoading}
        onClick={async () => {
          setLoading(true);
          await axios.post(`${BASE_URL}/concerto-data`, password, {
            headers: {
              "Content-Type": "text/plain",
            },
          });
          setLoading(false);
        }}
      >
        Generate Concerto
        {isLoading && <CircularProgress />}
      </Button>
    </Box>
  );
}
