import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import { memo } from "react";

const MenuItems = (props) => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 180,
      marginTop: theme.spacing(2),
      [theme.breakpoints.down("xs")]: {
        minWidth: "100%",
      },
    },
    muiMarginTop: {
      marginTop: theme.spacing(2),
      [theme.breakpoints.down("xs")]: {
        minWidth: "100%",
      },
    },
  }));
  // console.log(props.disabled);
  const classes = useStyles();
  return (
    // <Paper>
    <>
      <FormControl className={classes.formControl} disabled={props.disabled}>
        <InputLabel id={props.labelId}>{props.label}</InputLabel>
        <Select
          labelId={props.labelId}
          label={props.label}
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          defaultValue={0}
        >
          <MenuItem value={0}>Select</MenuItem>
          {props.iterator.map((va) => (
            <MenuItem key={va} value={va}>
              {va}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        InputProps={props.readable}
        className={classes.muiMarginTop}
        id="standard-required"
        label={props.inputLabel}
        value={props.labelValue}
        onChange={props.onLabelChange}
      />
    </>
    // </Paper>
  );
};

export default memo(MenuItems);
