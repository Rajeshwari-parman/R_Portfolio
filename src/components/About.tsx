import React from 'react';
import { Code, Heart, Lightbulb, Link } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Heart, label: 'TCS iON Career EDge CERTIFICATE' },
    { icon: Code, label: 'WEB DEVELOPMENT CERTIFICATE' },
    { icon: Code, label: 'PYTHON CERTIFICATE' },
    { icon: Lightbulb, label: 'Excel Using AI CERTIFICATE' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                Passionate Developer & Creative Problem Solver
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a dedicated software developer with a passion for creating exceptional digital experiences.
                With expertise in modern web technologies, I specialize in building responsive, user-friendly
                applications that solve real-world problems.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                My journey in tech started with curiosity about how things work, and it has evolved into
                a career focused on innovation, clean code, and meaningful user experiences. I believe in
                continuous learning and staying updated with the latest industry trends.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, Committed to continuous learning and collaboration to solve complex problems. I'm always excited about new
                challenges and opportunities to grow.
              </p>

              <div className="pt-4">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Resume
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full mb-4">
                    <stat.icon size={24} />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h4>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
