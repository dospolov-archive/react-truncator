import React from 'react'
import { useIntersectionObserver } from 'usehooks-ts'

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

  React.useEffect(() => {
    setChildFullyVisibleStates(prevStates =>
      prevStates.map((state, i) => (i === childIndex ? isFullyVisible : state))
    )
  }, [isHidden, isTruncated])

  return (
    <span
      {...{
        className: `relative overflow-hidden h-full z-10 shrink-0 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        }`
      }}
    >
      <span {...{ className: `absolute z-10 left-0 top-0 truncate max-w-full` }}>
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

export default ElementTruncator
