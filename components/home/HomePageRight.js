import React from 'react'
import { Box } from 'rebass'

const HomePageRight = () => {
    return (
        <Box sx={{flexBasis: ['auto',300],order: -1}}>
            <section className='catNameAndPhoto' >
                <div className='catPhoto'></div>
                <div className='catName'>Nami</div>
            </section>
        </Box>
    )
}

export default HomePageRight