import React, { useState } from 'react'

export const AppContext = React.createContext({} as any);

export const ContextWrapper: React.FC = (props) =>  {
	const [ store, setStore ] = useState({
		token: '',
		helpApproved: false,
		ongApproved: false,
	});
	const [user, setUser] = useState({name: 'Fulano test'})
	const [dogs, setDogs] = useState([]);

	const [ actions ] = useState({
		setToken: (token:string) => setStore({ ...store, token }),
		setCurrentUser: (newUser:any) => setUser(newUser),
		signOut: () => setStore({ ...store, token: '' }),
		setHelp: (helpApproved:boolean) => setStore({...store, helpApproved }),
	});
	
	return (
		<AppContext.Provider value={{ store, actions, user }}>
			{props.children}
		</AppContext.Provider>
	);
}