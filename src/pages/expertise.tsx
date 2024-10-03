import React from 'react';

const NumberedCards: React.FC = () => {
    const cardContent = [
        { number: '01', text: ' I chose to design a system for Matara Kumaratgunga Munidasa Public Library as the final project of my software engineering first semester. I created it using mvc architecture.' },
        { number: '02', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos earum enim fuga in.' },
        { number: '03', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos earum enim fuga in.' },
        { number: '04', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos earum enim fuga in.' },
        { number: '05', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos earum enim fuga in.' },
        { number: '06', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos earum enim fuga in.' }
    ];

    return (
        <div className="bg-[#F6F6F6] py-12" id="expertise">
            <h2 className="text-2xl font-bold text-orange-500 mb-6 ml-[10%]">Expertise</h2>
            <h2 className="text-6xl font-bold text-gray-900 mb-6 ml-[10%]">What have I done?</h2>
            <br/>
            <br/>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {cardContent.map((card, index) => (
                    <div
                        key={index}
                        className="border relative border-gray-500 p-6 rounded-md text-black hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Number overlapping the box */}
                        <h3 className="absolute -top-6 left-4 text-6xl font-bold bg-[#F6F6F6] px-2">
                            {card.number}
                        </h3>
                        {/* Content text inside the box */}
                        <p className="text-gray-700 mt-8">
                            {card.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NumberedCards;
