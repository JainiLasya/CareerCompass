import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, BookOpen, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Career Compass
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Navigate your professional journey with AI-powered guidance. Choose your path to success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/career-path')}
            className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                <Compass className="w-8 h-8 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Career Path</h2>
              <p className="text-gray-600 mb-6">
                Discover potential career paths based on your skills, interests, and background
              </p>
              <span className="inline-flex items-center text-indigo-600 font-medium">
                Explore Careers <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </div>
          </button>

          <button
            onClick={() => navigate('/skills')}
            className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills to Learn</h2>
              <p className="text-gray-600 mb-6">
                Identify skill gaps and get personalized learning recommendations
              </p>
              <span className="inline-flex items-center text-purple-600 font-medium">
                Discover Skills <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;