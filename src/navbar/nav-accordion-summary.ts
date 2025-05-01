import { AccordionSummary, accordionSummaryClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const NavAccordionSummary = styled(AccordionSummary)({
  backgroundColor: "unset",
  boxShadow: "unset",
  flexDirection: "row-reverse",
  margin: 0,
  minHeight: 0,
  padding: 0,
  [`& .${accordionSummaryClasses.content}`]: {
    margin: 0,
  },
  [`& .${accordionSummaryClasses.content}.${accordionSummaryClasses.expanded}`]:
    {
      margin: 0,
    },
  [`&.${accordionSummaryClasses.expanded}`]: {
    minHeight: 0,
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
});
