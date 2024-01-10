import { Box } from "@chakra-ui/react"
import React from "react"

const Sidebar = () => {
  return (
    <Box
    height={"100vh"} borderRight={"1px solid"}
    borderColor={"whiteAlpha.300"}
    py={8}
    position={"sticky"}
    top={0}
    left={0}
    px={{base:2, md:4}}>Sidebar</Box>
  )
}

export default Sidebar