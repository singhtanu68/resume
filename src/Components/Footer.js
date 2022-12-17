import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <footer>

      <div className="row">

         <div className="twelve columns">


            <ul className="copyright">
               <li>&copy; Copyright © 2022  </li>
               <li>Design by <a target="_blank" href="https://www.linkedin.com/in/tanu-singh-12680b23a">Tanu Singh</a></li>
            </ul>

         </div>

         <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>

      </div>

   </footer>
    );
  }
}

export default Footer;
