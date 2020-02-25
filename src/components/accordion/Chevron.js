import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Chevron({ open }) {
  const label = open ? 'Expanded menu' : 'Collapsed menu'
  return (
    <SVG aria={label} open={open}>
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
    </SVG>
  )
}

Chevron.defaultProps = {
  open: false,
}

Chevron.propTypes = {
  open: PropTypes.bool,
}

const SVG = styled.svg.attrs(props => ({
  viewBox: '0 0 24 24',
  'aria-label': props.aria,
}))`
  fill: black;
  height: 1.25rem;
  width: 1.25rem;
  transform: ${({ open }) => (open ? null : 'rotate(180deg)')};
  transition: transform 0.35s;
`
