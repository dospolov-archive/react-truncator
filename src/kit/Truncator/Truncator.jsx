import React from 'react'
import Tippy from '@tippyjs/react'
import ErrorBoundary from 'kit/ErrorBoundary'
import ElementTruncator from './ElementTruncator'

const Truncator = ({ rootIndex, children }) => {
  if (
    React.Children.map(
      children,
      (child, i) => !child.props?.className.includes('can-truncate')
    ).every(Boolean)
  ) {
    throw new Error('No children can be truncated')
  }

  if (
    React.Children.map(children, (child, i) => {
      const cls = child.props?.className

      return cls.includes('can-truncate') && !cls.includes('bg-')
    }).some(Boolean)
  ) {
    throw new Error('All elements with "can-truncate" class must have a bg-* class')
  }

  const rootRef = React.useRef(null)
  const [childFullyVisibleStates, setChildFullyVisibleStates] = React.useState(
    Array.from({ length: React.Children.count(children) }, () => false)
  )

  return (
    <Tippy
      {...{
        disabled: childFullyVisibleStates.every(Boolean),
        content: children,
        placement: 'bottom',
        maxWidth: 400,
        trigger: 'mouseenter focus',
        delay: 100,
        arrow: true,
        duration: 0,
        popperOptions: { strategy: 'fixed' },
        offset: [0, 5],
        interactive: false,
        className: 'popover-default'
      }}
    >
      <div
        {...{
          ref: rootRef,
          className:
            'flex items-center whitespace-nowrap contain-content bg-green-500 overflow-hidden'
        }}
      >
        {React.Children.map(children, (child, i) => (
          <ElementTruncator
            {...{ setChildFullyVisibleStates, childIndex: i, rootRef, key: i }}
          >
            {child}
          </ElementTruncator>
        ))}
      </div>
    </Tippy>
  )
}

export default ErrorBoundary(Truncator)
