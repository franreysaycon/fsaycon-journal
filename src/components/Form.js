import { Button, Stack, Textarea } from '@chakra-ui/core'
import React from 'react'

const Form = () => (
    <Stack spacing={3}>
        <Textarea placeholder="Type what you're thinking..." resize={false}/>
        <Button variantColor="blue" alignSelf="flex-end">Submit</Button>
    </Stack>
)

export default Form
