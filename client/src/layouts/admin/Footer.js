import React from 'react';
import {Link } from 'react-router-dom'

export const Footer = () => {
  return (
        <footer className="footer">
            <div className="container-fluid">
                <nav className="pull-left">
                    <ul>

                        <li>
                            <Link to="#">
                                Creative Tim
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                            Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="copyright pull-right">
                    &copy; <script>document.write(new Date().getFullYear())</script>, made with <i className="fa fa-heart heart"></i> by <a href="http://www.creative-tim.com">Creative Tim</a>
                </div>
            </div>
        </footer>
  );
};
