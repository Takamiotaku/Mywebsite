import './App.css';
import './fontello-f9a82289/css/fontello.css'
import pdf from "./assets/CV.pdf";
import React, { useState, useEffect } from 'react';
import Modal from './components/Modal.js'; 
import { isMobileDevice } from './components/deviceDetection.js';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [showFullPage, setShowFullPage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  const handleShowFullPage = () => {
    setShowFullPage(true);
  };

  if (isMobileDevice() && !showFullPage) {
    return (
      <div className="mobile-warning">
        <p>Mobile version is being developed. If you want to see the page anyway, click <button onClick={handleShowFullPage}>here</button>.</p>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="Rectangle" role="banner">
        <div className="Logo">Sebastian Chlupka</div>
        <div className="Clock">{time}</div>
      </div>
      <br/>
      <div className="Squares">
        <div className="Square1">
          <div className="TileWrapper1">
            <div className="Tile1" onClick={() => openModal('I am young full stack software engineer and devops enthusiast. I enjoy process of creation and would like to create more. Currently looking for work ')}>
              <i class="icon-adult"><br/>Who am I</i>
            </div>
            <div className="Tile1" onClick={() => openModal('Fuull stack development react,html,js,css,mssql desktokp apps with .net framework c# , python. currently learinig devops: kubernetes , docker ,jenkins, git')}>
              <i class="icon-laptop"><br/>What I offer</i>
            </div>
          </div>
          <div className="TileWrapper2">
            <a className="Tile2" href={pdf} target="_blank" rel="noopener noreferrer">
              <i class="icon-graduation-cap"><br/>Curriculum vitae</i>
            </a>
            <div className="Tile3" onClick={() => openModal('chlupkasebastian@gmail.com')}>
              <i class="demo-icon icon-mail"><br/>Contact</i>
            </div>
          </div>
          <div className="Tile4"><em>"Talk is cheap show me the code"</em><br/>Linus Torvalds</div>
        </div>
        <div className="Square2">
          <div className="Tile5">Welcome to my page. <br/>The page is still under development.To protect my privacy, personal details have been removed from my CV. If you are a potential employer and would like to see the complete CV, please email me.</div>
          <div className="TileWrapper2">
            <a href="https://github.com/Takamiotaku" className="Github" target="_blank" rel="noopener noreferrer">
              <i class="icon-github-squared"><br/>Github</i>
            </a>
            <a href="https://www.linkedin.com/in/sebastian-chlupka/" className="Linkedin" target="_blank" rel="noopener noreferrer">
              <i class="icon-linkedin-squared"><br/>Linkedin</i>
            </a>
          </div>
        </div>
      </div>
      <div className="Rectangle1" role="contentinfo">Sebastian Chlupka- Portfolio Software Engineering</div>
      {isModalOpen && <div className="overlay visible" onClick={closeModal}></div>}
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </div>
  );
}

export default App;
