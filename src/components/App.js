import { Divider, Stack } from '@chakra-ui/core'
import React, { useRef } from 'react'
import { useCreateEntry } from '../mutations'
import { useGetEntries } from '../queries'
import Entry from './Entry'
import Form from './Form'
import Header from './Header'

const App = () => {

  const { createEntry } = useCreateEntry()
  const { data, isSuccess } = useGetEntries()
  const formRef = useRef()

  const submitForm = () => {
    createEntry({ stringValue: formRef.current.value })
    formRef.current.value = ''
  }

  return (
    <Stack height="calc(100vh - 1.5rem)" spacing={3} shouldWrapChildren>
      <Header />
      <Form ref={formRef} submit={submitForm} />
      <Divider borderColor="gray.400" mr={3} ml={3} />
      {
        isSuccess &&
        <Stack spacing={4} overflowY="auto" shouldWrapChildren ml={3} mr={3} pb={3}>
          {
            data.map(datum => (
              <Entry
                key={datum?.name}
                content={datum?.fields?.content?.stringValue}
                date={datum?.createTime}
              />
            ))
          }
        </Stack>
      }
    </Stack>
  )
}

export default App
