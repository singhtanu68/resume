import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import {main,portfolio,resume} from '../public/resumeData'
import Experience from './Components/Experience';
import Eduction from './Components/Education';


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
    return (
      <div className="App">
        <Header data={main} />
        <About data={this.state.resumeData.main} />
        <Skills data={this.state.resumeData.resume}  />
        <Experience data={this.state.resumeData.resume} />
        <Eduction data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Footer />
      </div>
    );
  }
}

export default App;
