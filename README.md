Il Weather Project è un'applicazione web che mostra le previsioni del tempo per una città specificata dall'utente. Utilizza l'API di OpenWeatherMap per ottenere i dati meteo e visualizzarli in un formato facilmente leggibile.

Funzionalità :
- Ricerca del Meteo: Inserisci il nome di una città e ottieni informazioni dettagliate sul meteo attuale.
- Visualizzazione: Mostra la temperatura attuale, la temperatura massima e minima, l'umidità, la velocità del vento e una descrizione del meteo con un'emoji rappresentativa.

Struttura del Progetto:
- public/: Contiene i file statici dell'applicazione, come index.html e altri file CSS e JavaScript.
- File server.js per la configurazione di un server Node.js che può essere usato per gestire le richieste API.
- .env: File di configurazione per le variabili d'ambiente, incluso API_KEY per l'API di OpenWeatherMap.
- .gitignore: Specifica i file e le cartelle da escludere dal controllo versione.
- package.json: Elenca le dipendenze del progetto e include gli script per avviare il server.

Requisiti:
Node.js (versione 14 o superiore)
npm (Node Package Manager)
