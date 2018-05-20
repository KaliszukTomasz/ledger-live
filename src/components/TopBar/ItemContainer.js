// @flow

import styled from 'styled-components'

import Box from 'components/base/Box'

export default styled(Box).attrs({
  px: 2,
  ml: 0,
  justifyContent: 'center',
  cursor: p => (p.interactive ? 'pointer' : 'default'),
})`
  opacity: 0.7;
  &:hover {
    opacity: ${p => (p.interactive ? 0.85 : 0.7)};
  }
  &:active {
    opacity: ${p => (p.interactive ? 1 : 0.7)};
  }
`
