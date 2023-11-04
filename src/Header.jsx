import React from "react";
import logo from './iconrain.png'; 

function Header() {
  return (
    <header>

<div>
<nav class="navbar navbar-expand-lg ">
<h2 >WCast</h2>
<img src={logo} className="logo"></img>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      
     
    </ul>
  </div>
</nav>
</div>

    </header>
  );
}

export default Header;