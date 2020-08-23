import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'emotion-theming'
import preset from '@rebass/preset'
import { Box, Heading } from 'rebass'
import SEO from './SEO'
import theme from '../utils/theme'

const MDXComponents = {
    h1: ({ children }) => (
        <Heading fontSize={[5, 5, 6, 6]} textAlign="center" color="primary">
            {children}
        </Heading>
    ),
}

function MDXLayout({ children }) {
    return (
        <>
            <SEO />
            <ThemeProvider theme={theme}>
                <Box width={[1, 1, 2 / 3, 1 / 2]} mx="auto">
                    <MDXProvider components={MDXComponents}>
                        {children}
                    </MDXProvider>
                </Box>
            </ThemeProvider>
        </>
    )
}

MDXLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MDXLayout
