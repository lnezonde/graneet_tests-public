import './CityFinder.css';

/*
{props.rooms.map(item => {
          if (item.name.includes(name))
            return <GamesCards key={item.name} room={item}/>
          return <></>
        })}

*/
interface cityData {
	id: number,
	codePostal: string,
	nomCommune: string
}


export default function Results(props: {title: string, data: cityData[]}) {
	return (
		<div className='Results'>
			<h1>{props.title}</h1>
				{props.data.length > 0 &&
					<div className='foundStatus'>
						<p>{props.data.length} villes correspondant au texte saisi</p>
					</div>
				}
				{props.data.length === 0 &&
					<div className='notFoundStatus'>
						<p>Aucune ville correspondant au texte saisi</p>
					</div>
				}
			<div className='cities'>
				{props.data.map(item => {
					return (
						<div key={item.id} className='city'>
							<p>{item.nomCommune}</p>
							<p>{item.codePostal}</p>
						</div>)
					})}
			</div>
		</div>
	);
}
