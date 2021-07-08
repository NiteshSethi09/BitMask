import { Paper, Grid, Box, makeStyles, Container } from "@material-ui/core";
import { memo, useState } from "react";
import MenuItems from "./MenuItems";

const Lists = () => {
  const [val, setVal] = useState({ item: 0 });
  const [val2, setVal2] = useState({ item2: "" });
  const [variables] = useState(["Binary", "decimal", "Octal", "Hexadecimal"]);

  const handleChange =
    (setter, set = null) =>
    (e) => {
      setter({
        ...set,
        [e.target.name]: e.target.value,
      });
    };

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
                onChange={handleChange(setVal, val)}
                value={val2.item}
                iterator={variables}
                inputLabel="Conversion Number"
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
                onChange={handleChange(setVal2, val2)}
                value={val2.item}
                iterator={variables.filter((va) => va !== val.item)}
                disabled={val.item === 0 || val.item === ""}
                readable={{
                  readOnly: true,
                }}
                inputLabel="Output"
              />
            </div>
          </Grid>
        </Box>
      </Container>
    </Paper>
  );
};

export default memo(Lists);
