# DT193G Fullstack-utveckling med ramverk - Moment 3

## Doggos - en digital hundrastgård
### Samla alla dina hundkompisar på ett och samma ställe - digitalt! 

Detta repository innehåller källkoden för en applikation skapad som en SPA (Single Page Application) med ramverket Vue.js. För design har ramverket Bootstrap inkluderats och används för att skapa en bra användarupplevelse. Fontawesome har inkluderats för användning av ikoner.  

Applikationen hämtar in och använder data från det API som skapades i tidigare moment i samma kurs. API:et representerar ett fritidsintresse och i detta fall är det hundar. 

Hundar från webbtjänsten laddas in med information som namn, ägare, ras, ålder, en kort beskrivning och om hunden är vaccinerad eller inte. Användare kan lägga till och ta bort hundar från webbplatsen.  

## Funktioner
* **Visa alla hundar:** Samtliga hundar visas i en tabell.
* **Lägga till hund:** Lägg till ny hund via formulär.
* **Ta bort hund:** Ta bort hund från tabellen. 

## Vue.js
* Används för att skapa en Single Page Application.
* Använder komponentbaserad struktur med komponenter för header, footer och hundar samt vyer för startsida och undersidor.
* Använder inbyggda tekniker som props, emits, reaktiv data och two-way-binding för att rendera innehåll.
* Webbtjänsten konsumeras och hanteras med Fetch-anrop.
* RouterLink och RouterView används för att hantera navigering och visa innehåll på webbplatsens sidor. 

## Bootstrap
* Används för att skapa en responsiv och användarvänlig design.

## Skapad:
**Av:** Ronja Norlén  
**Kurs:** DT193G Fullstack-utveckling med ramverk  
**Program:** Webbutveckling  
**Skola:** Mittuniversitetet  
**År:** 2024

