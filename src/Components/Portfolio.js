import React, { Component } from 'react';


class Portfolio extends Component {
   render() {
      if (this.props.data) {
         var portfolio = this.props.data.projects.map(function (project) {
            return <div key={project.name} className="row item">
               <div className="twelve columns">
                  <h3>{(project.url) ? <a target="_blank" href={project.url}>{project.name}</a>:<span>{project.name}</span>} <em>{project.description}</em></h3>
                  <p className="info">{project.roleType}<span>&bull;</span> <em className="date">{project.duration}</em></p>
                  <h6>
                     {project.metaTitle}
                  </h6>
                  <p>{project.MetaDescription}</p>
               </div>
            </div>
         });
       
      }
      return (
         <section id="project">

            <div className="row work">
               <div className="three columns header-col">
                  <h1><span>Projects</span></h1>
               </div>
               <div className="nine columns main-col">
                  <h1>Check Out Some of My Works.</h1>

                  <div className="nine columns main-col">
                     {portfolio}
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default Portfolio;
