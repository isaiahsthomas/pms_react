import React from 'react';
import './navbar.css';

const navbar = () => {
  return (
    
    <nav>
        <ul>

            <li>
                <a href="/index.html" class="logo">
                    <img src="" alt="" />
                    <span class="#">arcDesign Core</span>
                </a>
            </li>
            <li><a href="#">
                <i class="fa-solid fa-sliders"></i>
                <span class="nav-item">Settings</span>
            </a></li>
            <li><a href="#">
                <i class="fa-solid fa-circle-question"></i>
                <span class="nav-item">FAQ</span>
            </a></li>
            <li><a href="/index.html">
                <i class="fa-solid fa-right-from-bracket"></i>
                <span class="nav-item">Logout</span>
            </a></li>
        
        </ul>
        <script src="https://kit.fontawesome.com/03d52b0dac.js" crossorigin="anonymous"></script>
      </nav>
  )
}

export default navbar