import React from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../common/MainLayout'

function BookingDetails() {
  const navigate = useNavigate()

  const bookingDetails = {
    ticketId: '#TCK001',
    passengerName: 'Rohan Mehta',
    flightNo: '6E 102',
    pnr: 'XY789Z',
    source: 'Hyderabad-HYD',
    destination: 'Dubai-DXB',
    departureDate: 'Oct 25',
    airline: 'Indigo',
    uploadDate: 'Oct 6',
    status: 'Pending'
  }

  const userInfo = {
    name: 'Rohan Mehta',
    phone: '+91 9654324323',
    joined: 'Oct 6',
    city: 'Bangalore',
    email: 'Rohan24@yahoo.in',
    plan: 'Free',
    ticketsUploaded: 2,
    status: 'Active'
  }

  const handleDownloadTicket = () => {
    console.log('Downloading ticket PDF...')
    // Implement ticket download functionality
  }

  const handleViewProfile = () => {
    navigate('/user-details')
  }

  return (
    <MainLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <button
                  onClick={() => navigate('/bookings')}
                  className="mr-4 p-2 rounded-lg hover:bg-gray-100"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    Booking Details-Ticket {bookingDetails.ticketId}
                  </h1>
                  <p className="text-gray-600 mt-1 italic">
                    View all the details about the Bookings here.
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Details Card */}
            <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Booking Details</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div>
                  <label className="text-sm text-gray-500">Passenger Name</label>
                  <p className="font-medium text-gray-900">{bookingDetails.passengerName}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Flight No</label>
                  <p className="font-medium text-gray-900">{bookingDetails.flightNo}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">PNR</label>
                  <p className="font-medium text-gray-900">{bookingDetails.pnr}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Source</label>
                  <p className="font-medium text-gray-900">{bookingDetails.source}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Destination</label>
                  <p className="font-medium text-gray-900">{bookingDetails.destination}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Departure Date</label>
                  <p className="font-medium text-gray-900">{bookingDetails.departureDate}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Airline</label>
                  <p className="font-medium text-gray-900">{bookingDetails.airline}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Upload Date</label>
                  <p className="font-medium text-gray-900">{bookingDetails.uploadDate}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Status</label>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    bookingDetails.status === 'Verified' 
                      ? 'bg-green-100 text-green-800' 
                      : bookingDetails.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {bookingDetails.status}
                  </span>
                </div>
              </div>

              {/* Ticket Upload Section */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <label className="text-sm text-gray-500 mb-3 block">Ticket Uploaded</label>
                <button
                  onClick={handleDownloadTicket}
                  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Ticket.pdf</span>
                  <svg className="w-4 h-4 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* User Info Card */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">User Info</h3>
                <button
                  onClick={handleViewProfile}
                  className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  <span>View Profile</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="flex items-start space-x-6">
                {/* User Avatar */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  RM
                </div>
                
                {/* User Information */}
                <div className="flex-1">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div>
                      <label className="text-sm text-gray-500">Name</label>
                      <p className="font-medium text-gray-900">{userInfo.name}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Phone number</label>
                      <p className="font-medium text-gray-900">{userInfo.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Joined On</label>
                      <p className="font-medium text-gray-900">{userInfo.joined}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">City</label>
                      <p className="font-medium text-gray-900">{userInfo.city}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Email ID</label>
                      <p className="font-medium text-gray-900">{userInfo.email}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Plan</label>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        userInfo.plan === 'Premium' 
                          ? 'bg-purple-100 text-purple-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {userInfo.plan}
                      </span>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Tickets Uploaded</label>
                      <p className="font-medium text-gray-900">{userInfo.ticketsUploaded}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Status</label>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {userInfo.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default BookingDetails
