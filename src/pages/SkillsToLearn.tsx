import React, { useState } from 'react';
import { ArrowLeft, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const SkillsToLearn = () => {
  const [selectedCareer, setSelectedCareer] = useState('');
  const [currentSkills, setCurrentSkills] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-purple-100 p-3 rounded-full">
              <Target className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Career Matchmaker
              </h1>
              <p className="text-gray-600 mt-2">
                Analyze your skill gaps and get personalized learning recommendations
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Target Career Path
              </h2>
              <div className="space-y-4">
                {['Software Engineer', 'Data Analyst', 'Digital Marketing Manager'].map((career) => (
                  <button
                    key={career}
                    onClick={() => setSelectedCareer(career)}
                    className={`w-full p-4 rounded-lg text-left transition-colors ${
                      selectedCareer === career
                        ? 'bg-purple-100 border-purple-500'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <h3 className="font-medium text-gray-900">{career}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Click to see required skills
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Skill Gap Analysis
              </h2>
              {selectedCareer ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Required Skills for {selectedCareer}
                    </h3>
                    <div className="space-y-3">
                      {['JavaScript', 'React', 'Node.js'].map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="text-gray-700">{skill}</span>
                          <span className="text-sm text-purple-600 font-medium">
                            Required
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Recommended Learning Path
                    </h3>
                    <div className="space-y-4">
                      {[
                        'Complete JavaScript Fundamentals',
                        'Build React Applications',
                        'Learn Node.js Basics',
                      ].map((course, index) => (
                        <div
                          key={course}
                          className="p-4 border border-gray-200 rounded-lg"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-900">
                              {index + 1}. {course}
                            </span>
                            <span className="text-sm text-gray-500">2-3 weeks</span>
                          </div>
                          <div className="mt-2">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-purple-600 h-2 rounded-full"
                                style={{ width: '0%' }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  Select a career path to see skill requirements and recommendations
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsToLearn;