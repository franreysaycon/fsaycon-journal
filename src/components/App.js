import { Divider, Stack } from '@chakra-ui/core'
import React from 'react'
import { useEntryQuery } from '../queries'
import Entry from './Entry'
import Form from './Form'
import Header from './Header'

const App = () => {

  const { data, isSuccess } = useEntryQuery()
  console.log(data)

  return (
    <Stack height="calc(100vh - 1.5rem)" spacing={3} shouldWrapChildren>
      <Header />
      <Form />
      <Divider borderColor="gray.400" mr={3} ml={3} />
      {
        isSuccess &&
        <Stack spacing={4} overflowY="auto" shouldWrapChildren ml={3} mr={3} pb={3}>
          {
            data.map(datum => (
              <Entry
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
