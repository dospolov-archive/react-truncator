import React from 'react'
import Tippy from '@tippyjs/react'
import { TIPPY_EVENTS } from './constants'

const Popover = React.forwardRef(({ popover, cmp, onClick, ...rest }, ref) => {
  if (!popover.content) throw new Error('popover _content_ is required')
  if (popover.interactive === undefined)
    throw new Error('popover _interactive_ is required')

  const tippyEvents = Object.keys(popover)
    .filter(propKey => TIPPY_EVENTS.includes(propKey))
    .reduce((acc, propKey) => {
      acc[propKey] = popover[propKey]

      return acc
    }, {})

  if (popover.interactive === undefined)
    throw new Error('popover _interactive_ is required')

  if (popover.content === undefined) throw new Error('popover _content_ is required')

  if (popover.trigger !== undefined && popover.isVisible !== undefined)
    throw new Error('popover _trigger_ and _isVisible_ are mutually exclusive')

  // IF popover.isVisible !== undefined THEN IT'S controlled mode
  return (
    <Tippy
      {...{
        content: popover.content,
        placement: popover.placement || 'top',
        appendTo: () => popover.elementAppendTo || document.body,
        visible: popover.isVisible,
        maxWidth: 400,
        trigger:
          popover.isVisible !== undefined
            ? undefined
            : popover.trigger === undefined
            ? 'mouseenter focus'
            : popover.trigger,
        onClickOutside:
          popover?.trigger === 'click' || popover.setIsVisible === undefined
            ? undefined
            : () => popover.setIsVisible?.(false),
        delay: 100,
        arrow: popover.arrow !== undefined ? popover.arrow : true,
        duration: 0,
        popperOptions: { strategy: popover.popperStrategy || 'fixed' },
        offset: popover.offset || [0, 5],
        interactive: popover.interactive,
        className: 'popover-default',
        ...tippyEvents
      }}
    >
      {React.cloneElement(cmp, { ref, onClick, ...rest })}
    </Tippy>
  )
})

export default Popover
