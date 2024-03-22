import Select from "react-select";
import CustomMenuList from "./CustomMenuList";

const InputField = (props) => {

  const { label, options, input, setInput, name } = props;
  
  const handleChange = (selectedOption) => {
    setInput((prevInputs) => {
      return {
        ...prevInputs, 
        [name]: selectedOption
      }
    })
  };

  return (
    <div style={{ width: "220px", margin: "auto" }}>
      {options && (
        <Select
        value={input[name]}
          onChange={handleChange}
          options={options}
          components={{
            MenuList: CustomMenuList,
          }}
          placeholder={label}
        />
      )}
    </div>
  );
};

export default InputField;
