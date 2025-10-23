import React from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../common/MainLayout'

function NotificationDetails() {
  const navigate = useNavigate()

  const notificationData = {
    title: 'Premium Offer',
    audience: 'Premium Users',
    date: 'Oct 6',
    status: 'Sent',
    age: '18-24',
    region: 'India',
    message: 'Don\'t miss the upcoming travels with Flybuddy Subscribe to premium now'
  }

  const metrics = {
    totalReach: '2,140',
    delivered: '2,100',
    clicked: '1,250',
    clickedPercentage: '59%',
    notDelivered: '40'
  }

  return (
    <MainLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
              <div className="flex items-center mb-4">
                <button
                  onClick={() => navigate('/notifications')}
                  className="mr-4 p-2 rounded-lg hover:bg-gray-100"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Notification Details</h1>
                  <p className="text-gray-600 mt-1">
                    View all the details about the Notification here
                  </p>
                </div>
              </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Total Reach */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Reach</p>
                  <p className="text-2xl font-bold text-gray-900">{metrics.totalReach} Users</p>
                </div>
              </div>

              {/* Delivered */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div>
                  <p className="text-sm font-medium text-gray-600">Delivered</p>
                  <p className="text-2xl font-bold text-gray-900">{metrics.delivered}</p>
                </div>
              </div>

              {/* Clicked / Interacted */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div>
                  <p className="text-sm font-medium text-gray-600">Clicked / Interacted</p>
                  <p className="text-2xl font-bold text-gray-900">{metrics.clicked} ({metrics.clickedPercentage})</p>
                </div>
              </div>

              {/* Not Delivered */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div>
                  <p className="text-sm font-medium text-gray-600">Not Delivered</p>
                  <p className="text-2xl font-bold text-gray-900">{metrics.notDelivered}</p>
                </div>
              </div>
            </div>

            {/* Notification Details Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Notification Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Title</label>
                    <p className="text-gray-900 font-medium">{notificationData.title}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Audience</label>
                    <p className="text-gray-900">{notificationData.audience}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Date</label>
                    <p className="text-gray-900">{notificationData.date}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Status</label>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {notificationData.status}
                    </span>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Age</label>
                    <p className="text-gray-900">{notificationData.age}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Region</label>
                    <p className="text-gray-900">{notificationData.region}</p>
                  </div>
                </div>
              </div>

              {/* Message Content - Full width */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-600 mb-2">Message (Content)</label>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-900">{notificationData.message}</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default NotificationDetails
