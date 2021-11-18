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
		date: string,
		breed: string,
		description: string,
		lastSee: string,
		image?: string,
	}

	interface StrayPetInterface {
		id: number,
		type: string,
		location: string,
		date: string,
		description: string,
		image?: string,
	}

	const [user, setUser] = useState({name: 'Fulano test'})
	const [petLost, setPetLost] = useState<PetLostInterface[]>([]);
	const [strayPet, setStrayPet] = useState<StrayPetInterface[]>([]);

	const [ actions ] = useState({
		setToken: (token:string) => setStore({ ...store, token }),
		setCurrentUser: (newUser:any) => setUser(newUser),
		setPetsLost: (newPetLost:PetLostInterface[]) => setPetLost(newPetLost),
		setStrayPet: (newStrayPet:StrayPetInterface[]) => setStrayPet(newStrayPet),
		signOut: () => setStore({ ...store, token: '' }),
		setHelp: (helpApproved:boolean) => setStore({...store, helpApproved }),
	});
	
	return (
		<AppContext.Provider value={{ store, actions, user, petLost, strayPet }}>
			{props.children}
		</AppContext.Provider>
	);
}