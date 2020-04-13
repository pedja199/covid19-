import React from 'react';
import './App.css';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fatchData } from './api/index';

import coronaImg from './image/image.png';

class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fatchData();

    this.setState({ data: fetchedData })
  }

  handleCounrtyChange = async (country) => {
    const fetchedData = await fatchData(country);

    this.setState({ data: fetchedData, country: country })
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container} >
        <img src={coronaImg} className={styles.image} alt='COVID-19' />
        <Cards data={data} />
        <CountryPicker handleCounrtyChange={this.handleCounrtyChange} />
        <Chart data={data} country={country} />
      </div >
    );
  }

}

export default App;
