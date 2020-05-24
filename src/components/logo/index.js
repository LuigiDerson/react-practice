import React from 'react'
import styled from 'styled-components'

import { Luigi, Derson } from './logo'

const Logo = () => (
  <Container>
    <LuigiWrapper>
      <Luigi />
    </LuigiWrapper>
    <DersonWrapper>
      <Derson />
    </DersonWrapper>
  </Container>
)

export default Logo

const LuigiWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  height: 3rem;
  width: 20px;
  transition: width 320ms cubic-bezier(0.25, 1, 0.25, 1);
`

const DersonWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  height: 3rem;
  width: 20px;
  left: 7px;
  transition: width 300ms cubic-bezier(0.25, 1, 0.5, 1),
    left 420ms cubic-bezier(0.25, 1, 0.5, 1);
`

const Container = styled.div`
  display: flex;
  position: relative;
  height: 3rem;
  overflow: hidden;
  width: 26px;
  cursor: pointer;

  transition: width 450ms cubic-bezier(0.25, 1, 0.5, 1);

  &:hover {
    width: 286px;

    & > ${LuigiWrapper} {
      width: 110px;
      transition: width 400ms cubic-bezier(0.25, 1, 0.5, 1);
    }

    & > ${DersonWrapper} {
      transition: width 400ms cubic-bezier(0.25, 1, 0.5, 1),
        left 420ms cubic-bezier(0.25, 1, 0.5, 1);
      width: 161px;
      left: 125px;
    }
  }
`
