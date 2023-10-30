import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiHtml5,
  SiMaterialdesign,
  SiChai,
  SiEthereum,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import dashboard from './assets/E-Com-Dashboard.png'
import ntam from './assets/Note Taking app Mern.png'
import ntaj from './assets/Note-Taking-app-js.png'
import landingPage from './assets/Landing Page.png'
import musicApp from './assets/Music-app.png'
import ReduxTool from './assets/Redux-toolkit.png'
import videoHub from './assets/Video-Hub.png'
import weatherApp from './assets/Weather-app.png'
import movix from "./assets/movix.png"


export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={dashboard}
                    alt="Rockstar Games"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>E-Commerce Dashboard</h2>
                <p>
                  The E-commerce Dashboard project is a web application built using the MERN stack
                  (MongoDB, Express.js, React.js, Node.js) that focuses on performing CRUD (Cre-
                  ate, Read, Update, Delete) operations for managing an e-commerce platform. The
                  project provides administrators with a centralized interface to handle various aspects
                  of their online store efficiently.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                </div>
                <div>
                  <a
                    href="https://youtu.be/cj4QayXTvtk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/deepaksingh1008/e-commerce-dashboard"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={ntam}
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Note Taking App (Mern)</h2>
                <p>
                  The goal of this project is to create a web-based Note Taking App that allows users to create, edit, and manage notes. The application should provide a simple and intuitive interface for users to write, organize, and search for their notes. Users should be able to register accounts, log in securely, and access their notes from any device.
                </p>
                <div>
                  <DiCss3 />
                  <FaReact />
                  <IoLogoJavascript />
                  <SiMaterialdesign />
                </div>
                <div>
                  <a
                    href="https://youtu.be/46B5w8ZQYDA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/deepaksingh1008/NoteTakingApp-mern-stack"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={videoHub} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Video-Hub</h2>
                <p>
                  The objective of this project is to create a video hub application that allows users to watch, upload, and share videos. The application should provide a seamless and intuitive user interface for browsing through a variety of video content. Users should be able to create accounts, personalize their video preferences, and interact with the platform through comments, likes, and sharing features.
                </p>
                <div>
                  <FaReact />
                  <DiCss3 />

                </div>
                <div>
                  <a
                    href="https://www.npmjs.com/package/apijs-mongo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View NPM Package
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/API.JS-Mongo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={musicApp} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Music App</h2>
                <p>
                  The goal of the project is to create a music application where users can listen to their favorite songs, create playlists, and explore a wide range of music genres. The app should provide a seamless and engaging user experience, allowing users to discover, play, and organize music tracks easily.
                </p>
                <div>
                  <FaReact />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://amazing-kelpie-04547e.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See This Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/deepaksingh1008/Music-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={weatherApp} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather App</h2>
                <p>
                  Location based weather app. User can also search for their cities and pickup location from map to see weather data of respective places.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://weather-app-react-836762.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See This Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/deepaksingh1008/Weather-App-using-react"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={ntaj}
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Note Taking App Using Js</h2>
                <p>
                  The Note Taking App is a web application built using HTML, CSS, and JavaScript that

                  allows users to create, store, and manage their notes digitally. It provides a user-
                  friendly interface where users can easily Add, Edit,delete,Search,Sort notes, keeping

                  them organized and accessible.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://note-taking-app-javascript.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      URL for the API
                    </span>
                  </a>
                  <a
                    href="https://github.com/deepaksingh1008/Note-taking-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={movix}
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Movie App</h2>
                <p>
                Developing a Movie App using React is a valuable learning experience that allows you to apply various frontend development concepts in a practical context. Prioritize creating a user-friendly and visually appealing interface that provides users with comprehensive information about movies and helps them discover new and exciting films to watch.
                </p>
                <div>
                  <FaReact/>
                  <DiCss3 />
                  <SiJavascript />
                  
                </div>
                <div>
                  <a
                    href="https://movix-kohl-sigma.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/deepaksingh1008/Movix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={landingPage}
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Landing Page</h2>
                <p>
                Creating a Landing Page using React provides an excellent opportunity to showcase your frontend development skills and create an engaging and conversion-focused web presence. Focus on creating a user-friendly and visually appealing design that effectively communicates the value proposition of the product or service, encouraging visitors to take the desired actions.
                </p>
                <div>
                  <FaReact />
                  <DiCss3 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://react-project-first-chakra-ui.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/deepaksingh1008/video-hub-react-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={ReduxTool}
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Redux Toolkit Project</h2>
                <p>
                  Using redux we make a simple cart user can add and delete product from cart
                </p>
                <div>
                  <FaReact/>
                  <DiCss3 />
                  <SiJavascript />
                  
                </div>
                <div>
                  <a
                    href="https://redux-app-115746.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/deepaksingh1008/redux"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
