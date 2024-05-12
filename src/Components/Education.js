import React, { Component } from 'react'

export default class Eduction extends Component {
  render() {
    if(this.props.data){
        var education = this.props.data.education.map(function(edu){
          return <div key={edu.school} className="row item">
             <div className="twelve columns">
                <h3>{edu.school}</h3>
                <p className="info">{edu.degree}{(edu.degree==='10'||edu.degree ==='12')&&<sup>th</sup>} <span>&bull;</span> <em className="date">{edu.graduated}</em></p>
                <p>
                  {edu.description}
                </p>
             </div>
          </div>
        });
    }
    return (
        <section id="education">
        {/* <div className="row education"> */}
           <div className="three columns header-col">
              <h1><span>Education</span></h1>
           </div>
  
           <div className="nine columns main-col">
              {education}
           </div>
        {/* </div>  */}
        </section>   )
  }
}
