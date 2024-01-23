import React from "react";
import { Link } from "react-router-dom";
import "./nabar.css";

const Navbar2 = () => {
  return (
    <div>
      <header>
        <nav
          class="navbar navbar-expand-lg navbar-dark d-none d-lg-block"
          style={{index: 2000}}
        >
          <div class="container-fluid">
            <Link to="/"
              class="navbar-brand nav-link"
            >
              <strong>EMPLOYEE SYSTEM</strong>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarExample01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/addEmp" className="nav-link">
                    Add Employee
                  </Link>
                </li>
              </ul>

              <ul class="navbar-nav list-inline">
                <li class="">
                  <a
                    class="nav-link"
                    href="https://www.youtube.com/channel/shadesofmyfeelings"
                    rel="nofollow"
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
                <li class="">
                  <a
                    class="nav-link"
                    href="https://www.instagram.com/shades.of.my.feelings/"
                    rel="nofollow"
                    
                  >
                    <i class="fab fa-instagram-f"></i>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="https://github.com/anwesha2307"
                    rel="nofollow"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar2;
