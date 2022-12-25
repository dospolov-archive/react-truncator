import React from 'react'
import Tippy from '@tippyjs/react'
import ErrorBoundary from 'kit/ErrorBoundary'
import ElementTruncator from './ElementTruncator'

const Truncator = ({ rootIndex, children }) => {
  const rootRef = React.useRef(null)
  const [childFullyVisibleStates, setChildFullyVisibleStates] = React.useState(
    Array.from({ length: React.Children.count(children) }, () => false)
  )

  const somethingIsTruncated = !childFullyVisibleStates.every(Boolean)

  return (
    <Tippy
      {...{
        disabled: !somethingIsTruncated,
        content: (
          <div {...{ className: '[&>*]:inline-block [&>*]:align-top' }}>{children}</div>
        ),
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
          className: `flex items-center whitespace-nowrap contain-content border-4 ${
            somethingIsTruncated ? 'border-red-800' : 'border-green-800'
          } overflow-hidden`
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
