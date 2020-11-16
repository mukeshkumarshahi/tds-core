import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing } from '@tds/shared-styles'
import { helveticaNowExtraLight, wordBreak, baseSupSubScripts } from '@tds/shared-typography'
import { colorWhite, colorSecondary } from '@tds/core-colours'
import { media } from '@tds/core-responsive'

import { safeRest } from '@tds/util-helpers'

const StyledDisplayHeading = styled.h1(
  spacing.noSpacing,
  wordBreak,
  helveticaNowExtraLight,
  ({ invert }) => ({
    color: invert ? colorWhite : colorSecondary,
    fontSize: '2.75rem', // 44px
    lineHeight: '1.09', // 48px
    letterSpacing: '0px',
    ...media.from('md').css({
      fontSize: '4.5rem', // 72px
      lineHeight: '1.11', // 80px
    }),
  }),
  {
    sup: {
      ...baseSupSubScripts,
      fontSize: '1.25rem',
      top: '-1.2em',
      ...media.from('md').css({
        top: '-2.2em',
      }),
    },
  }
)

/**
 * Large page titles. Renders an HTML `<h1>` element.
 *
 * @version ./package.json
 */
const DisplayHeading = ({ invert, children, ...rest }) => (
  <StyledDisplayHeading {...safeRest(rest)} invert={invert}>
    {children}
  </StyledDisplayHeading>
)

DisplayHeading.propTypes = {
  /**
   * Invert the text color to appear light on dark backgrounds.
   */
  invert: PropTypes.bool,
  /**
   * The text. Can be text, other components, or HTML elements.
   */
  children: PropTypes.node.isRequired,
}

DisplayHeading.defaultProps = {
  invert: false,
}

export default DisplayHeading
