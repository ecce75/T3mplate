import React, { useEffect } from 'react'
import cameraImg from '../../resources/camera.png';
import personImg from '../../resources/person.png';
import deviceImg from '../../resources/device.png';
import myGif from "../../resources/latteral.gif";
import lottie from 'lottie-web';
import arrow from '../../resources/arrow.gif';

const Description = () => {

    useEffect(() => {
        const container = document.getElementById('lottie-container');
        lottie.loadAnimation({
          container,
          renderer: 'svg',
          loop: false,
          autoplay: true,
          path: 'https://assets1.lottiefiles.com/private_files/lf30_codvjmrh.json', // Replace with your Lottie animation URL
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
            background: 'transparent'
          }
        });
      }, []);

  return (
    <div id='description-page' className='page-secondary'>
        <span className='instructions-heading'>Instructions</span>
        <div className='instructions-container'>
        <div className='main-intructions'>


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
        <span className='instruction'>Make sure you are not using an older device as you may experience lagging issues</span>
        </div>
        </div> 


        <div className='arrow-container'>
            <div className='arrow-main'>
                <span className='instruction-heading'>follow this video</span>
        <img style={{ width: '200px', height: '200px', backgroundColor: '#025464'  }} src='https://media3.giphy.com/media/Lqxe1bLj4HB76uLF0w/giphy.gif?cid=ecf05e476i8u8fo4e2jkgjky3zwx1738qcr9dpmm3r2d6a7q&ep=v1_stickers_search&rid=giphy.gif&ct=s' alt="LATTERAL RAISE"></img>
            </div>
        </div> 


        </div>

        <div className='video-container'>
          <div>
            <img className='pose-gif' src={myGif} alt="LATTERAL RAISE"></img>
          </div>
        </div>


        </div> 
    </div>
  )
}

export default Description