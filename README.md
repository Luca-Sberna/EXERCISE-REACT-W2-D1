## Miglioriamo EpiBooks

Inizia dal tuo progetto precedente, oggi permetterai agli utenti di lasciare recensioni sui libri.

### TASKS:

1.  Aggiungi un componente **CommentArea** alla fine di **SingleBook**. Quando l’utente cliccherà su un **SingleBook** (quindi quando la proprietà `selected` nel suo stato diventa `true`), i commenti dovranno apparire (suggerimento: short-circuit operator!).
2.  **CommentArea** dovrà fare il fetch delle recensioni per il libro selezionato, e salvare i commenti nel proprio stato. Conterrà inoltre due sotto-componenti: **CommentsList** and **AddComment**.
3.  **CommentsList** mostrerà le recensioni del libro in un elenco; l’array di recensioni gli verrà passato come prop dal componente **CommentArea**. La singola recensione verrà visualizzata utilizzando un altro componente, chiamato **SingleComment**.
4.  **AddComment** conterrà un form per aggiungere il testo della recensione e il voto (da 1 o a 5). Questo componente dovrà permettere all’utente di fare la POST del nuovo commento sul libro selezionato.  
    [EXTRA]
5.  Aggiungi vicino ogni commento un bottone per cancellarlo (DELETE). Dovrà creare una richiesta verso`https://striveschool-api.herokuapp.com/api/comments/:commentId`
6.  Crea un componente **Loading**. Questo apparirà nella pagina quando la richiesta è in fase di elaborazione, ma non ancora risolta.
7.  Crea un componente **Error**. Se qualcosa andrà male con una network request, dovrà apparire un messaggio di errore.
