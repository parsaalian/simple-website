import React from 'react'
import { Heading } from 'rebass'
import theme from './theme'

export default {
    h1: ({ children }) => (
        <Heading
            theme={theme}
            fontFamily="monospace"
            fontSize={[5, 5, 6, 6]}
            textAlign="center"
            color="primary"
        >
            {children}
        </Heading>
    ),
}
