import React from 'react'
import { useIntersectionObserver } from 'usehooks-ts'
import Tippy from '@tippyjs/react'
import ErrorBoundary from 'kit/ErrorBoundary'

const HIDE_LOWER_THAN = 0.2
const TRUNCATE_LOWER_THAN = 1.0

const ElementTruncator = ({
  setChildFullyVisibleStates,
  childIndex,
  rootRef,
  children
}) => {
  const textWithOverflowRef = React.useRef(null)
  const entry = useIntersectionObserver(textWithOverflowRef, {
    root: rootRef.current,
    threshold: [HIDE_LOWER_THAN, TRUNCATE_LOWER_THAN]
  })

  const isHidden = !entry || entry.intersectionRatio < HIDE_LOWER_THAN
  const isTruncated = !isHidden && entry.intersectionRatio < TRUNCATE_LOWER_THAN
  const isFullyVisible = !isHidden && !isTruncated

  let bgClass = ''
  const shouldTextTruncate = children.props?.className.includes('can-truncate')
  if (shouldTextTruncate) {
    bgClass = children.props?.className.match(/(bg.+00)/gi)?.[0]
  }

  React.useEffect(() => {
    setChildFullyVisibleStates(prevStates =>
      prevStates.map((state, i) => (i === childIndex ? isFullyVisible : state))
    )
  }, [isHidden, isTruncated])

  // find a way to set up width
  return (
    <span
      {...{
        className: `relative overflow-hidden h-full z-10 shrink-0 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        } ${bgClass}`
      }}
    >
      <span
        {...{
          className: `absolute z-10 left-0 top-0 truncate max-w-full`
        }}
      >
        {shouldTextTruncate && isTruncated && (
          <span
            {...{
              className: `px-1 text-black fixed align-middle right-0 z-20 ${bgClass}`
            }}
          >
            ...
          </span>
        )}
        {children}
      </span>
      <span
        {...{
          className: `whitespace-nowrap w-full opacity-0`,
          ref: textWithOverflowRef
        }}
      >
        {children}
      </span>
    </span>
  )
}

const Truncator = ({ children }) => {
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
  const [, setChildFullyVisibleStates] = React.useState(
    Array.from({ length: React.Children.count(children) }, () => false)
  )

  return (
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
  )

  const isTruncated = false
  const textWithOverflowRef = false

  return (
    <Tippy
      {...{
        disabled: !isTruncated,
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
          className: `w-full relative text-clip max-w-full overflow-hidden truncate bg-gray-500`,
          ref: rootRef
        }}
      >
        <span {...{ className: 'absolute z-10 left-0 top-0 truncate w-full' }}>
          {children}
        </span>
        <span
          {...{
            className: `whitespace-nowrap w-full opacity-0`,
            ref: textWithOverflowRef
          }}
        >
          {children}
        </span>
      </div>
    </Tippy>
  )
}

export default ErrorBoundary(Truncator)
