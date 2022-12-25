import React from 'react'
import SVG from 'react-inlinesvg'
import * as HeroIcons from 'react-icons/hi'
import PopoverWrapper from 'kit/PopoverWrapper'

const IconCmp = React.forwardRef(
  ({ name, wrapperClassName = '', className = '', onClick = null }, ref) => {
    const iconClassName = `icon-initial ${
      name === 'Spin' ? 'animate-spin' : ''
    } ${className}`

    return (
      <span {...{ ref, onClick, className: wrapperClassName }}>
        {HeroIcons[name] ? (
          HeroIcons[name]({ className: iconClassName })
        ) : (
          <SVG
            {...{
              className: iconClassName,
              src: `/custom-icons/${name}.svg`,
              uniquifyIDs: true
            }}
          />
        )}
      </span>
    )
  }
)

const Icon = props => <PopoverWrapper {...props} {...{ cmp: <IconCmp /> }} />

export default Icon
