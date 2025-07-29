import { ChangeEvent, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { NumberField } from "../../styles/number-field";
import { Props } from "./props";

export function CheckoutDrawer({ artist, event, onCancel, onSubmit }: Props) {
  const { title, tickets } = event;
  const { name } = artist;
  const [quantityByTicketId, setQuantityByTicketId] = useState<
    Record<string, number>
  >({});
  const totalPrice = useMemo(
    () =>
      tickets.reduce(
        (sum, ticket) =>
          sum + ticket.price * (quantityByTicketId[ticket.id] ?? 0),
        0,
      ),
    [tickets, quantityByTicketId],
  );

  return (
    <Drawer open anchor="left" onClose={onCancel}>
      <Box
        width={400}
        height="100%"
        padding={5}
        display="flex"
        flexDirection="column"
      >
        <Typography variant="h5">Purchase Tickets</Typography>
        <Typography variant="h6">{`${name}: ${title.toUpperCase()}`}</Typography>
        <Box
          display="flex"
          flex="1 1"
          flexDirection="column"
          overflow="auto"
          padding={1}
        >
          {tickets.map(({ amountAvailable, id, price, seatGroup }, index) => (
            <Box
              borderBottom={
                index === tickets.length - 1 ? "unset" : "1px solid lightgrey"
              }
              display="flex"
              key={id}
              justifyContent="space-between"
              marginBottom={1}
              paddingBottom={1}
            >
              <Box>
                <Typography variant="body1">{seatGroup}</Typography>
                <Typography variant="caption">{`${amountAvailable} seats available`}</Typography>
              </Box>
              <Box alignItems="center" display="flex" height="fit-content">
                <Typography variant="body1">{`$${price}`}</Typography>
                <Typography
                  variant="body1"
                  sx={{ marginLeft: 1, marginRight: 1 }}
                >
                  &times;
                </Typography>
                <NumberField
                  size="small"
                  type="number"
                  value={quantityByTicketId[id] ?? 0}
                  onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                    const num = parseInt(evt.target.value);
                    if (!isNaN(num) && num >= 0) {
                      setQuantityByTicketId({
                        ...quantityByTicketId,
                        [id]: num,
                      });
                    }
                  }}
                  sx={{
                    color: "black",
                    colorScheme: "black",
                    height: "fit-content",
                    width: 75,
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
          marginBottom={1}
          marginTop={1}
        >
          <Typography variant="h5">{`Total: $${totalPrice}`}</Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            onClick={onCancel}
            sx={{
              backgroundColor: "lightgrey",
              color: "black",
              marginRight: 1,
              "&:hover": { backgroundColor: "grey" },
            }}
          >
            Cancel
          </Button>
          <Button
            disabled={totalPrice === 0}
            variant="contained"
            onClick={onSubmit}
            sx={{ backgroundColor: "#003399" }}
          >
            Purchase
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
