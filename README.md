# ReactJS_DragAndDrop

Cet atelier consiste à prendre en main la dépendance Multer, et de pouvoir gérer l'ajout de fichier depuis le front.

### Pré-requis :

Pour mettre en place le dépôt, il faut procéder aux étapes suivantes :

1. Se rendre à la racine, et effectuer la commande :
```javascript
npm install
```

2. Copier le fichier `.env.sample` du frontend, et le renommer `.env`.

3. Copier le fichier `.env.sample` du backend, le renommer `.env`, et changer les valeurs des variables suivantes :
```javascript
DB_USER=TON_USERNAME_MYSQL
DB_PASSWORD=TON_MOT_DE_PASSE_MYSQL
DB_NAME=TON_NOM_DE_BASE_DE_DONNEES
```

4. Dans le script SQL du backend situé dans le dossier `server/database/schema.sql`, tu vas pouvoir ajouter un champ `avatar`.


**************************************************************************************

Lien du tutoriel :

`https://www.notion.so/React-Express-Files-c0032c496d474d19ba711ceaadeb7d35`


**************************************************************************************

Les étapes sont les suivantes :
  _Côté frontend_ : 
  1. Créer une interface visuelle simple permettant de faire un DragAndDrop (il va falloir explorer un peu 😉);
  2. Créer un state qui réceptionnera les fichiers avant de soumettre le formulaire d'envoi;
  3. Créer une fonction qui effectuera deux fetch :
    3.1 Le premier fetch va envoyer le fichier vers le serveur.
    3.2 Le second fetch va modifier un utilisateur, et ajouter dans sa 

  _Côté backend_ :
  1. Créer une requête fetch permettant d'envoyer le fichier vers le backend;
  2. Installer la dépendance Multer.

