import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

function OTP() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState(['', '', '', ''])
  const [timeLeft, setTimeLeft] = useState(28) // 28 seconds countdown
  const [canResend, setCanResend] = useState(false)

  // Countdown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [timeLeft])

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`)
        if (nextInput) nextInput.focus()
      }
    }
  }

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      if (prevInput) prevInput.focus()
    }
  }

  const handleResend = () => {
    if (canResend) {
      setTimeLeft(30) // Reset to 30 seconds
      setCanResend(false)
      // Here you would typically resend the OTP
      console.log('Resending OTP...')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const otpString = otp.join('')
    if (otpString.length === 4) {
      console.log('OTP verified:', otpString)
      // Navigate to success page after successful verification
      navigate('/success')
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-lg">
        {/* Logo and Brand */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Flybuddy" className="h-16 w-auto" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Verify OTP</h1>
          <p className="text-gray-500 text-sm">
            Enter the 4-digit code sent to your Email Id
          </p>
        </div>

        {/* OTP Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* OTP Input Fields */}
          <div className="flex justify-center space-x-3 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                maxLength="1"
              />
            ))}
          </div>

          {/* Resend Section */}
          <div className="text-center mb-6">
            <p className="text-gray-600 text-sm">
              Didn't get it {formatTime(timeLeft)}?{' '}
              <button
                type="button"
                onClick={handleResend}
                disabled={!canResend}
                className={`font-medium transition-colors duration-200 ${
                  canResend
                    ? 'text-purple-500 hover:text-purple-600 cursor-pointer'
                    : 'text-gray-400 cursor-not-allowed'
                }`}
              >
                Resend
              </button>
            </p>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default OTP
