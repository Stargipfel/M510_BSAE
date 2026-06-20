# Übung: UX-Test und Auswertung eines Prototyps

## Ausgangslage

Für eine kleine interne **Support-App** liegt ein klickbarer Prototyp vor.  
Die App soll Mitarbeitenden helfen, Support-Tickets zu erfassen und zu verwalten.

Bevor die Lösung weiterentwickelt wird, soll geprüft werden, wie gut die Nutzererfahrung im aktuellen Stand ist.

---

## Ziel der Übung

Sie führen einen kleinen UX-Test durch, werten die Beobachtungen aus und leiten daraus die wichtigsten Erkenntnisse ab.

---

## Prototyp starten

```bash
npm install
npm run dev
```

Die App ist danach unter [http://localhost:3007](http://localhost:3007) erreichbar.

---

## Kernprozess im Test

> **„Neues Ticket erfassen"**

Dieser Ablauf soll im UX-Test geprüft werden:

1. Nutzer öffnet die App (Dashboard)
2. Nutzer navigiert zur Ticketübersicht
3. Nutzer öffnet das Formular für ein neues Ticket
4. Nutzer füllt das Formular aus und speichert
5. Nutzer sieht die Bestätigung und kehrt zurück

---

## Teil 1 – Testmethode festlegen

Arbeiten Sie in **2er- oder 3er-Gruppen**. Optional

Legen Sie vor dem Test fest:

- **Welche Testmethode** Sie verwenden
- **Warum** diese Methode für diesen Kontext passend ist

**Testmethode**
Cognitive Walkthrough

**Warum**
Einzelarbeit daher keine Gruppenmitglieder. Für Moderierter Usability-Test braucht es mehrere Personen damit es optimal funktioniert.

Geeignete Methoden sind zum Beispiel:

| Methode | Kurzbeschreibung |
|---|---|
| **Moderierter Mini-Usability-Test** | Eine Person führt Aufgaben durch, eine Person beobachtet und notiert |
| **Cognitive Walkthrough** | Die Gruppe geht den Ablauf Schritt für Schritt durch und stellt Fragen aus Nutzerperspektive |

---

## Teil 2 – Testaufgaben durchführen

Prüfen Sie den Prototyp anhand von **3 konkreten Aufgaben**.

### Vorgeschlagene Aufgaben

1. **Aufgabe 1:** Verschaffen Sie sich einen Überblick über den aktuellen Stand der Support-Tickets.
2. **Aufgabe 2:** Öffnen Sie den Bereich, um ein neues Ticket zu erstellen.
3. **Aufgabe 3:** Erfassen Sie ein neues Ticket mit Titel, Beschreibung, Priorität und Kategorie – und schliessen Sie den Vorgang ab.

> Sie können die Aufgaben selbst anpassen oder ergänzen.

---

## Teil 3 – Beobachtungen festhalten

Dokumentieren Sie **während oder direkt nach dem Test**:

- Wo zögert der Nutzer?
- Wo entsteht Unsicherheit?
- Wo wird falsch geklickt oder gesucht?
- Welche Elemente werden übersehen?
- Wo fehlt eine Rückmeldung?
- Was wirkt verständlich und funktioniert gut?

Verwenden Sie eine einfache Tabelle oder Liste:

| # | Stelle in der App | Beobachtung |
|---|---|---|
| 1 | | |
| 2 | | |
| … | | |

---

1. Header => Navigationspunkte sind auf der falschen Seite platziert. Oben rechts schaut der Benutzer selterner hin. Ausserdem ist man es Standardmässig von vielen anderen Apps gewohnt, dass die Navi links gehalten wird.
2. Dashboard => Sub Titel der Karte ist falsch platziert. Der Text sollte neben dem Titel auf der Linken Seite sein.
3. Ticketübersicht => Der Kontrast ist zum Teil sehr schlecht. Manche Texte sind in den Karten fast nicht lesbar und es ist mühsam anzuschauen.
4. Navigation => Wenn neues Ticket ausgewählt wird, wird der Punkt Tickets gleich hervorgehoben, obwohl es ein eigener Menupunkt ist.
5. Neues Ticket => Es ist angenehm ein neues Ticket zu erstellen. Das Formular ist klar und sinnvoll strukturiert. 
6. Neues Ticket => Die Pflichtfelder werden nicht markiert, somit hat man als Benutzer keine Ahnung was erfasst werden muss und was optional ist
7. Neues Ticket => Die Action Button sind für mich nicht optimal platziert. Der Primary Button sollte unten rechts platziert werden und der Secondary Button links unten. Ausserdem finde ich die Gap zwischen den Buttons viel zu klein
8. Confirmation => Finde ich sehr gelungen. Alles auf einen Blick plus Action Buttons für weiteres vorgehen
9. Confirmation => Evt. wäre es noch gut einen Action Button für nochmals ein Ticket zu erfassen. Je nach dem könnte der Benutzer auch mehrere Anliegen haben.

## Teil 4 – Ergebnisse auswerten

Formulieren Sie aus Ihren Beobachtungen:

- Mindestens **4 konkrete Erkenntnisse oder Probleme**
- Eine **Priorisierung** der Probleme nach folgendem Schema:

| Priorität | Bedeutung |
|---|---|
| **Kritisch** | Aufgabe kann nicht abgeschlossen werden |
| **Wichtig** | Aufgabe ist deutlich erschwert |
| **Mittel** | Verwirrt oder verzögert die Nutzung |
| **Gering** | Kleinigkeit, kaum spürbare Auswirkung |

**Wichtig**
1. Es erschwert die Navigation deutlich, es funktioniert zwar ohne Probleme aber es nervt.
3. Manche Infos zu den Tickets sind kaum zu erkennen. Für den User sehr müsahm und ermüdent
6. Das Erstellen ist zwar gewährleistet, aber der Benutzer kann überrascht werden. Wenn ich kein Sternchen sehe gehe ich davon aus, dass das Feld optional ist.

**Gering**
4. Kann den User stören und ist nicht optimal aber kein Beinbruch

---

## Teil 5 – Kurzfazit

Formulieren Sie kurz:

- Was funktioniert **gut**?
- Was sollte **verbessert** werden?
- Welche **zwei Probleme** haben die höchste Priorität?

---

Grundsätzlich ist die App Strukturiert und schlank aufgebaut. Die Funktionalitäten funktioneren alle. Man kommt immer zum Ziel es gibt nirgends etwas was komplett blockiert oder gar nicht geht.

Die Navigation sollte angepasst werden und links gehalten werden. Der Kontrast bei der Übersicht muss umgedingt verbessert werden. Pflichtfelder müssen markiert werden im Formular.

Navi und Kontrast sind aus meiner Sicht am wichtigsten. Danach die Pflichtfelder im Formular markieren. Der Rest ist dann nicht ganz so dringend umzusetzen

## Erwartetes Ergebnis

Am Ende soll jede Gruppe **abgeben oder vorstellen**:

1. Die gewählte Testmethode und Begründung
2. Die 3 Testaufgaben (ggf. angepasst)
3. Die dokumentierten Beobachtungen
4. Mindestens 4 Erkenntnisse oder Probleme
5. Die Priorisierung der Probleme
6. Ein kurzes Fazit (ca. 5 Sätze)

---

## Zeitrahmen

**Gesamtzeit: ca. 60 Minuten**

| Phase | Dauer |
|---|---|
| Methode und Aufgaben festlegen | 10 Min |
| Test durchführen | 15 Min |
| Beobachtungen auswerten | 20 Min |
| Priorisierung | 10 Min |
| Kurzfazit formulieren | 5 Min |

---

## Hinweise

- Achten Sie nicht nur auf Funktion, sondern auf die **Nutzererfahrung**
- Beobachten Sie auch Unsicherheit, Zögern und Missverständnisse – nicht nur Fehler
- Formulieren Sie Probleme möglichst **konkret** (nicht: „unübersichtlich", sondern: „Der Speichern-Button ist schwer zu finden, weil …")
- Leiten Sie aus den Beobachtungen **klare Erkenntnisse** ab
- Der Prototyp ist absichtlich nicht perfekt – das gehört zur Übung

---

## Projektstruktur (zur Orientierung)

```
src/
├── components/       # Wiederverwendbare UI-Komponenten
│   ├── Header.tsx    # Navigation
│   ├── StatCard.tsx  # Kennzahlenkarte (Dashboard)
│   └── TicketCard.tsx # Einzelne Ticket-Anzeige
├── data/
│   └── mockTickets.ts # Lokale Mock-Daten
├── pages/            # Seiten der App
│   ├── Dashboard.tsx
│   ├── TicketList.tsx
│   ├── NewTicket.tsx
│   └── TicketConfirmation.tsx
└── types/
    └── ticket.ts     # TypeScript-Typen
```
