import React from 'react';
import '../assets/proPic.jpeg'

const AboutSection: React.FC = () => {
    return (
        <div className="bg-white py-16 px-8" id="about">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold text-orange-500 mb-6">About Me</h2>
                    <h2 className="text-6xl font-bold text-gray-900 mb-6">Who Am I ?</h2>
                    <p className="text-gray-500" style={{fontSize: '20px', fontFamily: 'Arial, sans-serif'}}>I am a
                        Front End Developer</p>
                    <br/>

                    <p className="text-gray-600">
                        My journey started at Matara Mahinda Rajapakse College where she completed General Level (O/L)
                        in 2018
                        and Advanced Level (O/L) in 2021.
                    </p>
                    <br/>
                    <p className="text-gray-600">
                        I am currently studying at Panadura Institute of Software Engineering (IJSE) and am committed to
                        improving her skills and knowledge in the field. Has a strong foundation in HTML, CSS, and
                        JavaScript,
                        and is particularly adept at bringing design concepts to life with precision and creativity. I
                        have a
                        good knowledge of Java, and real passion lies in the design aspects of software development.
                    </p>
                    <br/>
                    <p className="text-gray-600">
                        I am known for her innovative approach to design and her commitment to creating seamless user
                        experiences. She continuously explores new technologies and best practices to stay ahead of the
                        fast-evolving field of web development.
                    </p>
                </div>

                {/*profile pictures*/}
                <div className="flex justify-center items-center space-x-2 mb-5">
                    <img src="/src/assets/aboutpic/propic1 - Copy.jpg" alt="Pro1"
                         className="w-20 h-100 object-cover border-4 border-black shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"/>
                    <img src="/src/assets/aboutpic/propic2 - Copy.jpg" alt="Pro2"
                         className="w-20 h-100 object-cover border-4 border-black shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"/>
                    <img src="/src/assets/aboutpic/propic3 - Copy.jpg" alt="Pro3"
                         className="w-20 h-100 object-cover border-4 border-black shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"/>
                    <img src="/src/assets/aboutpic/propic4 - Copy.jpg" alt="Pro4"
                         className="w-20 h-100 object-cover border-4 border-black shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"/>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
