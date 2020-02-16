import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import AccordionContext from './AccordionContext'
import AccordionSection from './AccordionSection'

export default function Accordion({ children, singleOpen }) {
  const [state, setState] = useState({})

  useEffect(() => {
    children.forEach(child => {
      const { label } = child.props
      setState(currentState => ({ ...currentState, [label]: false }))
    })
  }, [children])

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
      {children.map(child => {
        const { label, children: content } = child.props
        return (
          <AccordionSection key={label} label={label}>
            {content}
          </AccordionSection>
        )
      })}
    </AccordionContext.Provider>
  )
}

Accordion.defaultProps = {
  singleOpen: false,
}

Accordion.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  singleOpen: PropTypes.bool,
}
