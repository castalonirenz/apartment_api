import React, {useState, createContext} from 'react';

export const accountContext = React.createContext()

export const Provider = (props) => {

    const [account, setAccount] = useState('test')

    return(
        <accountContext.Provider value={[account, setAccount]}>
           {props.children}
        </accountContext.Provider>
    )
}