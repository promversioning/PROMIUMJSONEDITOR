<!-- PROJECT LOGO -->
<p align="center">
  <img src="./public/assets/192.png" height="50" alt="Logo">
  <h1 align="center">PROMIUM JSON EDITOR</h1>
  <p align="center">
    Fork di JSON Crack, editor JSON avanzato per PROMIUM AI.
    <br />
    <a href="https://promium.ai"><strong>Scopri PROMIUM AI »</strong></a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## Informazioni sul progetto

PROMIUM JSON EDITOR nasce come fork di [JSON Crack](https://jsoncrack.com/) di Aykut Saraç, con l'obiettivo di offrire un editor JSON avanzato, ottimizzato per l'uso commerciale e integrato nella suite PROMIUM AI.

### Modifiche apportate rispetto a JSON Crack

- Risolto il limite massimo di nodi JSON disponibili (ora fino a 1.000.000 nodi)
- Filtrate le route per permettere solo l'accesso alla pagina dell'editor
- Rimossa la cartella GitHub per le versioni
- Rimossi file non utili del progetto
- Inserita in fondo all'editor la scritta di crediti: "Questo software utilizza componenti sviluppati da Aykut Saraç (Apache 2.0 License)"
- Modificata la parte SEO, il manifest e l'icona della pagina
- Rinominata ogni occorrenza di "JSON Crack" in "PROMIUM JSON EDITOR"
- Il software è pubblicato ad uso commerciale per gli abbonati PROMIUM AI

## Funzionalità principali

- Visualizzazione interattiva di JSON, YAML, CSV, XML e TOML in grafi o alberi
- Conversione tra diversi formati (JSON, CSV, XML, YAML)
- Formattazione e validazione di JSON, YAML e CSV
- Generazione di interfacce TypeScript, struct Golang e JSON Schema
- Strumenti avanzati: decodifica JWT, randomizzazione dati, query jq e JSON path
- Esportazione delle visualizzazioni come PNG, JPEG o SVG
- Tutto il processing avviene localmente, nessun dato viene salvato su server esterni

## Come iniziare

### Prerequisiti

- Node.js (Versione >=18.x)
- pnpm _(consigliato)_

### Sviluppo

1. Clona la repository

   ```sh
   git clone https://github.com/tuo-utente/promium-json-editor.git
   ```

2. Vai nella cartella del progetto

   ```sh
   cd promium-json-editor
   ```

3. Installa le dipendenze

   ```sh
   pnpm install
   ```

4. Avvia il progetto

   ```sh
   pnpm dev

   # L'app sarà disponibile su http://localhost:3000/
   ```

### Docker

È disponibile un [`Dockerfile`](Dockerfile) per l'esecuzione in container:

```sh
# Build dell'immagine
 docker compose build
# Avvio del container
 docker compose up
# L'app sarà disponibile su http://localhost:8888
```

## Licenza

PROMIUM JSON EDITOR è un fork di [JSON Crack](https://jsoncrack.com/) e rispetta pienamente la licenza Apache 2.0. Tutte le modifiche sono state documentate e i crediti all'autore originale sono riportati sia nel codice che nell'interfaccia utente, come richiesto dalla licenza. Puoi consultare il testo completo della licenza nel file [`LICENSE.md`](./LICENSE.md) o su [GitHub JSON Crack License](https://github.com/AykutSarac/jsoncrack.com/blob/main/LICENSE.md).

> Questo software utilizza componenti sviluppati da Aykut Saraç (Apache 2.0 License)



------------
# VERIFICA DA PARTE DI GPT4.1 DELLA CONFORMITA' RISPETTO ALLA LICENZA ORIGINALE
Ecco la verifica dettagliata rispetto ai punti richiesti:

---

### Licenza Apache 2.0

- **Modifica, distribuzione, uso commerciale**: La licenza Apache 2.0 consente tutto questo, anche per progetti a pagamento o closed source. ✔️
- **File di licenza originale**: Il file LICENSE.md è presente, non modificato e ben visibile nella root del progetto. ✔️
- **Segnalazione modifiche**: Nel README è presente una sezione dettagliata “Modifiche apportate rispetto a JSON Crack” che elenca tutte le modifiche. ✔️
- **Crediti all’autore originale**: 
  - Nel README è chiaramente indicato che si tratta di un fork di JSON Crack di Aykut Saraç.
  - Nell’interfaccia utente, in fondo all’editor, è presente la dicitura: “Questo software utilizza componenti sviluppati da Aykut Saraç (Apache 2.0 License)”. ✔️

---

### Crediti e trasparenza

- **README**: 
  - Fork e autore originale sono citati.
  - Le modifiche sono elencate.
  - Il rispetto della licenza è dichiarato.
  - Il credito all’autore originale è presente sia nel README che nell’interfaccia utente. ✔️
- **File LICENSE.md**: Presente e non modificato. ✔️

---

### Distribuzione commerciale

- **Consentita**: La licenza Apache 2.0 consente l’uso commerciale, anche per software a pagamento, purché siano rispettate le condizioni sopra. ✔️

---

### Pubblicazione

- **Pubblicazione pubblica**: Pubblicare la fork pubblicamente su GitHub è la scelta più trasparente e conforme. ✔️

---

### Ulteriori dettagli

- Il nome originale “JSON Crack” è stato sostituito ovunque con “PROMIUM JSON EDITOR”, come richiesto dalla licenza per evitare confusioni di branding.
- La presenza della frase di credito nell’interfaccia utente è perfettamente in linea con la sezione 4d della licenza Apache 2.0.
- Non risultano riferimenti o file che violino la licenza o i crediti.

---

**Conclusione:**  
Tutto è conforme e legale sia dal punto di vista della licenza che dei crediti. Puoi pubblicare e distribuire la fork senza problemi, mantenendo sempre i crediti e la licenza come già fatto.

Se vuoi una verifica su altri file specifici, chiedi pure!