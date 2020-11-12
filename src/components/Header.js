import React from 'react'
import { Box, Heading, Image } from "@chakra-ui/core";

const Header = () => (
    <Box
        pl={3}
        pr={3}
        pt={6}
        pb={6}
        bg="blue.500"
        borderBottomRightRadius="30px"
        d="flex"
        alignItems="center"
    >
        <Heading fontFamily="Cabin" color="white" mr={2}>ANY THOUGHTS?</Heading>
        <Image 
            size="2rem"
            objectFit="cover"
            src={`${process.env.PUBLIC_URL}/thinking.png`}
            alt="Thinking Logo"
        />
    </Box>
)

export default Header
