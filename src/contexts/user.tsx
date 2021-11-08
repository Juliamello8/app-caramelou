import React, { useState } from 'react'

export const UserContext = React.createContext({} as any);

export const UserContextWrapper: React.FC = (props) =>  {
	const [ store, setStore ] = useState({
		user: {}
	});
	const [ actions ] = useState({
		setUser: (user:any) => setStore({ ...store, user }),
	});
	
	return (
		<UserContext.Provider value={{ store, actions }}>
			{props.children}
		</UserContext.Provider>
	);
}