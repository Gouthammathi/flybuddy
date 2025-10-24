import React from 'react'
import MainLayout from '../common/MainLayout'

function Home() {

  const metricsData = [
    {
      title: 'Total users',
      value: '1,250',
      change: '28.4%',
      changeType: 'increase',
      icon: 'users'
    },
    {
      title: 'Tickets Uploaded',
      value: '320',
      change: '12.6%',
      changeType: 'decrease',
      icon: 'document'
    },
    {
      title: 'Airport Upload - No. of Users',
      value: '194',
      change: '3.1%',
      changeType: 'increase',
      icon: 'calendar'
    },
    {
      title: 'Premium Subscribers',
      value: '2.3K',
      change: '11.3%',
      changeType: 'increase',
      icon: 'star'
    }
  ]

  const popularRoutes = [
    { country: 'Dubai', flag: 'ae', travelers: '54 travellers' },
    { country: 'United Kingdom', flag: 'gb', travelers: '14 travellers' },
    { country: 'USA', flag: 'us', travelers: '12 travellers' },
    { country: 'France', flag: 'fr', travelers: '28 travellers' },
    { country: 'Germany', flag: 'de', travelers: '22 travellers' },
    { country: 'Japan', flag: 'jp', travelers: '18 travellers' },
    { country: 'Australia', flag: 'au', travelers: '15 travellers' },
    { country: 'Canada', flag: 'ca', travelers: '13 travellers' },
    { country: 'Italy', flag: 'it', travelers: '11 travellers' },
    { country: 'Spain', flag: 'es', travelers: '9 travellers' },
    { country: 'Singapore', flag: 'sg', travelers: '8 travellers' },
    { country: 'Thailand', flag: 'th', travelers: '7 travellers' }
  ]

  const newUsers = [
    { name: 'Rohan Mehta', email: 'rohan24@...', joined: 'Oct 6', plan: 'Free' },
    { name: 'Priya Agarwal', email: 'priya88@...', joined: 'Oct 6', plan: 'Premium' },
    { name: 'Sneha Iyer', email: 'sneha@...', joined: 'Oct 5', plan: 'Premium' }
  ]

  const getFlagIcon = (countryCode) => {
    const flags = {
      ae: (
        <svg className="w-6 h-6" viewBox="0 0 24 16" fill="none">
          <rect width="24" height="16" fill="#00732F"/>
          <rect width="24" height="5.33" fill="#FFFFFF"/>
          <rect y="10.67" width="24" height="5.33" fill="#000000"/>
          <rect x="0" y="0" width="6" height="16" fill="#FF0000"/>
        </svg>
      ),
      gb: (
        <svg className="w-6 h-6" viewBox="0 0 24 16" fill="none">
          <rect width="24" height="16" fill="#012169"/>
          <path d="M0 0L24 16M24 0L0 16" stroke="#FFFFFF" strokeWidth="2"/>
          <path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1"/>
          <path d="M12 0V16M0 8H24" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M12 0V16M0 8H24" stroke="#C8102E" strokeWidth="2"/>
        </svg>
      ),
      us: (
        <svg className="w-6 h-6" viewBox="0 0 24 16" fill="none">
          <rect width="24" height="16" fill="#B22234"/>
          <rect width="24" height="1.23" fill="#FFFFFF"/>
          <rect y="2.46" width="24" height="1.23" fill="#FFFFFF"/>
          <rect y="4.92" width="24" height="1.23" fill="#FFFFFF"/>
          <rect y="7.38" width="24" height="1.23" fill="#FFFFFF"/>
          <rect y="9.84" width="24" height="1.23" fill="#FFFFFF"/>
          <rect y="12.3" width="24" height="1.23" fill="#FFFFFF"/>
          <rect y="14.77" width="24" height="1.23" fill="#FFFFFF"/>
          <rect width="9.6" height="8.62" fill="#3C3B6E"/>
        </svg>
      ),
      fr: (
        <svg className="w-6 h-6" viewBox="0 0 24 16" fill="none">
          <rect width="8" height="16" fill="#002395"/>
          <rect x="8" width="8" height="16" fill="#FFFFFF"/>
          <rect x="16" width="8" height="16" fill="#ED2939"/>
        </svg>
      ),
      de: (
        <svg className="w-6 h-6" viewBox="0 0 24 16" fill="none">
          <rect width="24" height="5.33" fill="#000000"/>
          <rect y="5.33" width="24" height="5.33" fill="#DD0000"/>
          <rect y="10.67" width="24" height="5.33" fill="#FFCE00"/>
        </svg>
      ),
      jp: (
        <svg className="w-6 h-6" viewBox="0 0 24 16" fill="none">
          <rect width="24" height="16" fill="#FFFFFF"/>
          <circle cx="12" cy="8" r="3" fill="#BC002D"/>
        </svg>
      ),
      au: (
        <svg className="w-6 h-6" viewBox="0 0 24 16" fill="none">
          <rect width="24" height="16" fill="#00008B"/>
          <path d="M0 0L24 16M24 0L0 16" stroke="#FFFFFF" strokeWidth="0.5"/>
          <path d="M12 0V16M0 8H24" stroke="#FFFFFF" strokeWidth="0.5"/>
        </svg>
      ),
      ca: (
        <svg className="w-6 h-6" viewBox="0 0 24 16" fill="none">
          <rect width="24" height="16" fill="#FF0000"/>
          <rect width="24" height="8" fill="#FFFFFF"/>
          <rect y="8" width="24" height="8" fill="#FF0000"/>
        </svg>
      ),
      it: (
        <svg className="w-6 h-6" viewBox="0 0 24 16" fill="none">
          <rect width="8" height="16" fill="#009246"/>
          <rect x="8" width="8" height="16" fill="#FFFFFF"/>
          <rect x="16" width="8" height="16" fill="#CE2B37"/>
        </svg>
      ),
      es: (
        <svg className="w-6 h-6" viewBox="0 0 24 16" fill="none">
          <rect width="24" height="3" fill="#C60B1E"/>
          <rect y="3" width="24" height="10" fill="#FFC400"/>
          <rect y="13" width="24" height="3" fill="#C60B1E"/>
        </svg>
      ),
      sg: (
        <svg className="w-6 h-6" viewBox="0 0 24 16" fill="none">
          <rect width="24" height="8" fill="#ED2939"/>
          <rect y="8" width="24" height="8" fill="#FFFFFF"/>
        </svg>
      ),
      th: (
        <svg className="w-6 h-6" viewBox="0 0 24 16" fill="none">
          <rect width="24" height="2.67" fill="#ED1C24"/>
          <rect y="2.67" width="24" height="2.67" fill="#FFFFFF"/>
          <rect y="5.34" width="24" height="5.32" fill="#241D4F"/>
          <rect y="10.66" width="24" height="2.67" fill="#FFFFFF"/>
          <rect y="13.33" width="24" height="2.67" fill="#ED1C24"/>
        </svg>
      )
    }
    return flags[countryCode] || null
  }

  const getIcon = (iconName) => {
    const icons = {
      users: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 7c0-2.21-1.79-4-4-4S8 4.79 8 7s1.79 4 4 4 4-1.79 4-4zm-4 6c-3.31 0-6 2.69-6 6v2h12v-2c0-3.31-2.69-6-6-6z"/>
          <path d="M20 7c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2 4c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4z"/>
        </svg>
      ),
      document: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v12h16V6H4zm2 2h12v2H6V8zm0 4h12v2H6v-2zm0 4h8v2H6v-2z"/>
          <path d="M21 8v2l-2 1-2-1V8l2-1 2 1z"/>
        </svg>
      ),
      calendar: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
      ),
      star: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    }
    return icons[iconName] || null
  }

  return (
    <MainLayout>
      <div className="p-6 page-zoom-plus-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <div className="flex bg-gray-100 rounded-full p-1 border border-gray-200">
                <button 
                  className="px-4 py-2 text-gray-900 rounded-full text-sm font-semibold transition-colors"
                  style={{
                    background: 'linear-gradient(to right, #ABBCD6, #ACBED7)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(to right, #9BA8C4, #A5C8D7)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(to right, #ABBCD6, #ACBED7)'
                  }}
                >
                  Today
                </button>
                <button className="px-4 py-2 text-gray-500 rounded-full text-sm font-medium hover:bg-gray-50 hover:text-gray-700 transition-colors" style={{ background: '#E5E7EB' }}>Total</button>
              </div>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {metricsData.map((metric, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg mr-3">
                      {getIcon(metric.icon)}
                    </div>
                    <h3 className="text-sm text-gray-500">{metric.title}</h3>
                  </div>
                  <div className="flex items-center">
                    <p className="text-2xl font-bold text-gray-900 mr-3">{metric.value}</p>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${
                      metric.changeType === 'increase' 
                        ? 'text-green-600' 
                        : 'text-red-600'
                    }`} style={{
                      backgroundColor: metric.changeType === 'increase' ? '#05C16833' : '#FEE2E2'
                    }}>
                      <span className="flex items-center">
                        {metric.changeType === 'increase' ? (
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                          </svg>
                        ) : (
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-9.2 9.2M7 7v10h10" />
                          </svg>
                        )}
                        {metric.change}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts and Tables Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* User Growth Chart */}
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">User Growth Engagement</h3>
                  <div className="flex items-center px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Jan 2024
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center mb-6">
                  <span className="text-3xl font-bold text-gray-900 mr-3">257</span>
                  <div className="px-2 py-1 rounded text-xs font-medium text-white" style={{ backgroundColor: '#05C16833' }}>
                    <span className="flex items-center text-green-600">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                      16.8%
                    </span>
                  </div>
                </div>
                <div className="h-48 relative">
                  {/* Chart Grid */}
                  <div className="absolute inset-0">
                    {/* Horizontal Grid Lines */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gray-200"></div>
                    <div className="absolute top-1/3 left-0 right-0 h-px bg-gray-200"></div>
                    <div className="absolute top-2/3 left-0 right-0 h-px bg-gray-200"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
                    
                    {/* Vertical Grid Lines */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>
                    <div className="absolute left-1/5 top-0 bottom-0 w-px bg-gray-200"></div>
                    <div className="absolute left-2/5 top-0 bottom-0 w-px bg-gray-200"></div>
                    <div className="absolute left-3/5 top-0 bottom-0 w-px bg-gray-200"></div>
                    <div className="absolute left-4/5 top-0 bottom-0 w-px bg-gray-200"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200"></div>
                  </div>
                  
                  {/* Y-axis Labels */}
                  <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-2">
                    <span className="text-xs text-gray-500">500</span>
                    <span className="text-xs text-gray-500">250</span>
                    <span className="text-xs text-gray-500">100</span>
                    <span className="text-xs text-gray-500">0</span>
                  </div>
                  
                  {/* X-axis Labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between px-8 pb-2">
                    <span className="text-xs text-gray-500">Jan 1</span>
                    <span className="text-xs text-gray-500">Jan 8</span>
                    <span className="text-xs text-gray-500">Jan 16</span>
                    <span className="text-xs text-gray-500">Jan 24</span>
                    <span className="text-xs text-gray-500">Jan 31</span>
                    <span className="text-xs text-gray-500">Feb 1</span>
                  </div>
                  
                  {/* Chart Line */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#EC4899" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#EC4899" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    {/* Area fill */}
                    <path d="M0,80 L20,60 L40,40 L60,20 L80,30 L100,50 L100,100 L0,100 Z" fill="url(#chartGradient)"/>
                    {/* Line */}
                    <path d="M0,80 L20,60 L40,40 L60,20 L80,30 L100,50" stroke="#EC4899" strokeWidth="0.5" fill="none"/>
                  </svg>
                </div>
              </div>

              {/* Popular Routes */}
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Routes</h3>
                <div className="max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  <div className="space-y-0">
                    {popularRoutes.map((route, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                            {getFlagIcon(route.flag)}
                          </div>
                          <span className="font-medium text-gray-900">{route.country}</span>
                        </div>
                        <span className="text-sm text-gray-500">{route.travelers}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* New Users Table */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">New Users</h3>
                  <button 
                    className="px-4 py-2 text-white rounded-lg text-sm font-medium"
                    style={{
                      backgroundColor: '#B8C8E0'
                    }}
                  >
                    View all
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100 rounded-t-xl">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Joined On</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Plan</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {newUsers.map((user, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.joined}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            user.plan === 'Premium' 
                              ? 'bg-purple-100 text-purple-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {user.plan}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
