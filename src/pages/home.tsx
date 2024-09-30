import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="bg-cover bg-fixed bg-center h-screen flex justify-center items-center overflow-auto" style={{ backgroundImage: 'url(/src/assets/images/homebg.jpg)' }}><div
                className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg max-w-4xl text-center overflow-y-auto h-4/6 w-4/5 flex flex-col justify-center items-center">
                <img src="/src/assets/proPic.jpeg" alt="Profile"
                     className="w-24 h-24 rounded-full object-cover mb-5 mx-auto"/>
                <h2 className="text-4xl font-bold mt-5">SAVINDI LAYANGA</h2>
                <h1 className="text-2xl text-gray-800 mt-2">Front End Developer</h1>
                <p className="text-base text-gray-600 mt-5 max-w-lg text-center">
                    I am a 21-year-old UI/UX designer and Front-End Developer living in Matara, Sri Lanka. With a
                    passion for design and a keen interest in Front-End Engineering, I've spent over 2 years creating
                    dynamic, user-friendly web applications.
                </p>
                <a href="#" className="text-black font-bold mt-5 hover:underline">Hire Me</a>
            </div>
        </div>
    );
};

export default Home;
