born2code-react-firebase
======================
Progetto dimostrativo su come usare agilmente firebase-tools e create-react-app

# Come avviare il progetto
```shell
$ npm install
$ npm start
```

Ci si aspetta `firebase-tools` sia installato globalmente.  
```shell
$ firebase add <id-progetto-firebase>
```

**Configurare un progetto di sviluppo per firebase**  
Dalla console di firebase, accedere alla sezione Authentication,
da qui cliccare `Web setup` in alto a destra.

Esempio: `https://console.firebase.google.com/u/0/project/<project-id>/authentication/users`

Da qui bisogna convertire il formato:
```javascript
var config = {
  apiKey: "AIzaSyCx6NGSb0eJETnMkNGRXUwvbHJEcbOgOMQ",
  authDomain: "born2code-anything.firebaseapp.com",
  databaseURL: "https://born2code-anything.firebaseio.com",
  projectId: "born2code-anything",
  storageBucket: "",
  messagingSenderId: "881020431495"
};
```

ad un file di variabili di ambiente, cosi fatto:
```
REACT_APP_APIKEY="AIzaSyCx6NGSb0eJETnMkNGRXUwvbHJEcbOgOMQ"
REACT_APP_AUTHDOMAIN="born2code-anything.firebaseapp.com"
REACT_APP_DATABASEURL="https://born2code-anything.firebaseio.com"
REACT_APP_PROJECTID="born2code-anything"
REACT_APP_STORAGEBUCKET=""
REACT_APP_MESSAGINGSENDERID="881020431495"
```

questo file può essere salvato come `.env.development.local` oppure `.env.development`

# Variabili di sistema e come funzionano
[Riferimento a create-react-app environment variables][vars-01]

Il progetto usato per sviluppare in gruppo puo' essere salvato su
`.env.development` e committato su git. In modo che tutti i membri del gruppo
possano usare lo stesso database / sistema di utenti.

Per fare degli esperimenti, si può creare un file `.env.development.local`
che indirizza le chiamate fatte a firebase ad un vostro progetto a piacimento.

Per poter effettuare il deploy del progetto, è necessario avere `.env.production`
con le variabili configurate. NB: può essere uguale ad `.env.development`


[vars-01]: https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables

# Build / Deploy in produzione
**WARNING** per effettuare la build in modo corretto, il progetto deve
avere un file `.env.production`
```shell
$ npm run deploy
```
