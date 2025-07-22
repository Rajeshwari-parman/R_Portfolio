import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Cognicraft Solutions',
      location: 'Remote',
      period: 'Jan 2024 - Feb 2024',
      description: [
        'Designed and optimized dynamic, user-friendly websites using modern technologies.',
        'Collaborated with UX/UI designers to implement pixel-perfect designs',
        'Optimized application performance resulting in 40% faster load times',
        ' Collaborated with cross-functional teams to deliver scalable solutions.'
      ],
      technologies: ['HTML', 'CSS', 'Javascript', 'Tailwind CSS', 'GraphQL']
    },
    {
      title: 'CodTech IT solutions Private Limited',
      company: 'Software Developre Intern.',
      location: 'Remote, Hyderabad',
      period: 'Feb 2025 - May 2025',
      description: [
        'Developed and maintained multiple client-facing web applications',
        'Implemented responsive designs and ensured cross-browser compatibility',
        'Integrated REST APIs and managed application state with Redux',
        'Participated in agile development processes and sprint planning'
      ],
      technologies: ['React', 'JavaScript', 'FastAPI', 'CSS3', 'Node.js']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey and the experiences that shaped my career
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>

            {experiences.map((experience, index) => (
              <div key={index} className="relative mb-12">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:pr-12'}`}>
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full left-1/2 transform -translate-x-1/2 z-10"></div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center text-blue-600 font-semibold mb-2">
                          <ExternalLink size={16} className="mr-2" />
                          {experience.company}
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div className="flex items-center mb-1">
                          <Calendar size={14} className="mr-1" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;