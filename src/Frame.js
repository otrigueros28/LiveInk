import React from 'react';

const Frame = ()=>{
  return (
    <div id = 'embeddedframe'>
    <a-scene embedded arjs='sourceType: webcam;'>
            <a-assets>
              <img id="img1" src="./img/cross.png" />
              <img id="img2" src="./img/geo.png" />
              <img id="img3" src="./img/globe.png" />
              <img id="img4" src="./img/rose.png" />
              <img id="img5" src="./img/tiger.png" />
            </a-assets>
            {/* <a-marker-camera type="pattern" patternUrl="./img/TatMarker.patt"></a-marker-camera> */}
            <a-marker-camera preset='hiro'><a-image src="#img3" width="2" height="2" position='0 0 0' rotation = " 270 0 0"></a-image></a-marker-camera>
          </a-scene>
  </div>
  )
};
export default Frame;
