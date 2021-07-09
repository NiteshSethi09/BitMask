import {
  Paper,
  Grid,
  Box,
  makeStyles,
  Container,
  Button,
} from "@material-ui/core";
import { memo, useState } from "react";
import useDecimalToBinary from "../hooks/useDecimalToBinary";
import MenuItems from "./MenuItems";

const Lists = () => {
  const [convertFrom, setConvertFrom] = useState({ item: 0 });
  const [convertTo, setConvertTo] = useState({ item2: "" });
  const [variables] = useState(["Binary", "Decimal", "Octal", "Hexadecimal"]);
  const [textValue, setTextValue] = useState("");

  const [reminder, conversion] = useDecimalToBinary(textValue);

  const handleChange =
    (setter, set = null) =>
    (e) => {
      setter({
        ...set,
        [e.target.name]: e.target.value,
      });
    };
  const handleLabelChange = (setter) => (e) => {
    setter(e.target.value);
  };
  // useEffect(() => {
  //   console.log("reminderLists", reminder);
  // }, [reminder]);

  const useStyles = makeStyles((theme) => ({
    flexControl: {
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
      // background: "red",
    },
  }));
  const classes = useStyles();

  return (
    <Paper>
      <Container maxWidth="sm">
        <Box
          display="flex"
          justifyContent="space-around"
          className={classes.flexControl}
          p={1}
        >
          <Grid item xs={12} sm={4}>
            <div>
              <MenuItems
                labelId="demo-simple-select-label"
                label="Convert From"
                id="demo-simple-select"
                name="item"
                onChange={handleChange(setConvertFrom, convertFrom)}
                value={convertTo.item}
                iterator={variables}
                inputLabel="Conversion Number"
                labelValue={textValue}
                onLabelChange={handleLabelChange(setTextValue)}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <MenuItems
                labelId="demo-simple-select-label-02"
                label="Convert To"
                id="demo-simple-select"
                name="item2"
                onChange={handleChange(setConvertTo)}
                value={convertTo.item}
                iterator={variables.filter((va) => va !== convertFrom.item)}
                disabled={convertFrom.item === 0 || convertFrom.item === ""}
                readable={{
                  readOnly: true,
                }}
                inputLabel="Output"
                labelValue={reminder}
              />
            </div>
          </Grid>
        </Box>
        <Box display="flex" justifyContent="center" p={2}>
          <Button variant="contained" color="primary" onClick={conversion}>
            Convert
          </Button>
        </Box>
      </Container>
    </Paper>
  );
};

export default memo(Lists);
