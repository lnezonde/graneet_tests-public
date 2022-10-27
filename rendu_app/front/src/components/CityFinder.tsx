import { useEffect, useState } from 'react';
import Results from './Results';
import './CityFinder.css';
import axios, { AxiosResponse } from "axios";

const baseURL = "http://localhost:4000/cities";

export default function CityFinder() {
	const [research, setResearch] = useState<string>("");
	const [dataM, setDataM] = useState([]);
	const [dataOM, setDataOM] = useState([]);

	useEffect(() => {
		if (research) {
			axios.get(`${baseURL}/metropole${research}`).then((response: AxiosResponse<any, any>) => {
				setDataM(response.data); //récupération des villes de métropole
			});
			axios.get(`${baseURL}/outre-mer${research}`).then((response: AxiosResponse<any, any>) => {
				setDataOM(response.data); //récupération des villes d'outre-mer
			});
		}
	}, [research]);

	return (
		<div className='CityFinder'>
			<div className='SearchBar'>
				<h1 style={{marginLeft: '25px'}}>
					Je recherche...
				</h1>
				<input className="input" type="text" placeholder="...une ville, un code postal" value={research} onChange={(e) => setResearch(e.target.value)}/>
			</div>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<Results title={"Villes de métropole"} data ={dataM}/>
				<Results title={"Villes d'outre-mer"} data ={dataOM}/>
			</div>
		</div>
	);
}
