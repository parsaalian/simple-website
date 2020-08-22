import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "emotion-theming";
import preset from "@rebass/preset";
import { Box, Heading, Text, Image } from "rebass";

const components = {
    h1: ({ children }) => (
        <Heading fontSize={[5, 5, 6, 6]} textAlign="center" color="primary">
            {children}
        </Heading>
    ),
};

export default (props) => (
    <ThemeProvider theme={preset}>
        <Box fontFamily="monospace" width={[1, 1, 2 / 3, 1 / 2]} mx="auto">
            <MDXProvider components={components}>
                <main {...props} />
            </MDXProvider>
        </Box>
    </ThemeProvider>
);

/*
<!--Layout>
    <Box textAlign="center">
        <Image
            src="/avatar.jpg"
            width={[2 / 3, 2 / 3, 2 / 3, 1 / 2]}
            height="auto"
            textAlign="center"
            mx="auto"
            sx={{ borderRadius: 9999 }}
        ></Image>
    </Box>
</Layout>

<Layout>
    <Heading fontSize={[5, 5, 6, 6]} textAlign="center" color="primary">
        Parsa Alian
    </Heading>
</Layout>

<Layout>
    <Text fontSize={[3, 3, 4, 4]} mt={2}>
        Hi! My name is parsa and
    </Text>
</Layout>

<Layout>
    <Heading fontSize={[4, 4, 5, 5]} my={3} color="secondary"></Heading>
</Layout -->
*/
