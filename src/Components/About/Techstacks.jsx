// import React from "react";
// import "./Techstacks.css";
// import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
// import {
//   SiRedux,
//   SiHtml5,
//   SiExpress,
//   SiRedis,
//   SiTailwindcss,
//   SiNetlify,
//   SiGeeksforgeeks,
//   SiLeetcode,

// } from "react-icons/si";
// import { DiCss3, DiMongodb } from "react-icons/di";
// import { SiJavascript, SiHeroku } from "react-icons/si";
// import { VscGithub } from "react-icons/vsc";
// import { BsBootstrap, BsWordpress } from "react-icons/bs";

// export const Techstacks = () => {
//   return (
//     <>
//       <div className="section main" data-aos="fade-right">
//         <h2 className="section__title different">Skills</h2>
//         <div className="techsection">
//           <div>
//             <SiJavascript />
//             <h5>Javascript</h5>
//           </div>
//           <div>
//             <SiHtml5 />
//             <h5>HTML</h5>
//           </div>
//           <div>
//             <DiCss3 />
//             <h5>CSS</h5>
//           </div>
//           <div>
//             <FaReact />
//             <h5>React</h5>
//           </div>
//           <div>
//             <FaNodeJs />
//             <h5>Nodejs</h5>
//           </div>
//           <div>
//             <DiMongodb />
//             <h5>MongoDb</h5>
//           </div>

//           <div>
//             <SiExpress />
//             <h5>Express</h5>
//           </div>

//           <div>
          
//             <h5>Javascript</h5>
//           </div>
//           <div>
//             <BsBootstrap />
//             <h5>Bootstrap</h5>
//           </div>
//           <div>
//             <BsWordpress />
//             <h5>Wordpress</h5>
//           </div>
//           <div>
//             <SiHeroku />
//             <h5>Heroku</h5>
//           </div>
//           <div>
//             <VscGithub />
//             <h5>Github</h5>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiGeeksforgeeks,
  SiLeetcode,
  SiJavascript,
  SiHeroku,
  SiMysql
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";


export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div>
            <TbBrandCpp />
            <h5>C++</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>Tailwind CSS</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <SiMysql />
            <h5>My Sql</h5>
          </div>
          {/* <div>
            <SiHeroku />
            <h5>Heroku</h5>
          </div> */}
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
