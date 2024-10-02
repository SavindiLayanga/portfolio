import React from 'react';

const skillsData = [
    { name: 'Java', icon: '☕', count: '60%' },
    { name: 'HTML', icon: '🌐', count: '100%' },
    { name: 'JavaScript', icon: '📜', count: '80%' },
    { name: 'SQL', icon: '🛢️', count: '90%' },
    { name: 'React', icon: '⚛️', count: '70%' },
    { name: 'JavaScript', icon: '📜', count: '80%' },
    { name: 'SQL', icon: '🛢️', count: '90%' },
    { name: 'React', icon: '⚛️', count: '70%' }
];

const Skills = () => {
    return (
        <div className="flex justify-center items-center py-8 bg-gray-200">
            <div className="grid grid-cols-8 gap-10">
                {skillsData.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md">

                        <span style={{fontSize: '24px'}} className="text-yellow-500">{skill.icon}</span>
                        <h3 className="text-2xl font-bold text-gray-900">{skill.count}</h3>
                        <p className="text-lg text-gray-500">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
