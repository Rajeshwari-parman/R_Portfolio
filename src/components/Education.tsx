import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Information Science',
      institution: 'NIE Institute Of Technology',
      location: 'Mysuru',
      period: '2021 - 2025',
      cgpa: '8.2/10',
      description: 'Focused on software engineering, algorithms, and web development.',
      coursework: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems', 'Web Development'],
      achievements: ['Hackathon Participant - HACKERRUPT ’22', 'GeeksforGeeks Coding Challenge', 'Instagram Page Management - Codesmiths']
    },
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2022',
      credentialId: 'AWS-CSA-2022-001'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2021',
      credentialId: 'META-REACT-2021-045'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      credentialId: 'GCP-PD-2023-089'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic background and professional certifications that built my foundation
            </p>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="mr-3 text-blue-600" size={32} />
              Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center text-blue-600 font-semibold mb-2">
                        <GraduationCap size={16} className="mr-2" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center text-gray-500 mb-4">
                        <div className="flex items-center mr-6">
                          <Calendar size={14} className="mr-1" />
                          {edu.period}
                        </div>
                        <div className="flex items-center mr-6">
                          <MapPin size={14} className="mr-1" />
                          {edu.location}
                        </div>
                        <div className="font-semibold text-green-600">
                          GPA: {edu.gpa}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6">
                        {edu.description}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Key Coursework</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Achievements</h5>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-gray-700 text-sm flex items-start">
                              <Award size={12} className="mr-2 mt-1 text-yellow-500 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="mr-3 text-blue-600" size={32} />
              Professional Certifications
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Award className="text-yellow-500" size={24} />
                    <span className="text-sm text-gray-500 font-medium">{cert.date}</span>
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {cert.name}
                  </h4>

                  <p className="text-blue-600 font-semibold mb-3">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-gray-500 font-mono">
                    ID: {cert.credentialId}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
