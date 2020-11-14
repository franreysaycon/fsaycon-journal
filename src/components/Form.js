import { Button, Stack, Textarea } from '@chakra-ui/core'
import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Form = ({submit} , ref) => (
    <Stack spacing={3} mr={3} ml={3}>
        <Textarea ref={ref} placeholder="Type what you're thinking..." resize={false}/>
        <Button variantColor="blue" alignSelf="flex-end" onClick={submit}>Submit</Button>
    </Stack>
)

Form.propTypes = {
    submit: PropTypes.func.isRequired,
}

export default forwardRef(Form)
