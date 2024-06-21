La création d'une API Node.js implique plusieurs étapes, de la configuration de votre environnement de développement à l'écriture du code réel de l'API. Voici un guide étape par étape pour vous aider à créer une API RESTful simple à l'aide de Node.js et Express.

### Étape 1: Configurez votre environnement de développement
- **Installer Node.js et npm**: Téléchargez et installez Node.js depuis le site officiel ou depuis cette ressources [[Installation Node JS]] . NPM (Node Package Manager) est installé automatiquement avec Node.js.

- **Créez un répertoire de projet :** 
```bash
	mkdir node-api
	cd node-api
```

- **Initialisez un nouveau projet Node.js** 
```bash
npm init -y
```

Cela créera un fichier `package.json` avec les paramètres par défaut.

Dans le  fichier `package.json` modifier la commande de lancement de votre application dans scripts en le pointant vers le fichier où se trouve le code qui démarre votre serveur `"start": "nodemon server.js"`. 

```json
{
	"name": "crudapi",
	"version": "1.0.0",
	"description": "Application CRUD API",
	"main": "server.js",
	"scripts": {
		"start": "nodemon server.js"
},

"author": "moi",
"license": "ISC",
"dependencies": {
		"dotenv": "^16.4.5",
		"express": "^4.19.2",
		"nodemon": "^3.1.3",
	}
}
```
### Étape 2 : Installer les packages requis
- **Install Express**: Express est un framework Web rapide et minimaliste pour Node.js
- **Installez Nodemon** : Nodemon est un utilitaire qui surveillera toute modification de votre code source et redémarrera automatiquement votre serveur.
```bash
npm install express nodemon
```
### Étape 3 : Créer le fichier serveur
- Créez un nouveau fichier nommé `server.js` :
```bash
touch server.js
```

- Créez un nouveau fichier nommé `config.env`  et ajouter les variable d'environnement nécessaire pour le fonctionnement de votre application telles que le PORT et le lien de connexion à MongoDB
```env
PORT=<numéro_de_port_de_serveur>
MONGODB_CONNEXION_URI=mongodb+srv://<username>:<password>@clusterapi.rk9mjub.mongodb.net/<nom_base_de_donnees>
```

Puis importer le module express et tester votre serveur
```js
// Importer le package dotenv
require('dotenv').config({path: 'config.env'});

// Importer express module
const express = require('express');
const app = express();

// Utilisez le middleware express.json() pour analyser les requêtes JSON
app.use(express.json());

// Définir un port sur lequel écouter
const PORT = process.env.PORT;


// Démarre le serveur et écoute sur le port spécifié
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### Étape 4: Testez votre API
Démarrer votre serveur dans le terminal (il faut se trouver au même niveau de votre fichier server.js)
```bash 
	npm start
```
### Prochaines étapes dans l'ordre
- Installer le package mongoose
```
npm install mongoose
```
Il s'agit d'une bibliothèque de modélisation de données objet (ODM) pour MongoDB et Node.js. Il fournit une solution basée sur un schéma pour modéliser les données de votre application, facilitant ainsi le travail avec MongoDB en fournissant des fonctionnalités intégrées de conversion de type, de validation, de création de requêtes, etc.

- Créer un dossier route
	- Créer un fichier `route.js`
	- Importer le module express()
	- Ajouter une route qui affiche la racine de votre application avec ("/")
	- Exporter le module avec modules.exports
- Dans le fichier `server.js`
	- Importer le fichier route en utilisant le middle ware app.use()
	- Tester l'application dans le navigateur pour afficher un message montrant le bon fonctionnement de votre route
- Créer un dossier connexion
	- Ajouter un fichier` connexion.js`
		- importer le package mongoose
		- Ecrire la méthode de connexion à la base de données MongoDB et renseigner l'URI de connexion stocké dans `config.env`
		- Exporter le module et importer le dans le ficher `server.js`
	- Tester votre connexion à la base de données
- Créer un dossier model
	- Créer un fichier `user.model.js`
		- Importer le package mongoose
		- Définir votre schema avec `mongoose.Schema()`
		- Créer le model avec `mongoose.Model()`

> *Schéma : dans MongoDB, aucun schéma n'est appliqué, ce qui signifie que vous pouvez stocker des documents de n'importe quelle structure dans une collection. Mongoose fournit une structure basée sur un schéma qui permet de définir la forme des documents au sein d'une collection.*

> *mongoose.Schema : cela crée un nouvel objet de schéma. Le schéma définit la structure des documents qui seront stockés dans une collection MongoDB. Il s'agit essentiellement d'un plan des données.*

> *mongoose.model : Cette méthode prend deux arguments : le nom du modèle (« user ») et le schéma (UserSchema). Il crée un modèle que vous pouvez utiliser pour interagir avec la collection d'éléments dans la base de données MongoDB. Mongoose recherchera automatiquement la version minuscule et plurielle du nom de votre modèle. Dans ce cas, il recherchera la collection d'éléments.*

> *Le modèle est une classe qui vous offre une interface pour interagir avec la collection MongoDB. Vous pouvez effectuer diverses opérations telles que créer, lire, mettre à jour et supprimer (CRUD) sur les documents de la collection via ce modèle.*
			
- Dans le fichier `route.js`
	- Importer le model créé dans `user.model.js`
	- commencer à créer les routes de votre application avec les différentes méthode http
		- route.get("/addUser", .....)
		- route.get("/userList", .....)
		- route.post("/createUser", .....)
		- route.get("/userById", .....)
		- oute.put("/modifyUser", .....)
		- oute.delete("/deleteUser", .....)
	- Tester votre application à chaque création de route
- Résumé
	- **Schéma** : définit la structure des documents dans une collection.
	- **Modèle** : fournit une interface à la collection MongoDB basée sur le schéma.
	- **Mongoose** : agit comme intermédiaire, permettant une gestion plus facile des données MongoDB via des schémas et des modèles définis.