import React, { useState, useEffect } from 'react';
import Tesseract from 'tesseract.js';

const ResultsPage = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const capturedImage = localStorage.getItem('capturedImage');
    if (capturedImage) {
      const image = new Image();
      image.src = capturedImage;

      Tesseract.recognize(
        image,
        'eng',
        { logger: m => console.log(m) }
      ).then(({ data: { text } }) => {
        setText(text);
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-8">Scan Results</h1>
      <div className="w-full max-w-lg bg-white rounded-lg overflow-hidden shadow-lg p-6">
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};

export default ResultsPage;
