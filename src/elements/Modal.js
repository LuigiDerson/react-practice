import React, { Component } from 'react'
import styled from 'styled-components'
import { Portal } from 'utilities'
import Icon from './Icon'
import Card from './Cards'

export default function Modal(props) {
  const { children, on, toggle } = props
  return (
    <Portal>
      {on && (
        <ModalWrapper>
          <ModalCard>
            <CloseButton onClick={toggle}>
              <Icon name="close" />
            </CloseButton>
            <div>{children}</div>
          </ModalCard>
          <Background onClick={toggle} />
        </ModalWrapper>
      )}
    </Portal>
  )
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalCard = styled(Card)`
  position: relative;
  margin-bottom: 20px;
  min-width: 320px;
  z-index: 10;
`

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  padding: 10px;
  cursor: pointer;
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.45;
`
