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

	interface HelpRequestsInterface {
		id: number,
		title: string,
		phone: string,
		mail: string,
		description: string,
	}

	interface OngPetInterface {
		id: number,
		owner: string,
		name: string,
		CNPJ: string,
		mail: string,
		phone: string,
		image?: string,
	}

	const [user, setUser] = useState({name: 'Fulano test'})
	const [petLost, setPetLost] = useState<PetLostInterface[]>([]);
	const [strayPet, setStrayPet] = useState<StrayPetInterface[]>([]);
	const [helpRequests, setHelpRequests] = useState<HelpRequestsInterface[]>([]);
	const [ongPet, setOngPet] = useState<OngPetInterface[]>([])

	const [ actions ] = useState({
		setToken: (token:string) => setStore({ ...store, token }),
		setCurrentUser: (newUser:any) => setUser(newUser),
		setPetsLost: (newPetLost:PetLostInterface[]) => setPetLost(newPetLost),
		setStraysPet: (newStrayPet:StrayPetInterface[]) => setStrayPet(newStrayPet),
		setHelpRequests: (newHelpRequests:HelpRequestsInterface[]) => setHelpRequests(newHelpRequests),
		signOut: () => setStore({ ...store, token: '' }),
		setHelp: (helpApproved:boolean) => setStore({...store, helpApproved }),
		setOngPet: (newOngPet:OngPetInterface[]) => setOngPet(newOngPet)
	});
	
	return (
		<AppContext.Provider value={{ store, actions, user, petLost, strayPet, helpRequests, ongPet }}>
			{props.children}
		</AppContext.Provider>
	);
}