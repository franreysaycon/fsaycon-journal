import React from 'react'
import PropTypes from 'prop-types'
import { Box, IconButton, Text, useTheme } from '@chakra-ui/core'
import convertTimestampText from '../lib/convertTimestampText'

const Entry = ({ content, date }) => {

    const theme = useTheme()
    const grayColor = theme.colors.gray['400']

    return (    
        <Box
            d="flex"
            alignItems="center"
            mr={3}
            ml={3}
            p={4}
            boxShadow={`3px 3px 3px ${grayColor}`}
            border={`1px solid ${grayColor}`}
        >
            <Box d="flex" flexDirection="column" flexGrow={1}>
                <Text fontSize="xl" color="blue.700">{content}</Text>
                <Text fontSize="sm">{convertTimestampText(date)}</Text>
            </Box>
            <Box d="flex">
                <IconButton
                    bg="red.400"
                    size="sm"
                    aria-label="Delete thoughts"
                    icon="close"
                    color="white"
                    alignSelf="flex-end"
                    borderRadius="50%"
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
