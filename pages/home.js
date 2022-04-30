import React from 'react'
import HomePageFooter from '../components/home/HomePageFooter'
import PageLayout from '../components/layout/PageLayout'
import HomePageLeft from '../components/home/HomePageLeft'
import HomePageMain from '../components/home/HomePageMain'
import HomePageMainContent from '../components/home/HomePageMainContent'
import HomePageRight from '../components/home/HomePageRight'

const home = () => {
    return (
        <PageLayout>
            <HomePageMain>
                <HomePageMainContent />
                <HomePageRight />
                <HomePageLeft />
            </HomePageMain>
            <HomePageFooter />
        </PageLayout>
    )
}

export default home