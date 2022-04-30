import React from 'react'
import { Box, Flex } from 'rebass'
import HomePageHeader from '../components/home/HomePageHeader'
import HomePageLeft from '../components/home/HomePageLeft'
import HomePageMain from '../components/home/HomePageMain'
import HomePageMainContent from '../components/home/HomePageMainContent'
import HomePageRight from '../components/home/HomePageRight'
const home = () => {
    return (
        <Flex
            sx={{
                flexDirection: 'column',
                minHeight: '100vh'
            }}>
            <HomePageHeader />
            <HomePageMain>
                <HomePageMainContent />
                <HomePageRight />
                <HomePageLeft />
            </HomePageMain>
            <Box>Footer</Box>
        </Flex>
    )
}

export default home