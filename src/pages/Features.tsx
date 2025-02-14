import React from 'react';
import {
  BarChart3,
  FileText,
  Bot,
  Briefcase,
  Linkedin,
  CheckCircle2,
} from 'lucide-react';

function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="py-16 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-8">
              Features
            </h1>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Discover how CareerSync.ai can transform your job search with powerful AI-driven tools and automation.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="relative p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Application Tracking</h3>
                <p className="mt-2 text-gray-500">
                  Track all your job applications in one place with automatic status updates and insights.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li>• Real-time status updates</li>
                  <li>• Application analytics</li>
                  <li>• Multi-platform integration</li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="relative p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Resume Optimization</h3>
                <p className="mt-2 text-gray-500">
                  AI-powered resume scanner and optimizer to help you pass ATS and stand out.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li>• ATS compatibility check</li>
                  <li>• Keyword optimization</li>
                  <li>• Format suggestions</li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="relative p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <Bot className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">AI Career Coach</h3>
                <p className="mt-2 text-gray-500">
                  Get personalized career advice and interview preparation from our AI coach.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li>• Interview practice</li>
                  <li>• Personalized feedback</li>
                  <li>• Career path guidance</li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="relative p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Job Search Automation</h3>
                <p className="mt-2 text-gray-500">
                  Automated job matching and application process based on your preferences.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li>• Smart job matching</li>
                  <li>• One-click apply</li>
                  <li>• Custom job alerts</li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="relative p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <Linkedin className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">LinkedIn Optimization</h3>
                <p className="mt-2 text-gray-500">
                  AI-powered LinkedIn profile analysis and optimization recommendations.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li>• Profile score</li>
                  <li>• Content suggestions</li>
                  <li>• Network insights</li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="relative p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Progress Tracking</h3>
                <p className="mt-2 text-gray-500">
                  Visual dashboard to track your job search progress and success metrics.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li>• Success metrics</li>
                  <li>• Goal tracking</li>
                  <li>• Performance insights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;