import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Pricing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Choose the plan that best fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Free</h3>
              <p className="mt-2 text-sm text-gray-500">Perfect for getting started</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-500">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-indigo-500 mr-2" />
                <span>Track up to 10 applications</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-indigo-500 mr-2" />
                <span>Basic resume analysis</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-indigo-500 mr-2" />
                <span>Job search basics guide</span>
              </li>
            </ul>
            <button 
              onClick={() => navigate('/signup')}
              className="w-full py-3 px-4 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-indigo-600 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Pro</h3>
              <p className="mt-2 text-sm text-gray-500">For serious job seekers</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">$19</span>
                <span className="text-gray-500">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-indigo-500 mr-2" />
                <span>Unlimited application tracking</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-indigo-500 mr-2" />
                <span>Advanced AI resume optimization</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-indigo-500 mr-2" />
                <span>AI cover letter generator</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-indigo-500 mr-2" />
                <span>LinkedIn profile optimization</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-indigo-500 mr-2" />
                <span>Interview preparation tools</span>
              </li>
            </ul>
            <button 
              onClick={() => navigate('/signup')}
              className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
              <p className="mt-2 text-sm text-gray-500">For teams and organizations</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">$49</span>
                <span className="text-gray-500">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-indigo-500 mr-2" />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-indigo-500 mr-2" />
                <span>Team collaboration tools</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-indigo-500 mr-2" />
                <span>Custom AI training</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-indigo-500 mr-2" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-indigo-500 mr-2" />
                <span>Advanced analytics</span>
              </li>
            </ul>
            <button 
              onClick={() => navigate('/signup')}
              className="w-full py-3 px-4 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition flex items-center justify-center"
            >
              Contact Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-8 max-w-3xl mx-auto grid gap-6">
            <div className="text-left">
              <h3 className="font-medium text-gray-900">Can I cancel my subscription?</h3>
              <p className="mt-2 text-gray-500">Yes, you can cancel your subscription at any time. You'll continue to have access to your plan until the end of your billing period.</p>
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-900">What payment methods do you accept?</h3>
              <p className="mt-2 text-gray-500">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-900">Do you offer refunds?</h3>
              <p className="mt-2 text-gray-500">Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;