import { useState } from "react";

const { convert } = require("./commonModule");
const useDecimalToBinary = (input) => {
  let regex = new RegExp("^[0-9]+$");
  let reminder = [];
  const [value, setValue] = useState(0);

  const conversion = () => {
    if (!input.match(regex)) {
      throw new Error("Entered number isn't in Decimal format.");
    }
    const { reminder: rem } = convert(input);

    reminder = rem.reverse().join("");
    while (reminder.length < 4) {
      reminder = `0${reminder}`;
    }
    console.log("reminder", reminder);
    setValue(reminder);
  };
  return [value, conversion];
};

export default useDecimalToBinary;
