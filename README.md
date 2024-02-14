## BudgetForEventServices

### Descrizione

API per la gestione di budget e servizi per eventi. Fa parte di un'applicazione Fullstack per la registrazione e la gestione di feste.

**Installazione Rapida**

1. **Clonare il repository:**

```bash
git clone https://github.com/albertomaffeii/BudgetForEventServices.git
cd BudgetForEventServices
```

2. **Installare le dipendenze:**

```bash
npm install
```

3. **Configurare le variabili d'ambiente:**

- Creare un file `.env` nella radice del progetto.
- Aggiungere:

```
PORT=3333
MONGODB_URI=tua_stringa_di_connessione_mongodb
```

4. **Avviare il server:**

```bash
npm run dev
```

5. **Accedere all'applicazione nel browser:**

http://localhost:3333

**Requisiti**

- Node.js (v12.0.0+)
- MongoDB (v4.0.0+)

**Tecnologie**

- Node.js, Express.js
- MongoDB (Mongoose)
- Nodemon, dotenv, Cors

**Struttura del Progetto**
#### Backend
- `app.js`: Punto di entrata.
- `controllers/`: Logica di controllo.
- `db/`: Configurazioni relative al database.
- `middlewares/`: Middlewares.
- `models/`: Modelli di MongoDB.
- `routes/`: Rotte dell'API.
#### Frontend
- Next Version.

**Contribuzione**

1. Fare un fork del repository.
2. Creare una branch: `git checkout -b nome-della-tua-branch`.
3. Apportare le modifiche e fare il commit: `git commit -m 'Aggiunge funzionalità X'`.
4. Inviare al fork: `git push origin nome-della-tua-branch`.
5. Aprire una pull request.

**Contatti**

- E-mail: albertomaffeii@gmail.com
