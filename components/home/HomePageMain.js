import React from 'react'
import { Flex } from 'rebass'

const HomePageMain = ({children}) => {
    return (
        <Flex
            sx={{
                flex: 1,
                flexDirection: [
                    'column',
                    'row'
                ]
            }}>
            {children}
        </Flex>
    )
}

export default HomePageMain;