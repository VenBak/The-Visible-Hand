import React from 'react';
import Group from '../images/Group.png';

export default function About() {
    return (
      <div class="idea">
        <h1>Goals and Inspiration</h1>
        <img src= {Group}  alt="Group photo" className ="center" width="200" height="250"></img>
        <p>  Hello and Welcome to The Visible Hand. We are a dedicated and active forum pationate about navigating the trecherous Stock Market. Using our unique and inuitive tools found on the site users can better grasp and trade ideas regarding current stock market values. Our Team of passionate coders from The George Washington University Coding Bootcampy have made this site using inovative tools found in the competitive business enviroment. The goal of this website is to help fellow nerds eager to have a safe and inclusive forum where ideas and Stock Market hypothetical conclussions can be shared and conversed. 
        </p>
        <p>“I will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful.” By Warren Buffett</p>
        <h2>Team Members</h2>
        <div>
          <ul style={{listStyleType: "none", width: "30vw", margin: "0 auto", display: "flex", justifyContent: "space-around"}}>
          <a href ="https://github.com/braddahis">
                    <li>
                        Alexander
                    </li>
                </a>
                <a href ="https://github.com/braddahis">
                    <li>
                        Andre
                    </li>
                </a>
                <a href ="https://github.com/braddahis">
                    <li>
                        Brian
                    </li>
                </a>
                <a href ="https://github.com/braddahis">
                    <li>
                       Suvarna
                    </li>
                </a>
          </ul>
        </div>
      </div>
    );
  }
  