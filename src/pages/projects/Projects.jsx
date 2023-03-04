import "./Projects.scss";
import { imageData } from "./../../helper/imageData";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <div className="project-bgImg-container">
        <div className="projects__bio-image">
          <h1>My Projects</h1>
        </div>
      </div>
      {/* PROJECT MAIN */}
      <main className="projects">
        <div className="projects__items">
          {imageData.map((i) => (
            <div className="projects__item">
              <img src={i} alt="My Project" />
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Projects;
