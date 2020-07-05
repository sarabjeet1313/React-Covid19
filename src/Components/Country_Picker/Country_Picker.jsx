import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./Country_Picker.module.css";
import { countries } from "../../api";

const Country_Picker = ({ handleCountryChange }) => {
  const [countriesList, getCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      getCountries(await countries());
    };

    fetchCountries();
  }, [getCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {countriesList.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
        )
      </NativeSelect>
    </FormControl>
  );
};

export default Country_Picker;
