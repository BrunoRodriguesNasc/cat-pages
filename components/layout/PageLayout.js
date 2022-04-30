import React from 'react'
import { Flex } from 'rebass'

function PageLayout({ children }) {
    return (
        <Flex
            sx={{
                flexDirection: 'column',
                minHeight: '100vh'
            }}>
            {children}
        </Flex>
    )
}

export default PageLayout