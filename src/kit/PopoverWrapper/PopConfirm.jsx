import React from 'react'
import filter from 'just-filter-object'
import reduce from 'just-reduce-object'
import Tippy from '@tippyjs/react'
import Button from 'kit/Button'
import { TIPPY_EVENTS } from './constants'
import Icon from 'kit/Icon'

const PopConfirm = React.forwardRef(({ popConfirm, cmp, onClick, ...rest }, ref) => {
  const [isVisible, setIsVisible] = React.useState(false)

  if (!popConfirm.content) throw new Error('popConfirm _content_ is required')
  if (!popConfirm.onConfirm) throw new Error('popConfirm _onConfirm_ is required')

  const tippyEvents = reduce(
    filter(popConfirm, key => TIPPY_EVENTS.includes(key)),
    (acc, key, value, index, keys) => {
      acc[key] = popConfirm[key]

      return acc
    },
    {}
  )

  return (
    <Tippy
      {...{
        content: (
          <>
            <div {...{ className: 'p-4 min-w-[305px] flex items-start space-x-4' }}>
              <Icon
                {...{ name: 'HiExclamation', className: 'text-orange-500 w-5 h-5' }}
              />
              <div {...{ className: 'w-full' }}>{popConfirm.content}</div>
            </div>
            <div {...{ className: 'py-2 px-3 flex space-x-2 justify-end bg-gray-50' }}>
              {popConfirm.noBtn ? (
                React.cloneElement(popConfirm.noBtn, {
                  onClick: props => {
                    setIsVisible(false)
                    popConfirm.noBtn.props?.onClick?.(props)
                  }
                })
              ) : (
                <Button {...{ onClick: () => setIsVisible(false) }}>Cancel</Button>
              )}
              {popConfirm.yesBtn ? (
                React.cloneElement(popConfirm.yesBtn, {
                  onClick: props => {
                    setIsVisible(false)
                    popConfirm.yesBtn.props?.onClick?.(props)
                  }
                })
              ) : (
                <Button
                  {...{
                    type: 'primary',
                    onClick: () => {
                      popConfirm.onConfirm()
                      setIsVisible(false)
                    }
                  }}
                >
                  Yes
                </Button>
              )}
            </div>
          </>
        ),
        placement: popConfirm.placement || 'left',
        appendTo: () => popConfirm.elementAppendTo || document.body,
        visible: isVisible,
        delay: 0,
        arrow: popConfirm.arrow !== undefined ? popConfirm.arrow : true,
        duration: 0,
        onHidden: () => setIsVisible(false),
        onClickOutside: () => setIsVisible(false),
        offset: popConfirm.offset || [0, 5],
        interactive: true,
        className: 'popconfirm-default',
        ...tippyEvents
      }}
    >
      {React.cloneElement(cmp, {
        ref,
        onClick: props => {
          setIsVisible(true)
          onClick?.(props)
        },
        ...rest
      })}
    </Tippy>
  )
})

export default PopConfirm
