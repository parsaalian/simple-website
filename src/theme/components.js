import React from 'react'
import { Heading, Text } from 'rebass'
import theme from './theme'

export default {
    h1: ({ children }) => (
        <Heading
            theme={theme}
            fontFamily="monospace"
            fontSize={[5, 5, 6, 6]}
            textAlign="center"
            color="primary"
            my={4}
        >
            {children}
        </Heading>
    ),
    h2: ({ children }) => (
        <Heading
            id={children.replace(' ', '_')}
            theme={theme}
            fontFamily="monospace"
            fontSize={[4, 4, 5, 5]}
            textAlign="left"
            color="secondary"
            my={3}
        >
            {children}
        </Heading>
    ),
    h3: ({ children }) => (
        <Heading
            theme={theme}
            fontFamily="monospace"
            fontSize={[3, 3, 4, 4]}
            textAlign="left"
            color="text"
            my={3}
        >
            {children}
        </Heading>
    ),
    p: ({ children }) => (
        <Text theme={theme} fontFamily="monospace">
            {children}
        </Text>
    ),
    li: ({ children }) => (
        <Text theme={theme} fontFamily="monospace" my={2}>
            <li>{children}</li>
        </Text>
    ),
}
