import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import AccordionContext from './AccordionContext'
import AccordionSection from './AccordionSection'

export default function Accordion({ children, singleOpen, defaultActive }) {
  const [state, setState] = useState({})

  useEffect(() => {
    children.forEach(child => {
      const { label } = child.props
      setState(currentState => ({ ...currentState, [label]: false }))
    })
  }, [children])

  useEffect(() => {
    const activeIndex = parseInt(defaultActive, 10)
    const isValidIndex = activeIndex < children.length

    if (defaultActive && isValidIndex) {
      const activeSection = children[activeIndex]
      const { label } = activeSection.props
      setState(s => ({ ...s, [label]: true }))
    }
  }, [children, defaultActive])

  const toggleSection = label => {
    const isOpen = state[label]
    if (singleOpen) {
      setState({ [label]: !isOpen })
    } else {
      setState({ ...state, [label]: !isOpen })
    }
  }
  return (
    <AccordionContext.Provider value={{ ...state, toggleSection }}>
      <StyledAccordion>
        {children.map(child => {
          const { label, children: content } = child.props
          return (
            <AccordionSection key={label} label={label}>
              {content}
            </AccordionSection>
          )
        })}
      </StyledAccordion>
    </AccordionContext.Provider>
  )
}

Accordion.defaultProps = {
  singleOpen: false,
  defaultActive: null,
}

Accordion.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  singleOpen: PropTypes.bool,
  defaultActive: PropTypes.string,
}

const StyledAccordion = styled.div`
  border: thin solid #c9c9c9;
  max-width: 45rem;
  margin: 0 auto;
  border-radius: 6px;
  overflow: hidden;
`
