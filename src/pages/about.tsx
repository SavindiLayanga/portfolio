import React from 'react';
import '../assets/proPic.jpeg'

const AboutSection: React.FC = () => {
    return (
        <div className="bg-white py-16 px-8" id="about">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold text-red-600 mb-6">About Me</h2>
                    <h2 className="text-6xl font-bold text-gray-900 mb-6">Who Am I ?</h2>
                    <p className="text-gray-500" style={{fontSize: '20px', fontFamily: 'Arial, sans-serif'}}>I am a
                        Front End Developer</p>
                    <br/>

                    <p className="text-gray-600">
                        Savindi is currently studying at Panadura Institute of Software Engineering (IJSE) and is
                        committed to improving her skills and knowledge in the field. Has a strong foundation in
                        HTML,
                        CSS, and JavaScript, and is particularly adept at bringing design concepts to life with
                        precision and creativity. I have a good knowledge of Java, and the real passion lies in the
                        design aspects of software development rather than the back-end parts.
                    </p>
                    <br/>
                    <p className="text-gray-600">
                        My journey started at Matara Mahinda Rajapakse College where she completed her General Level
                        (S.Level) in 2018 and Advanced Level (U/Level) in 2021.
                    </p>
                    <br/>
                    <p className="text-gray-600">
                        I am known for her innovative approach to design and her commitment to creating seamless
                        user
                        experiences. She continuously explores new technologies and best practices to stay ahead of
                        the
                        fast-evolving field of web development.
                    </p>
                </div>
                <img
                    src="https://picsum.photos/id/1028/300/300"
                    alt="a forest after an apocalypse"
                    className="grayscale hover:grayscale-0 transition duration-300 ease-linear object-cover cursor-pointer w-0 h-0 min-w-full min-h-full hover:w-[calc(150px*1.5)] hover:h-[calc(150px*1.5)]"
                />
                <img
                    src="https://picsum.photos/id/15/300/300"
                    alt="a waterfall and many rocks"
                    className="grayscale hover:grayscale-0 transition duration-300 ease-linear object-cover cursor-pointer w-0 h-0 min-w-full min-h-full hover:w-[calc(150px*1.5)] hover:h-[calc(150px*1.5)]"
                />
                <img
                    src="https://picsum.photos/id/1040/300/300"
                    alt="a house on a mountain"
                    className="grayscale hover:grayscale-0 transition duration-300 ease-linear object-cover cursor-pointer w-0 h-0 min-w-full min-h-full hover:w-[calc(150px*1.5)] hover:h-[calc(150px*1.5)]"
                />
                <img
                    src="https://picsum.photos/id/106/300/300"
                    alt="some pink flowers"
                    className="grayscale hover:grayscale-0 transition duration-300 ease-linear object-cover cursor-pointer w-0 h-0 min-w-full min-h-full hover:w-[calc(150px*1.5)] hover:h-[calc(150px*1.5)]"
                />

            </div>
        </div>
    );
};

export default AboutSection;
