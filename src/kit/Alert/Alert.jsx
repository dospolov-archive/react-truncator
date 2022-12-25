import React from 'react'
import Icon from 'kit/Icon'
import Clickable from 'kit/Clickable'

const Alert = ({
  content,
  linkLabel,
  linkTo = '',
  className = '',
  color = 'blue',
  labelClassName = '',
  linkIconClassName = '',
  iconClassName = 'text-blue-400',
  trailingIconName = 'HiOutlineArrowSmRight',
  leadingIconName = 'HiInformationCircle'
}) => {
  return (
    <div {...{ className: `alert-default alert-${color} ${className}` }}>
      <div {...{ className: 'flex space-x-2 grow items-center p-1.5' }}>
        <Icon {...{ className: iconClassName, name: leadingIconName }} />
        <p {...{ className: 'font-medium' }}>{content}</p>
      </div>
      {linkLabel && linkTo && (
        <div>
          <Clickable
            {...{
              linkTo,
              trailingIconName,
              labelClassName,
              className: linkIconClassName
            }}
          >
            {linkLabel}
          </Clickable>
        </div>
      )}
    </div>
  )
}

export default Alert
