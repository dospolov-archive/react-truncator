import React from 'react'
import { Link } from 'react-router-dom'

const LinkWrapper = React.forwardRef(
  ({ linkTo = '', className = '', linkState, onClick, tabIndex, children }, ref) => {
    if (!linkTo) return <span {...{ className, ref, onClick, tabIndex }}>{children}</span>

    if (linkTo.startsWith('http')) {
      return (
        <a
          {...{
            href: linkTo,
            target: '_blank',
            rel: 'noopener noreferrer',
            ref,
            className,
            tabIndex
          }}
        >
          {children}
        </a>
      )
    }

    return <Link {...{ to: linkTo, state: linkState, className, ref }}>{children}</Link>
  }
)

export default LinkWrapper
