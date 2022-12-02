import React from 'react'
import './SideBar.css';
import ContainerAnunciosTitles from '../ContainerAnunciosTitles/ContainerAnunciosTitles'
import '../ContainerOptionsTitles/ContainerOptionsTitles.css';
import ContainerBlog from '../ContainerBlog/ContainerBlog';
import imageGuide from '../../images/guide-sign.jpg';


function SideBar() {
  return (
    <div className="sidebar">
      <ContainerAnunciosTitles   subtitle="Recommendations">
        <ContainerBlog />
      </ContainerAnunciosTitles>
      <div className="image-container">
        <img src={imageGuide} alt="logo" />
      </div>
    </div>
  )
}

export default SideBar