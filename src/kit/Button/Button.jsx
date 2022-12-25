import React from 'react'
import Icon from 'kit/Icon'
import PopoverWrapper from 'kit/PopoverWrapper'

const ButtonCmp = React.forwardRef(
  (
    {
      children,
      type = 'default', // 'default', 'primary', 'danger', 'link'
      iconClassName = '',
      disabled = false,
      isLoading = false,
      loadingText = 'Loading...',
      leadingIconName = null,
      trailingIconName = null,
      onClick = null,
      onClickAsync = null,
      className = '',
      ...rest
    },
    ref
  ) => {
    const [isButtonPressed, setIsButtonPressed] = React.useState(false)
    const isLoadingState = isLoading || isButtonPressed

    return (
      <button
        {...{
          ref,
          type: 'button',
          className: `button-initial group ${
            disabled
              ? 'disabled'
              : type === 'danger'
              ? 'danger'
              : type === 'primary'
              ? 'primary'
              : type === 'link'
              ? 'link'
              : 'default'
          } ${isLoadingState ? 'loading' : ''} ${className} ${
            leadingIconName ? 'pl-2.5 pr-3' : ''
          } ${trailingIconName ? 'pr-2.5 pl-3' : ''}`,
          disabled: disabled || isLoadingState,
          onClick: () => {
            if (!!onClickAsync) {
              setIsButtonPressed(true)

              return onClickAsync().finally(() => setIsButtonPressed(false))
            }

            return onClick()
          },
          ...rest
        }}
      >
        {isLoadingState ? (
          <>
            <Icon
              {...{
                name: 'Spin',
                className: type !== 'default' && !disabled ? 'text-white' : ''
              }}
            />
            <span>{loadingText}</span>
          </>
        ) : (
          <>
            {leadingIconName && (
              <Icon
                {...{
                  name: leadingIconName,
                  className: `${disabled ? 'text-gray-300' : iconClassName}`
                }}
              />
            )}
            {children && <span>{children}</span>}
            {trailingIconName && (
              <Icon
                {...{
                  name: trailingIconName,
                  className: `h-4 w-4 ${disabled ? 'text-gray-300' : iconClassName}`
                }}
              />
            )}
          </>
        )}
      </button>
    )
  }
)

const Button = props => <PopoverWrapper {...props} {...{ cmp: <ButtonCmp /> }} />

export default Button
