import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import {main,portfolio,resume} from '../public/resumeData'


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      
      resumeData:{
        main: main,
        portfolio: portfolio,
        resume: resume,
      }
    }
  }




  render() {
    console.log(portfolio);
    return (
      <div className="App">
        <Header data={main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Footer />
      </div>
    );
  }
}

export default App;
