import React from "react";

import img from "./asset/img/logo-ALTA@2x.png";
import img2 from "./asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";

function Home() {
  return (
    <body class="home-background">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img class="logo-atas" src={img} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <ul class="nav justify-content-end">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">
                      Activity
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Profile
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled">Home</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container">
        <div class="row align-items-center isi-home">
          <div class="col-lg-4 col-md-12 col-sm-12 col-12">
            <img id="foto-profil" src={img2} />
          </div>
          <div class="col-lg-8 col-md-12 col-sm-12 col-12">
            <div class="main-p">
              <p class="sapaan">Welcome</p>
              <p class="nama">Alterra Academy</p>
              <p class="hobi">
                Menghasilkan Talenta IT Berkualitas yang #MasukIndustriIT
              </p>
              <p class="tombol">
                <a href="#">Get Started</a>
              </p>
            </div>
            <div className="row align-items-center p-5">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Kampus Merdeka by Aprilia | All rights reserved |
            Terms Of Service | Education
          </p>
        </div>
          </div>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"
      ></script>
    </body>
  );
}

export default Home;
