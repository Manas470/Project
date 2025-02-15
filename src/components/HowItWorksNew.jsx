import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const HowItWorksNew = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">How It Works</h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          Learn how our platform helps you streamline your workflow and achieve your goals effortlessly.
        </p>

        {/* Videos Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-blue-500">Step 1</h2>
            <p className="text-gray-600 mt-2">Sign up and create an account to get started.</p>
            <div className="mt-4">
              <video controls className="w-full rounded-lg">
                <source src="SARA-YC.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-blue-500">Step 2</h2>
            <p className="text-gray-600 mt-2">Customize your preferences and set up your profile.</p>
            <div className="mt-4">
              <video controls className="w-full rounded-lg">
                <source src="chat.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Single Video Below */}
        <div className="mt-8 flex justify-center">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center max-w-xl w-full">
            <h2 className="text-2xl font-semibold text-blue-500">Step 3</h2>
            <p className="text-gray-600 mt-2">Start using our features to enhance your productivity.</p>
            <div className="mt-4">
              <video controls className="w-full rounded-lg">
                <source src="admin.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HowItWorksNew;
