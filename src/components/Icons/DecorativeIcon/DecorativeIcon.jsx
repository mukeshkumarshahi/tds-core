import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon'

/**
 * An icon used for visual aesthetics only.
 *
 * <span class="docs--badge__new">new!</span> <span class="docs--badge__version">v0.24.0</span>
 */
const DecorativeIcon = ({ symbol, variant, size, ...rest }) => (
  <Icon {...rest} symbol={symbol} variant={variant} size={size} aria-hidden="true" />
)

DecorativeIcon.propTypes = {
  /**
   * Name of the icon symbol.
   */
  symbol: PropTypes.oneOf([
    'caretDown',
    'caretUp',
    'checkmark',
    'chevron',
    'leftChevron',
    'exclamationPointCircle',
    'expander',
    'hamburger',
    'location',
    'minus',
    'plus',
    'questionMarkCircle',
    'spyglass',
    'times'
  ]).isRequired,
  /**
   * The appearance of the Icon.
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'inverted',
    'error'
  ]),
  /**
   * The icon size in pixels.
   */
  size: PropTypes.oneOf([16, 24, 48])
}

DecorativeIcon.defaultProps = {
  variant: undefined,
  size: 24
}

export default DecorativeIcon
