import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AccordionContent } from "./AccordionContent"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCoffee,
  faPlusCircle,
  faMinusCircle,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons"

interface AccordionProps {
  isOpen: boolean
}

const StyledAccordion = styled(motion.div)<AccordionProps>`
  height: 60px;
  margin-bottom: 1rem;
  border-radius: 6px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => (props.isOpen ? "white" : "#4477b2")};
  border: ${props => (props.isOpen ? "none" : "1px solid #4477b2")};
  cursor: pointer;

  p {
    margin: 0;
    font-weight: bold;
  }
`

export const Accordion = ({ index, expanded, setExpanded, item }) => {
  const isOpen = index === expanded
  return (
    <>
      <StyledAccordion
        initial={false}
        animate={{ backgroundColor: isOpen ? "#4477b2" : "white" }}
        onClick={() => setExpanded(isOpen ? false : index)}
        isOpen={isOpen}
      >
        <p>{item.title}</p>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </StyledAccordion>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0, overflow: "hidden" },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <AccordionContent props={item.children} />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

export const Accordions = ({ children }) => {
  const [expanded, setExpanded] = useState<false | number>(0)

  return children.map((item: any, index: any) => {
    return (
      <Accordion
        index={item.props.id}
        key={index}
        expanded={expanded}
        setExpanded={setExpanded}
        item={item.props}
      />
    )
  })
}
