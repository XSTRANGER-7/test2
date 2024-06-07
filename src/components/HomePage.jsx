import React, { useRef, useState } from 'react';
import { Button } from 'semantic-ui-react';
import { CameraIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';

const HomePage = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const videoConstraints = {
    facingMode: 'environment', // 'environment' to access back camera
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    localStorage.setItem('capturedImage', imageSrc);
    setImageSrc(imageSrc);
    navigate('/results');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-8">Image Scanner</h1>
      <div className="w-full max-w-lg rounded-lg overflow-hidden shadow-lg">
        <div className="bg-gray-200 p-4">
          <div className="relative w-full h-80">
            <div className="absolute top-0 left-0 w-full h-full">
              {imageSrc && (
                <img src={imageSrc} alt="Captured" className="object-cover w-full h-full" />
              )}
              {!imageSrc && (
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints} // Specify video constraints here
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </div>
            <button
              onClick={capture}
              className="absolute bottom-0 right-0 p-4 bg-blue-500 rounded-md text-white hover:bg-blue-600"
            >
              <CameraIcon className="h-6 w-6 mr-2" /> Capture Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
