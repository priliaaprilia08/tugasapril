import React from "react";

import img from "./asset/img/logo-ALTA@2x.png";
import img2 from "./asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";

function Home() {
    return (
    <body class="home-background">
        <header>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                        <div class="alterra">
                            <a href="index.html"><img class="logo-atas" src={img} /></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div class="container">
                            <div class="row align-items-center navig">
                                <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="index.html" class="aktif">HOME</a></div>
                                <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><a href="about.html">ABOUT</a></div>
                                <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><a href="#">EXPERIENCE</a></div>
                                <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="form.html">CONTACT</a></div> 
                            </div>
                        </div>
                    </div>    
                </div>
            </div> 
        </header>
            <div class="container h-100">
                <div class="row align-items-center isi-home">
                    <div class="col-lg-4 col-md-12 col-sm-12  col-12">
                        <img id="foto-profil" src={img2} />
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                        <div class="main-p">
                            <p class="sapaan">Hi, my name is </p>
                            <p class="nama">Anne Sullivan</p>
                            <p class="hobi">I build things for the web</p>
                            <p class="tombol"><a href="about.html">Get In Touch</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>    
        </body>
    );
}
  
export default Home;