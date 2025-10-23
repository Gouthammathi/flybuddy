import React from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../common/MainLayout'

function RoleDetails() {
  const navigate = useNavigate()

  const roleData = {
    roleName: 'Super Admin',
    memberName: 'Rohan Mehra',
    description: 'Full access to all modules',
    createdOn: 'October 1',
    email: 'Rohan@yahoo.in',
    phoneNumber: '+91 9875344231',
    gender: 'Male'
  }

  const handleEdit = () => {
    console.log('Editing role...')
    navigate('/edit-role')
  }

  return (
    <MainLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <button
                    onClick={() => navigate('/roles-permissions')}
                    className="p-2 rounded-lg hover:bg-gray-100 mr-4"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h1 className="text-3xl font-bold text-gray-900">Role details- {roleData.roleName}</h1>
                </div>
                <button
                  onClick={handleEdit}
                  className="px-8 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  Edit
                </button>
              </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Role Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Role Name */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Role Name</label>
                  <p className="text-sm font-medium text-gray-900">{roleData.roleName}</p>
                </div>

                {/* Member Name */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Member Name</label>
                  <p className="text-sm font-medium text-gray-900">{roleData.memberName}</p>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Description</label>
                  <p className="text-sm font-medium text-gray-900">{roleData.description}</p>
                </div>

                {/* Created On */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Created On</label>
                  <p className="text-sm font-medium text-gray-900">{roleData.createdOn}</p>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Email</label>
                  <p className="text-sm font-medium text-gray-900">{roleData.email}</p>
                </div>

                {/* Phone number */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Phone number</label>
                  <p className="text-sm font-medium text-gray-900">{roleData.phoneNumber}</p>
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Gender</label>
                  <p className="text-sm font-medium text-gray-900">{roleData.gender}</p>
                </div>
              </div>

              {/* Edit Button */}
              <div className="flex justify-end mt-8">
                <button
                  onClick={handleEdit}
                  className="px-8 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  Edit
                </button>
              </div>
            </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default RoleDetails
