import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/image.jpeg";
import {SiGeeksforgeeks,SiLeetcode} from 'react-icons/si';

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Deepak Singh </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Ghaziabad, Uttar Pardesh (India)
                </span>
                . I have completed my graduation in BTech (CSE. Engineering)
                from{" "}
                <span className="different">
                  Raj Kumar Goel Institute Of Technology , Ghaziabad (UP)
                </span>
                . Then I joined full stack development course by{" "}
                <span className="different">Brain Mentors</span>
              </h4>
              <h4>My Coding Profile</h4>
              <h4 className="different">
                <span className="icons">
                 <SiGeeksforgeeks/>
                </span>
                <a href="https://auth.geeksforgeeks.org/user/codefellas123/practice">Geeks for Geeks</a>
              </h4>
              <h4 className="different">
                <span className="icons">
                 <SiLeetcode/>
                </span>
                 <a href="https://leetcode.com/Deepak_Singh1810/">Leetcode</a>
              </h4>
              <h4 className="different">
                <span className="icons">
                  {/* <ExitToAppIcon /> */}
                </span>
                {/* YouTuber{" "} */}
              </h4>
              <h4 className="different">
                <span className="icons">
                  {/* <ExitToAppIcon /> */}
                </span>
                {/* Poet{" "} */}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
