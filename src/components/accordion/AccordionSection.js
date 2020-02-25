import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import AccordionContext from './AccordionContext'
import Chevron from './Chevron'

const AccordionSection = ({ label, children }) => {
  const { [label]: isOpen, toggleSection } = useContext(AccordionContext)
  const toggleOpen = () => toggleSection(label)

  return (
    <SectionContainer>
      <SectionHeader open={isOpen} onClick={toggleOpen}>
        {label} <Chevron open={isOpen} />
      </SectionHeader>
      <ContentContainer>
        <SectionContent open={isOpen}>{children}</SectionContent>
      </ContentContainer>
    </SectionContainer>
  )
}

AccordionSection.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
}

export default AccordionSection

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 0.8rem 1.2rem;
  border-bottom: 1px solid #c9c9c9;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${({ open }) => (open ? '#fff' : '#f2f2f2')};
  }
`

const transition = {
  open: 'margin-top 0.35s, background 0.35s',
  closed: 'opacity 0.35s linear, visibility 0.35s, margin-top 0.35s linear',
}

const SectionContent = styled.div`
  opacity: ${({ open }) => (open ? '1' : '0')};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: ${({ open }) => (open ? transition.open : transition.closed)};
  margin-top: ${({ open }) => (open ? '0' : '-100%')};
  background: #d9d9d9;
  padding: 1.2rem 1.2rem;
`

const ContentContainer = styled.div`
  overflow: hidden;
`

const SectionContainer = styled.div`
  &:last-child ${SectionHeader} {
    border-bottom: 0;
  }
`
