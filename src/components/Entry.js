import React from 'react'
import PropTypes from 'prop-types'
import { Box, IconButton, Text } from '@chakra-ui/core'

const Entry = ({ content, date }) => {
    return (    
        <Box d="flex" alignItems="center">
            <Box d="flex" flexDirection="column" flexGrow={1}>
                <Text fontSize="xl" color="blue.700">{content}</Text>
                <Text fontSize="sm">{date}</Text>
            </Box>
            <Box d="flex">
                <IconButton
                    bg="red.400"
                    size="sm"
                    aria-label="Delete thoughts"
                    icon="close"
                    color="white"
                    alignSelf="flex-end"
                />
            </Box>
        </Box>
    )
}

Entry.propTypes = {
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}

export default Entry
