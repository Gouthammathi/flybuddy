import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

function SubscriptionDetails() {
  const navigate = useNavigate()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const navigationItems = [
    { name: 'Dashboard', icon: 'grid', active: false },
    { name: 'Users', icon: 'users', active: false },
    { name: 'Bookings', icon: 'book', active: false },
    { name: 'Notifications', icon: 'bell', active: false },
    { name: 'Roles & Permissions', icon: 'document', active: false },
    { name: 'Subscriptions', icon: 'calendar', active: true },
    { name: 'Reports', icon: 'chart', active: false }
  ]

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

  const getIcon = (iconName) => {
    const icons = {
      grid: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      users: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      book: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      bell: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.5 19.5L19.5 4.5" />
        </svg>
      ),
      document: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      calendar: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      chart: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
    return icons[iconName] || null
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-6 border-b">
          <div className="flex items-center">
            <img src={logo} alt="Flybuddy" className="h-8 w-auto" />
            {!sidebarCollapsed && <span className="ml-2 text-xl font-bold text-gray-800">Flybuddy</span>}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    if (item.name === 'Dashboard') {
                      navigate('/home')
                    } else if (item.name === 'Users') {
                      navigate('/users')
                    } else if (item.name === 'Bookings') {
                      navigate('/bookings')
                    } else if (item.name === 'Notifications') {
                      navigate('/notifications')
                    } else if (item.name === 'Roles & Permissions') {
                      navigate('/roles-permissions')
                    } else if (item.name === 'Subscriptions') {
                      navigate('/subscriptions')
                    } else if (item.name === 'Reports') {
                      navigate('/reports')
                    }
                  }}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    item.active
                      ? 'bg-gray-100 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-3">{getIcon(item.icon)}</span>
                  {!sidebarCollapsed && <span>{item.name}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              R
            </div>
            {!sidebarCollapsed && (
              <div className="ml-3 flex-1">
                <div className="text-sm text-gray-500">Welcome 👋</div>
                <div className="text-sm font-medium text-gray-900">Ria</div>
              </div>
            )}
            {!sidebarCollapsed && (
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => navigate('/subscriptions')}
                className="mr-4 p-2 rounded-lg hover:bg-gray-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Notifications */}
              <div className="relative">
                <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.5 19.5L19.5 4.5" />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">1</span>
                </button>
              </div>

              {/* User Avatar */}
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                R
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
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
        </main>
      </div>
    </div>
  )
}

export default SubscriptionDetails
