import React from 'react'
import cameraImg from '../../resources/camera.png';
import personImg from '../../resources/person.png';
import deviceImg from '../../resources/device.png';

const Description = () => {
  return (
    <div id='description-page' className='page-secondary'>
        <span className='instructions-heading'>Instructions</span>
        <div className='instructions-container'>
        <div className='main-intructions'>
        <div className='all-ins'>ins 1</div>
        <div className='disclaimer-container'>
        <div className='camera-instruction'>
        <span className='instruction-heading'>1</span>
        <img className='camera-instruction-img' src={cameraImg} />
        <span className='instruction'>Make sure your camera is on</span>
        </div>
        <div className='camera-instruction'>
        <span className='instruction-heading'>2</span>
        <img className='camera-instruction-img' src={personImg} />
        <span className='instruction'>Make sure you are aligned with the camera</span>
        </div>
        <div className='camera-instruction'>
        <span className='instruction-heading'>3</span>
        <img className='camera-instruction-img' src={deviceImg} />
        <span className='instruction'>Make sure you are not using an older device as you may experience some issues</span>
        </div>
        </div> 
        </div>

        <div className='video-container'>
            kajsld
        </div>

        </div> 
    </div>
  )
}

export default Description