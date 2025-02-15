import React, { useState, useRef } from "react";

const ComparisonPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);
  
  const videos = [
    "intercom.mp4",
    "limechat.mp4",
    "tawk.mp4"
  ];

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play();
      }
    }, 100); 
  };

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-16 flex flex-col md:flex-row items-center">
      {/* Left Text Content */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Eum ipsam laborum deleniti <br />
          <span className="font-bold text-blue-700">
            velit pariatur architecto aut nihil
          </span>
        </h2>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit.
        </p>
        <div className="space-y-4">
          {[
            "Non consectetur a erat nam at lectus urna duis?",
            "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
            "Dolor sit amet consectetur adipiscing elit pellentesque?"
          ].map((question, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow flex justify-between items-center cursor-pointer hover:shadow-md transition"
              onClick={() => handleVideoSelect(videos[index])}
            >
              <span className="text-blue-600 font-semibold">{`0${index + 1}`}</span>
              <span className="text-gray-800 font-medium flex-1 ml-4">{question}</span>
              <span className="text-gray-500">&gt;</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right Video Section */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        {selectedVideo ? (
          <video ref={videoRef} controls className="max-w-md">
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src="1.png" alt="Illustration" className="h-[28rem]" />
        )}
      </div>
    </div>
  );
};

export default ComparisonPage;
