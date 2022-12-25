import React from 'react'
import Popover from './Popover'
import PopConfirm from './PopConfirm'

const PopoverWrapper = ({ popover = null, popConfirm = null, cmp, onClick, ...rest }) => {
  if (popover && !popConfirm) return <Popover {...{ cmp, popover, onClick, ...rest }} />
  if (popConfirm && !popover)
    return <PopConfirm {...{ cmp, popConfirm, onClick, ...rest }} />
  if (popover && popConfirm)
    return (
      <PopConfirm
        {...{
          cmp: <Popover {...{ cmp, popover, onClick, ...rest }} />,
          popConfirm,
          onClick,
          ...rest
        }}
      />
    )

  return React.cloneElement(cmp, { onClick, ...rest })
}

export default PopoverWrapper
