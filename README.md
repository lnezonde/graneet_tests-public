# CityFinder

Mettre en place une application composée d'un front en React consommant une API
fournit par un back en NestJS (idéalement mais pas obligatoire). Cette application
permet de lister les villes qui correspondent à une chaîne de caractères en entrée.
Les données sont à récupérer de data.gouv.fr
(https://www.data.gouv.fr/fr/datasets/codes-postaux/)

Specs :
  - Seules les 100 premières villes doivent être affichées

  - Les villes doivent-être découpées en deux catégories, celles de la métropole et les autres

  - Les villes doivent être ordonnées d'après leurs noms

  - Le filtrage des villes doit être fait dans le back pour éviter de faire transiter trop de données

## Usage

```bash

# launch project and wait for the services to be online

sh start.sh

# create database of cities with curl (run this commande only once, data is stored in persistant volume after that)

curl -X POST -H "Content-Type: application/json" -d @codes-postaux.json http://localhost:4000/cities

```

front -> port 3000
back -> port 4000
db -> port 5432
