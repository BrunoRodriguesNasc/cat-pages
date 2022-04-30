import React from 'react'
import Link from 'next/link'
import { AiOutlineUser, AiOutlineHome, AiFillGithub } from 'react-icons/ai';
import { Flex, Box } from 'rebass';

const PageHeader = () => {

    const actions = [
        {
            icon: <AiOutlineHome style={{ height: 50, width: 25, cursor: 'pointer', color: 'white' }} />,
            to: '/home'
        },
        {
            icon: <AiOutlineUser style={{ height: 50, width: 25, cursor: 'pointer', color: 'white' }} />,
            to: '/perfil'
        },
        {
            icon: <AiFillGithub style={{ height: 50, width: 25, cursor: 'pointer', color: 'white' }} />,
            to: '/github'
        },

    ]

    return (
        <Flex
            p={1}
            sx={{
                height: 50,
                bg: '#1877f2',
                justifyContent: 'space-between',

            }}>
            <Box color={'white'} fontSize={28} fontWeight={'bold'} p={1}>Catbook</Box>
            <Box width={[200, 200, 200]}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}
            >
                {actions.map(({ icon, to }) => <Link key={to} href={to}>{icon}</Link>)}
            </Box>

        </Flex>
    )
}

export default PageHeader