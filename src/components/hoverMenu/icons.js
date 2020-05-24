import React from 'react'
import styled from 'styled-components'

export const UserProfile = () => (
  <SVG viewBox="0 0 24 24">
    <path
      d="M21.5 22v0a6.547 6.547 0 00-6.547-6.547H9.047A6.547 6.547 0 002.5 22v0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle
      cx="12"
      cy="7.5"
      r="4.75"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </SVG>
)

export const Search = () => (
  <SVG viewBox="0 0 24 24">
    <circle
      cx="11.063"
      cy="10.064"
      r="7.625"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      d="M16.093 16.033l5 5"
    />
  </SVG>
)

const SVG = styled.svg`
  height: 24px;
  width: 24px;
`
