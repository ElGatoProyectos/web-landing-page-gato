import Select, { StylesConfig } from "react-select";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface SelectFieldProps {
  id: string;
  defaultValue?: string;
  isDisabled?: boolean;
  register?: any;
  error?: any;
}

interface Country {
  name: string;
  code: string;
}

const CountrySelect: React.FC<SelectFieldProps> = ({
  id,
  register,
  error,
  defaultValue = "",
  isDisabled = false,
}) => {
  const [codes, setCodes] = useState<Country[]>([]);
  const fetchCountries = async () => {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/Desarrollo2Gato/countries/main/data.json"
      );
      let countryData: Country[] = response.data.map((country: any) => ({
        name: country.country,
        code: country.calling_code,
      }));
      countryData = countryData.sort((a, b) => a.name.localeCompare(b.name));
      setCodes(countryData);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const options = codes.map((country) => ({
    value: country.code,
    label: `(${country.code}) ${country.name}`,
  }));

  const customStyles: StylesConfig<{ value: string; label: string }, false> = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "8px",
      fontSize: "16px",
      color: "#666",
      backgroundColor: state.isFocused ? "white" : "transparent",
      borderColor: error ? "#4608AD" : "#EEEEEE",
      boxShadow: state.isFocused
        ? error
          ? "0 0 0 1px #f20707"
          : "0 0 0 1px #4608AD"
        : "none",
      "&:hover": {
        borderColor: state.isFocused
          ? error
            ? "#f20707"
            : "#4608AD"
          : "#EEEEEE",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#bbb",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#666",
    }),
  };

  return (
    <div className="w-full text-stone-800 mb-3">
      <Select
        instanceId="country_code_select"
        inputId={id}
        defaultValue={options.find((opt) => opt.value === defaultValue)}
        options={options}
        styles={customStyles}
        placeholder="seleccione..."
        isDisabled={isDisabled}
        onChange={(selectedOption) => {
          if (register) {
            register.onChange({
              target: {
                name: register.name,
                value: selectedOption?.value,
              },
            });
          }
        }}
        onBlur={register?.onBlur}
      />
    </div>
  );
};

export default CountrySelect;
