import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart3,
  FileText,
  Bot,
  Briefcase,
  Linkedin,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Supercharge Your</span>
              <span className="block text-indigo-600">Job Search with AI</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Track applications, optimize resumes, and land your dream job faster with AI-powered career management tools.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <button 
                  onClick={() => navigate('/signup')}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Powerful tools to streamline your job search and increase your chances of success.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <button 
                onClick={() => navigate('/features')}
                className="relative p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Application Tracking</h3>
                <p className="mt-2 text-gray-500">
                  Track all your job applications in one place with automatic status updates and insights.
                </p>
              </button>

              {/* Feature 2 */}
              <button 
                onClick={() => navigate('/features')}
                className="relative p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Resume Optimization</h3>
                <p className="mt-2 text-gray-500">
                  AI-powered resume scanner and optimizer to help you pass ATS and stand out.
                </p>
              </button>

              {/* Feature 3 */}
              <button 
                onClick={() => navigate('/features')}
                className="relative p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <Bot className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">AI Career Coach</h3>
                <p className="mt-2 text-gray-500">
                  Get personalized career advice and interview preparation from our AI coach.
                </p>
              </button>

              {/* Feature 4 */}
              <button 
                onClick={() => navigate('/features')}
                className="relative p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Job Search Automation</h3>
                <p className="mt-2 text-gray-500">
                  Automated job matching and application process based on your preferences.
                </p>
              </button>

              {/* Feature 5 */}
              <button 
                onClick={() => navigate('/features')}
                className="relative p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <Linkedin className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">LinkedIn Optimization</h3>
                <p className="mt-2 text-gray-500">
                  AI-powered LinkedIn profile analysis and optimization recommendations.
                </p>
              </button>

              {/* Feature 6 */}
              <button 
                onClick={() => navigate('/features')}
                className="relative p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Progress Tracking</h3>
                <p className="mt-2 text-gray-500">
                  Visual dashboard to track your job search progress and success metrics.
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-indigo-200">Join thousands of successful job seekers today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button 
                onClick={() => navigate('/signup')}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;