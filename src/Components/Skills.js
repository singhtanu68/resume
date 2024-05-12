import React, { Component } from "react";

export default class Skill extends Component {
  render() {
    if (this.props.data) {
      var skills = this.props.data.skills.map(function (skill) {
        return (
          <div className="skill-data" key={skill.name}>
            <span>{skill.name} : </span>
            <div>
              {skill.technologies.map((technology, techIndex) => (
                <div key={techIndex} className="skill-btn">
                  <span className="front">{technology}</span>
                </div>
              ))}
            </div>
          </div>
        );
      });
    }
    return (
      <section id="skill">
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <p>
              The main skill sets below outline the variety of skills performed
              within my current role as software developer as freelance in
              Delhi.
            </p>
            <div className="skills">{skills}</div>
          </div>
        </div>
      </section>
    );
  }
}
