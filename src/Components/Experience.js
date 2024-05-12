import React, { Component } from "react";

export default class Companies extends Component {
  render() {
    if (this.props.data) {
      var work = this.props.data.work.map(function (job) {
        return (
          <div key={job.company} className="row item">
            <div className="twelve columns">
              <h3>{job.company}</h3>
              <p className="info">
                {job.title}
                <span>&bull;</span> <em className="date">{job.years}</em>
              </p>

              <p>{job.description}</p>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="experience">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Experience</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>
      </section>
    );
  }
}
