import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import AccordionContext from './AccordionContext'

const AccordionSection = ({ label, children }) => {
  const { [label]: isOpen, toggleSection } = useContext(AccordionContext)
  const toggleOpen = () => toggleSection(label)

  return (
    <SectionContainer>
      <SectionHeader onClick={toggleOpen}>
        {label} <span>&gt;</span>
      </SectionHeader>
      <SectionContent open={isOpen}>{children}</SectionContent>
    </SectionContainer>
  )
}

AccordionSection.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
}

export default AccordionSection

const SectionHeader = styled.div`
  border: thin solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SectionContent = styled.div`
  display: ${({ open }) => (open ? null : 'none')};
`

const SectionContainer = styled.div`
  background-color: lightsalmon;
  max-width: 45rem;
  margin: 0 auto;
`
