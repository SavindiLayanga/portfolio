import React from 'react';

const ProcessSection = () => {
    return (
        <section className="bg-gray-50 py-12">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-4xl font-semibold mb-4">
                    What services <span className="text-orange-500">are available from me?</span>
                </h2>
                <p className="text-gray-600 mb-12 max-w-lg mx-auto">
                    I provide one-stop service for you. <br/> My goal is to reduce the hassle and save you time.
                </p>

                <div
                    className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-6">
                    {/* Step 1 */}
                    <div className="relative bg-white p-8 rounded-lg shadow-md w-full md:w-1/3">
                        <div
                            className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-lg rounded-full w-12 h-12 flex items-center justify-center font-bold">
                            01
                        </div>
                        <h3 className="mt-6 font-semibold text-lg">Web Development</h3>
                        <p className="text-gray-500 mt-2">
                            The coding backbone, turning designs into functional websites and apps, ensuring robust and
                            efficient digital solutions.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative bg-white p-8 rounded-lg shadow-md w-full md:w-1/3">
                        <div
                            className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-lg rounded-full w-12 h-12 flex items-center justify-center font-bold">
                            02
                        </div>
                        <h3 className="mt-6 font-semibold text-lg">UI/UX Design</h3>
                        <p className="text-gray-500 mt-2">
                            Optimizing the overall user journey, understanding behavior, and ensuring an intuitive and
                            enjoyable experience through wireframes and design.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative bg-white p-8 rounded-lg shadow-md w-full md:w-1/3">
                        <div
                            className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-lg rounded-full w-12 h-12 flex items-center justify-center font-bold">
                            03
                        </div>
                        <h3 className="mt-6 font-semibold text-lg">Software Development</h3>
                        <p className="text-gray-500 mt-2">
                            Skilled developers write, test, and maintain code, bringing designs to life and implementing
                            functionalities, ensuring a seamless digital experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
