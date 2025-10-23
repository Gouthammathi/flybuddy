import React from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../common/MainLayout'

function SubscriptionDetails() {
  const navigate = useNavigate()

  // Subscription details data
  const userDetails = {
    bookingId: 'FB12345',
    user: 'John Doe',
    email: 'john@yahoo.in',
    phoneNumber: '+91 9864351612',
    flight: 'BLR → DXB',
    date: 'Oct 8, 2025'
  }

  const planDetails = {
    planType: 'Premium',
    status: 'Paid',
    amount: '$25',
    paymentId: 'TXN#123456',
    purchasedDate: 'Oct 5, 2025',
    endingDate: 'Nov 8, 2025'
  }

  return (
    <MainLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <button
                onClick={() => navigate('/subscriptions')}
                className="mr-3 p-1 hover:bg-gray-100 rounded"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-3xl font-bold text-gray-900">Subscription Details</h1>
            </div>
            <p className="text-gray-600 ml-8">
              View all the details about the Subscription here
            </p>
          </div>

            {/* User Details Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">User Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Booking ID */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Booking ID</label>
                  <p className="text-sm font-medium text-gray-900">{userDetails.bookingId}</p>
                </div>

                {/* User */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">User</label>
                  <p className="text-sm font-medium text-gray-900">{userDetails.user}</p>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Email</label>
                  <p className="text-sm font-medium text-gray-900">{userDetails.email}</p>
                </div>

                {/* Phone number */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Phone number</label>
                  <p className="text-sm font-medium text-gray-900">{userDetails.phoneNumber}</p>
                </div>

                {/* Flight */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Flight</label>
                  <p className="text-sm font-medium text-gray-900">{userDetails.flight}</p>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Date</label>
                  <p className="text-sm font-medium text-gray-900">{userDetails.date}</p>
                </div>
              </div>
            </div>

            {/* Plan Details Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Plan Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Plan Type */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Plan Type</label>
                  <p className="text-sm font-medium text-gray-900">{planDetails.planType}</p>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Status</label>
                  <p className="text-sm font-medium text-gray-900">{planDetails.status}</p>
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Amount</label>
                  <p className="text-sm font-medium text-gray-900">{planDetails.amount}</p>
                </div>

                {/* Payment ID */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Payment ID</label>
                  <p className="text-sm font-medium text-gray-900">{planDetails.paymentId}</p>
                </div>

                {/* Purchased Date */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Purchased Date</label>
                  <p className="text-sm font-medium text-gray-900">{planDetails.purchasedDate}</p>
                </div>

                {/* Ending Date */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Ending Date</label>
                  <p className="text-sm font-medium text-gray-900">{planDetails.endingDate}</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default SubscriptionDetails
