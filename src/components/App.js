import { Divider, Stack } from '@chakra-ui/core'
import React from 'react'
import Entry from './Entry'
import Form from './Form'
import Header from './Header'


const data = [
  {
    "content": {
      "stringValue": "React Query rulez!"
    },
    "date": {
        "timestampValue": "thought of a few minutes ago."
    }
  },
  {
    "content": {
      "stringValue": "Used Firebase ;)"
    },
    "date": {
        "timestampValue": "thought of a few hours ago."
    }
  },
  {
    "content": {
      "stringValue": "Created with ChakraUI <3"
    },
    "date": {
        "timestampValue": "thought of a few hours ago."
    }
  },
  {
    "content": {
      "stringValue": "Lightning talk incoming :D"
    },
    "date": {
        "timestampValue": "thought of a few days ago."
    }
  }
]

const App = () => (
  <Stack height="calc(100vh - 1.5rem)" spacing={3} shouldWrapChildren>
    <Header />
    <Form />
    <Divider borderColor="gray.400" mr={3} ml={3} />
    <Stack spacing={4} overflowY="auto" shouldWrapChildren ml={3} mr={3} pb={3}>
      {
        data.map(datum => (
          <Entry
            content={datum?.content?.stringValue}
            date={datum?.date?.timestampValue}
          />
        ))
      }
    </Stack>
  </Stack>
)

export default App
