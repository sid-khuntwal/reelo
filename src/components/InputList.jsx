import { Stack } from "@mui/material";
import InputField from "./InputField";
import inputs from "../utils/inputs";

const InputList = (props) => {
  const { input, setInput, planetData } = props;

  const getOptions = (key) => {
    const hashSet = new Set();
    const options = [];

    for (const item of planetData) {
      const value = item[key];
      if (value && !hashSet.has(value)) {
        hashSet.add(value);
        options.push({ value, label: value });
      }
    }

    return options;
  };

  return (
    <Stack sx={{ flexDirection: "row", flexWrap: "wrap", gap: "16px" }}>
      {planetData &&
        inputs.map((item, i) => (
          <InputField
            key={i}
            label={item.label}
            options={getOptions(item.name)}
            name={item.name}
            input={input}
            setInput={setInput}
          />
        ))}
    </Stack>
  );
};

export default InputList;
