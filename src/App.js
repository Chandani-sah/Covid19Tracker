import React from "react";

import IndiaMap from "./components/IndiaMap/IndiaMap";

import { Cards, Chart, StatePicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import coronaImage from "./images/image.png";
import FlagImage from "./images/FlagImage.gif";

class App extends React.Component {
  state = {
    data: {},
    states: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleStateChange = async (states) => {
    const fetchedData = await fetchData(states);

    this.setState({ data: fetchedData, states: states });
  };

  render() {
    const { data, states } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <img className={styles.flagimage} src={FlagImage} alt="India" /> <br />
        <br />
        <br />
        <Cards data={data} />
        <br />
        <br />
        <StatePicker handleStateChange={this.handleStateChange} />
        <IndiaMap data={states ? data : null} />
        <Chart data={data} states={states} />
      </div>
    );
  }
}

export default App;
