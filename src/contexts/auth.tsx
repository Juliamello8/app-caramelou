import React, { useState } from 'react'

export const AppContext = React.createContext({} as any);

export const ContextWrapper: React.FC = (props) =>  {
	const [ store, setStore ] = useState({
		token: '',
		helpApproved: false,
		ongApproved: false,
	});

	interface PetLostInterface {
		name: string,
		type: string,
		date: Date,
		breed: string,
		description: string,
		lastSee: string,
		image?: string,
	}

	const [user, setUser] = useState({name: 'Fulano test'})
	const [petLost, setPetLost] = useState<PetLostInterface[]>([]);

	const [ actions ] = useState({
		setToken: (token:string) => setStore({ ...store, token }),
		setCurrentUser: (newUser:any) => setUser(newUser),
		setPetsLost: (newPetLost:PetLostInterface[]) => setPetLost(newPetLost),
		signOut: () => setStore({ ...store, token: '' }),
		setHelp: (helpApproved:boolean) => setStore({...store, helpApproved }),
	});
	
	return (
		<AppContext.Provider value={{ store, actions, user, petLost }}>
			{props.children}
		</AppContext.Provider>
	);
}