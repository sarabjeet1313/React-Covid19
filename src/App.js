import React, { Component } from "react";

import { Cards, Chart, Country_Picker } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import coronaImage from "./images/covid191.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country });
    // this.setState({ country });
  };

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID 19" />
        <Cards data={this.state.data} />
        <Country_Picker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
