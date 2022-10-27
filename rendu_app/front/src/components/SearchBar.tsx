import { useState } from 'react';
import './CityFinder.css';


export default function SearchBar() {
	const [name, setName] = useState<string>("");

	return (
		<div className='SearchBar'>
			<h1 style={{marginLeft: '25px'}}>
				Je recherche...
			</h1>
			<input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
		</div>
	);
}
