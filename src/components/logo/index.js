import React from 'react'
import styled from 'styled-components'

import { Luigi, Derson } from './logo'

const Logo = () => {
  return (
    <Container>
      <LuigiWrapper>
        <Luigi />
      </LuigiWrapper>
      <DersonWrapper>
        <Derson />
      </DersonWrapper>
    </Container>
  )
}

export default Logo

const LuigiWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  height: 3rem;
  width: 20px;
  transition: width 380ms linear;
`

const DersonWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  height: 3rem;
  width: 20px;
  left: 7px;
  transition: width 500ms linear, left 500ms linear;
`

const Container = styled.div`
  display: flex;
  position: relative;
  height: 3rem;
  overflow: hidden;
  width: 26px;
  cursor: pointer;
  background: gray;
  transition: width 500ms linear;

  &:hover {
    width: 286px;

    & > ${LuigiWrapper} {
      width: 110px;
      transition: width 500ms linear;
    }

    & > ${DersonWrapper} {
      width: 200px;
      left: 125px;
    }
  }
`
