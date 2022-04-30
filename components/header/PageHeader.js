import React from 'react'
import Link from 'next/link'
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { Flex } from 'rebass';

const PageHeader = () => {

    const actions = [
        {
            icon: <AiOutlineUser style={{ height: 50, width: 30, cursor: 'pointer', color: 'white' }} />,
            to: '/perfil'
        },
        {
            icon: <AiOutlineHome style={{ height: 50, width: 30, cursor: 'pointer', color: 'white' }} />,
            to: '/home'
        }
    ]

    return (
        <Flex sx={{
            height: 50,
            bg: 'secondary',
            
        }}>
            <h1>Catbook</h1>
            {actions.map(({ icon, to }) => <Link key={to} href={to}>{icon}</Link>)}

        </Flex>
    )
}

export default PageHeader