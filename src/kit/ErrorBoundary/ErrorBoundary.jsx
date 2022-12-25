import React from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import Alert from 'kit/Alert'

const ErrorBoundaryFallback = ({ error, resetErrorBoundary }) => {
  return (
    <Alert
      {...{
        color: 'red',
        className: 'relative z-20',
        leadingIconName: 'HiExclamation',
        iconClassName: 'text-red-400',
        content: `Error happened: ${error.message}`
      }}
    />
  )
}

const ErrorBoundary = cmp =>
  withErrorBoundary(cmp, {
    FallbackComponent: ErrorBoundaryFallback
  })

export default ErrorBoundary
