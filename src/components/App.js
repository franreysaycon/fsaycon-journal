import { Stack } from '@chakra-ui/core'
import React from 'react'
import Entry from './Entry'
import Form from './Form'
import Header from './Header'


const data = [
  {
    "content": {
      "stringValue": "Hello World"
    },
    "date": {
        "timestampValue": "2020-10-31T16:00:00Z"
    }
  },
  {
    "content": {
      "stringValue": "Hello World"
    },
    "date": {
        "timestampValue": "2020-10-31T16:00:00Z"
    }
  },
  {
    "content": {
      "stringValue": "Hello World"
    },
    "date": {
        "timestampValue": "2020-10-31T16:00:00Z"
    }
  }
]

const App = () => (
  <Stack height="calc(100vh - 1.5rem)" spacing={3} margin={3} shouldWrapChildren>
    <Header />
    <Form />
    <Stack spacing={4} overflowY="auto" shouldWrapChildren>
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
