import { Button, Stack, Textarea } from '@chakra-ui/core'
import React, { forwardRef } from 'react'

const Form = ({submit} , ref) => (
    <Stack spacing={3} mr={3} ml={3}>
        <Textarea ref={ref} placeholder="Type what you're thinking..." resize={false}/>
        <Button variantColor="blue" alignSelf="flex-end" onClick={submit}>Submit</Button>
    </Stack>
)

export default forwardRef(Form)
