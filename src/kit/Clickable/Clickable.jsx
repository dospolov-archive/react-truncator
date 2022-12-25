import React from 'react'
import Icon from 'kit/Icon'
import PopoverWrapper from 'kit/PopoverWrapper'
import LinkWrapper from 'kit/LinkWrapper'
import { useHover } from 'usehooks-ts'

const ClickableCmp = React.forwardRef(
  (
    {
      disabled,
      onClick = null,
      linkTo = '',
      linkState,
      leadingIconName = null,
      hoverLeadingIconName = null,
      trailingIconName = null,
      hoverTrailingIconName = null,
      wrapperClassName = '',
      labelClassName = 'flex-auto max-w-full',
      className = '',
      tabIndex,
      children
    },
    ref
  ) => {
    const isHovered = useHover(ref)

    return (
      <LinkWrapper
        {...{
          linkTo: disabled ? '' : linkTo,
          onClick: disabled ? null : onClick,
          linkState,
          className: `clickable-initial group ${disabled ? 'disabled' : 'enabled'} ${
            children ? 'has-children' : ''
          } ${wrapperClassName}`,
          tabIndex,
          ref
        }}
      >
        {leadingIconName && (
          <Icon
            {...{
              name:
                isHovered && hoverLeadingIconName
                  ? hoverLeadingIconName
                  : leadingIconName,
              className: `clickable-initial-icon ${className}`
            }}
          />
        )}
        {children && <span {...{ className: labelClassName }}>{children}</span>}
        {trailingIconName && (
          <Icon
            {...{
              name:
                isHovered && hoverTrailingIconName
                  ? hoverTrailingIconName
                  : trailingIconName,
              className: `clickable-initial-icon ${className}`
            }}
          />
        )}
      </LinkWrapper>
    )
  }
)

const Clickable = props => <PopoverWrapper {...props} {...{ cmp: <ClickableCmp /> }} />

export default Clickable
