import {
  Paper,
  Grid,
  Box,
  makeStyles,
  Container,
  Button,
} from "@material-ui/core";
import { memo, useState, useEffect } from "react";
import MenuItems from "./MenuItems";

const Lists = () => {
  const [convertFrom, setConvertFrom] = useState({ item: "" });
  const [convertTo, setConvertTo] = useState({ item2: "" });
  const [variables] = useState(["Binary", "Decimal", "Octal", "Hexadecimal"]);
  const [textValue, setTextValue] = useState("");
  const [err, setErr] = useState("");
  const [ans, setAns] = useState("");

  const switchBase = (convert) => {
    let base
    switch (convert) {
      case "Binary":
        base = 2;
        break;
      case "Octal":
        base = 8;
        break;
      case "Decimal":
        base = 10;
        break;
      case "Hexadecimal":
        base = 16;
        break;
      default:
        base=0;
        break;
    }
    return base;
  }
  const conversion = () => {
    let base1;
    let base2;
    base1 = switchBase(convertFrom.item)
    console.log(base1);
    const val = parseInt(textValue,base1)
    if(!val) return setErr(`Entered number isn't in ${convertFrom.item} form. Please correct it.`)
    else setErr("")
    base2 = switchBase(convertTo.item2)
    console.log(base2);

    setAns(val.toString(base2))
  }

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

  useEffect(()=> { 
    if(err) alert(err); 
    setErr(""); 
  }, [err])

  const useStyles = makeStyles((theme) => ({
    flexControl: {
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
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
                value={convertFrom.item}
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
                value={convertTo.item2}
                iterator={variables.filter((va) => va !== convertFrom.item)}
                disabled={convertFrom.item === 0 || convertFrom.item === ""}
                readable={{
                  readOnly: true,
                }}
                inputLabel="Output"
                labelValue={ans}
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
