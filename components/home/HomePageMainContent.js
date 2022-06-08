import React from 'react'
import { Flex } from 'rebass'

const HomePageMainContent = () => {
    return (
        <Flex
            bg="white"
            flexDirection={'column'}
            sx={{flex: 1,minWidth: 0}}>
          <section className='novos-conteudos'>
              <label htmlFor='input-conteudo'>Adicione uma foto ou um pensamento do seu gatinho!</label>
              <input id='input-conteudo' placeholder='Digite algo...' className='input-conteudo'></input>
          </section>
        </Flex>
    )
}

export default HomePageMainContent