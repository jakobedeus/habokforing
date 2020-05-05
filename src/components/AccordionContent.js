import * as React from "react"
import { motion } from "framer-motion"

export const AccordionContent = ({ props }) => {
  return (
    <div
    // variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    >
      {props}
    </div>
  )
}
