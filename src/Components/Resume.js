import React, { Component } from 'react';


class Resume extends Component {
  render() {
    if(this.props.data){
      var education = this.props.data.education.map(function(edu){
        return <div key={edu.school} className="row item">
           <div className="twelve columns">
              <h3>{edu.school}</h3>
              <p className="info">{edu.degree}{(edu.degree=='10'||edu.degree=='12')&&<sup>th</sup>} <span>&bull;</span> <em className="date">{edu.graduated}</em></p>
              <p>
                {edu.description}
              </p>
           </div>
        </div>
      });

      var work = this.props.data.work.map(function(job){
        return <div key={job.company} className="row item">
           <div className="twelve columns">
              <h3>{job.company}</h3>
              <p className="info">{job.title}<span>&bull;</span> <em className="date">{job.years}</em></p>

              <p>
              {job.description}
              </p>
           </div>
        </div>
      });

      var skills = this.props.data.skills.map(function(skill){
        return <li key={skill.name}>
         <span>{skill.name}</span>
         </li>
      });
    }
    return (
      <section id="resume">
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            {education}
         </div>
      </div>

      <div className="row work">
         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
         </div>
      </div>

      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">
            <p>The main skill sets below outline the variety of skills performed within my current role as software developer at Conaxweb Solutions in Naini, Prayagraj..
            </p>
				   <ul className="skills">
					  {skills}
					</ul>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
