import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { Global } from '@emotion/core'
import { ThemeProvider, Styled } from 'theme-ui'
import { Box } from 'rebass'
import { theme, components as MDXComponents } from '../theme'
import SEO from './SEO'
import Navbar from './Navbar.jsx'

function MDXLayout({ children }) {
    return (
        <>
            <SEO />
            <ThemeProvider theme={theme}>
                <Global
                    styles={theme => ({
                        '*': {
                            boxSizing: 'border-box',
                        },
                        body: {
                            margin: 0,
                            color: `${theme.colors.text} !important`,
                            backgroundColor: `${theme.colors.background} !important`,
                        },
                    })}
                />
                <Navbar />
                <Styled.root>
                    <Box width={[1, 1, 2 / 3, 1 / 2]} mx="auto">
                        <MDXProvider components={MDXComponents}>
                            {children}
                        </MDXProvider>
                    </Box>
                </Styled.root>
            </ThemeProvider>
        </>
    )
}

MDXLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MDXLayout
