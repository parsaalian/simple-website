import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Flex, Box, Text, Link } from 'rebass'
import { theme } from '../theme'

const query = graphql`
    query GetSiteTitle {
        site {
            siteMetadata {
                title
            }
        }
    }
`

const sections = [
    'Research Interests',
    'Education',
    'Honors and Awards',
    'Projects',
]

function Navbar() {
    return (
        <StaticQuery
            query={query}
            render={data => {
                const { siteMetadata } = data.site
                return (
                    <Flex
                        theme={theme}
                        px={2}
                        mb={6}
                        color="white"
                        bg="black"
                        alignItems="center"
                    >
                        <Text theme={theme} p={2} fontWeight="bold">
                            {siteMetadata.title}
                        </Text>
                        <Box theme={theme} mx="auto" />
                        {sections.map(section => (
                            <Link
                                key={section}
                                theme={theme}
                                variant="nav"
                                href={`#${section.replace(' ', '_')}`}
                            >
                                {section}
                            </Link>
                        ))}
                    </Flex>
                )
            }}
        />
    )
}

export default Navbar
