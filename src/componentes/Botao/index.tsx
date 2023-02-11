import './Botao.css'
import { ReactElement } from 'react'
import React from 'react';

interface BotaoProps {
    children: ReactElement
}

const Botao = (props: BotaoProps) => {
    return (<button className='botao'>
        {props.children}
    </button>)
}

export default Botao