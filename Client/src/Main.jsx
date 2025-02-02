import React from "react";
import bgComponent1 from "./images/main-page-component-1.png";
import { HiArrowLongUp } from "react-icons/hi2";
import "./stylesheets/Main.css";
import ftImg1 from "./images/feature-1-image.svg";
import ftImg2 from "./images/feature-2-image.svg";
import ftImg3 from "./images/feature-3-image.svg";
import pfImg1 from './images/profile-img-1.svg';


function main() {

  // const navigate = useNavigate(); // Use the hook here

  const handleDownload = () => {
    const selectedOption = document.getElementById("device-selector").value;
    if (selectedOption === "null") {
      alert("Please select a valid option.");
    } else {
      let downloadFile;
      switch (selectedOption) {
        case "PC":
          downloadFile = bgComponent1;
          break;
        case "Tablet":
          downloadFile = ftImg1;
          break;
        case "Mobile":
          downloadFile = ftImg2;
          break;
        default:
          break;
      }
      const link = document.createElement('a');
      link.href = downloadFile;
      link.setAttribute('download', `Valvet-app for ${selectedOption}`); // Fixed template string interpolation
      link.click();
    }
  };

  return (
    <div className="main-main">
      <div id="downloader">
        <label id="l1">
          Meet Your New <span>Productivity</span> Assistant
        </label>
        <label id="l5">To download the Valvet application on your selected device:</label>
        <select name="device-selector" id="device-selector">
          <option className="decvice-option" value="null">Select your Device</option>
          <option className="decvice-option" value="PC">PC</option>
          <option className="decvice-option" value="Tablet">Tablet</option>
          <option className="decvice-option" value="Mobile">Mobile</option>
        </select>
        <button id="download-btn" onClick={handleDownload}>
          Download
        </button>
        <label id="t1">Get 3 months free trail now</label>
        
      </div>

      <label id="l2">How it works ?</label>
      <label id="t2">Simple, intuitive, and incredibly effective.</label>
      <div id="features-list">
        <div id="feature-1" className="features">
          <div className="feature">
            <img src={ftImg1} alt="Feature 1"></img>{" "}
          </div>
          <div id="feature-1-title" className="feature-title">
            Voice Commands
          </div>
          <div id="feature-1-alt" className="feature-alt">
            Just speak, and your AI handles tasks like playing music or opening
            files
          </div>
        </div>
        <div id="feature-2" className="features">
          <div className="feature">
            <img src={ftImg2} alt="Feature 2"></img>
          </div>
          <div id="feature-2-title" className="feature-title">
            Background Efficiency
          </div>
          <div id="feature-2-alt" className="feature-alt">
            Our AI works seamlessly in the background, so you can focus on what
            matters
          </div>
        </div>
        <div id="feature-3" className="features">
          <div className="feature">
            <img src={ftImg3} alt="Feature 3"></img>
          </div>
          <div id="feature-3-title" className="feature-title">
            SOS Feature
          </div>
          <div id="feature-3-alt" className="feature-alt">
            In an emergency, a loud scream triggers an SOS alert to your chosen
            contacts
          </div>
        </div>
      </div>

      <div id="feedback-block">
        <label id="l3">What Our Users Are Saying ?</label>
        <label id="t3">
          Hear from those who’ve transformed their productivity with our AI.
        </label>
        <div id="comments">
          <div className="comment">
            <div className="profile-content">
              <img src={pfImg1} className="profile-image" alt="Profile"></img>
              <div className="user-info">
                <div className="name">Galian Gunther</div>
                <div className="username">@galian_gunther</div>
              </div>
            </div>
            <div className="comment-line">
              dkjbsjvidsjvbdnc wfoiwe ofher eofihw f ijifh asdj
            </div>
          </div>
          <div className="comment">
            <div className="profile-content">
              <img src={pfImg1} className="profile-image" alt="Profile"></img>
              <div className="user-info">
                <div className="name">Galian Gunther</div>
                <div className="username">@galian_gunther</div>
              </div>
            </div>
            <div className="comment-line">
              dkjbsjvidsjvbdnc wfoiwe ofher eofihw f ijifh asdj qwiehf o wfpoi
              qwehf qwiehf eiifh{" "}
            </div>
          </div>
          <div className="comment">
            <div className="profile-content">
              <img src={pfImg1} className="profile-image" alt="Profile"></img>
              <div className="user-info">
                <div className="name">Galian Gunther</div>
                <div className="username">@galian_gunther</div>
              </div>
            </div>
            <div className="comment-line">
              dkjbsjvidsjvbdnc wfoiwe ofher eofihw f ijifh asdj qwiehf eiifh
            </div>
          </div>
          <div className="comment">
            <div className="profile-content">
              <img src={pfImg1} className="profile-image" alt="Profile"></img>
              <div className="user-info">
                <div className="name">Galian Gunther</div>
                <div className="username">@galian_gunther</div>
              </div>
            </div>
            <div className="comment-line">
              dkjbsjvidsjvbdnc wfoiwe ofher eofihw f ijifh asdj mmkdnvn egdyw
              uydg iwudqwu digdyugd uwgd dyqd wdg spocja fuge9f iduch
            </div>
          </div>
          <div className="comment">
            <div className="profile-content">
              <img src={pfImg1} className="profile-image" alt="Profile"></img>
              <div className="user-info">
                <div className="name">Galian Gunther</div>
                <div className="username">@galian_gunther</div>
              </div>
            </div>
            <div className="comment-line">
              dkjbsjvidsjvbdnc wfoiwe ofher eofihw f ijifh asdj mmkdnvn egdyw
              uydg iwudqwu digdyugd uwgd dyqd wdg spocja fuge9f iduch
            </div>
          </div>
          <div className="comment">
            <div className="profile-content">
              <img src={pfImg1} className="profile-image" alt="Profile"></img>
              <div className="user-info">
                <div className="name">Galian Gunther</div>
                <div className="username">@galian_gunther</div>
              </div>
            </div>
            <div className="comment-line">
              dkjbsjvidsjvbdnc wfoiwe ofher eofihw f ijifh asdj qwiehf eiifh
            </div>
          </div>
        </div>
      </div>

      {/* <div id="plan-section">
        <label id="l4">Choose Your Plan</label>
        <label id="t4">Select the plan that best fits your needs.</label>
        <div id="plans">
          <div className="plan1">
            <div className="overlay">
              
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default main;
