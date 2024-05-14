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
  SiCss3,
  SiRedux,
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
import note from './assets/note.png'
import sorting from './assets/sorting.png'
import compiler from './assets/compiler.png'
import youtube from './assets/youtube.png'
import stack from './assets/stack-overflow.png'
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
                    src={stack}
                    alt="stack overflow"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Stack Overflow</h2>
                <p>
                  This comprehensive MERN (MongoDB, Express.js, React, Node.js) project with Redux integrates JWT (JSON Web Tokens) and bcrypt for secure user authentication, replicating Stack Overflow's core features. Users can securely register, log in, and access personalized features while ensuring data protection. The application includes features like asking, answering, and voting on questions with real-time updates, alongside advanced search, user profiles, and notifications. The combination of Redux for state management, JWT for secure authentication, and bcrypt for password hashing ensures scalability, security, and a seamless experience for developers seeking community-driven support in a protected environment.
                </p>
                <div>
                  <DiCss3 />
                  <FaReact />
                  <IoLogoJavascript />
                  <SiMongodb />
                  <SiExpress />
                  <SiRedux />
                  <SiNodedotjs />
                </div>
                <div>
                  <a
                    href="https://stack-overflow-client-eight.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/deepaksingh1008/stack-overflow-client"
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
                  <img src={youtube} alt="youtube clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>YouTube Clone</h2>
                <p>
                  his React project leverages the Rapid API to replicate core functionalities of YouTube. Users can search, view, and interact with videos, including comments and likes, within a familiar interface. Features include video recommendations, user authentication, and responsive design, providing an immersive and dynamic user experience akin to the original platform.
                </p>
                <div>
                  <FaReact />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://youtube-clone-ten-dun.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See This Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/deepaksingh1008/youtube-clone"
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
                    src={compiler}
                    alt="compiler"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Code Compiler</h2>
                <p>
                  This React project integrates Rapid API to access compiler services, allowing users to compile and execute code snippets in multiple languages directly from the browser. Features include syntax highlighting, error handling, and language selection, enhancing user experience and enabling seamless coding experimentation and learning.
                </p>
                <div>

                  <FaReact />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://code-compiler-tan.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/deepaksingh1008/code-compiler"
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
                    src={sorting}
                    alt="Sorting Visualization"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Sorting Visualization</h2>
                <p>
                  This project utilizes HTML, CSS, and JavaScript to create an interactive sorting visualization. Users can observe various sorting algorithms in action, such as bubble sort or quicksort, visually demonstrating the efficiency and mechanics of each algorithm. Real-time feedback and customization options enhance user engagement and learning.
                </p>
                <div>
                  <SiHtml5 />
                  < DiCss3 />
                  <SiJavascript />
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
                    src={note}
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
                    href="https://note-taking-app-client.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/deepaksingh1008/note-taking-app-client"
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
                      See this Live
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
                      See this Live
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
                  <FaReact />
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

        </div>
      </div>

    </>
  );
};
