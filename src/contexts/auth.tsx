import React, { useState } from 'react'

export const AppContext = React.createContext({} as any);

export const ContextWrapper: React.FC = (props) =>  {
	const [ store, setStore ] = useState({
		token: '',
		helpApproved: false,
		ongApproved: false,
	});
	const [ actions ] = useState({
		setToken: (token:string) => setStore({ ...store, token }),
		setHelp: (helpApproved:boolean) => setStore({...store, helpApproved }),
	});
	
	return (
		<AppContext.Provider value={{ store, actions }}>
			{props.children}
		</AppContext.Provider>
	);
}