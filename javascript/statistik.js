var transaktionen = JSON.parse(localStorage.getItem('transactions_list')) || [];

var einnahmenliste = [];
var ausgabenliste = [];

transaktionen.forEach(element => {
    var transaktionselement = {
        kategorie: element.kategorie,
        preis: element.preis,
        datum: element.datum
    }
    if (transaktionselement.preis <= 0) {
        ausgabenliste.push(transaktionselement);
    } else if (transaktionselement.preis >= 0) {
        einnahmenliste.push(transaktionselement);
    } else {
        console.log("Fehler bei Transaktionsimport");
    }
});
//IMPORT ENDE


// Einnahmen-Kreisdiagramm erstellen
var ctxEinnahmen = document.getElementById('einnahmendiagramm').getContext('2d');
var einnahmenChart = new Chart(ctxEinnahmen, {
    type: 'pie',
    data: {
        labels: einnahmenliste.map(function(transaktion) {
            return transaktion.kategorie;
        }),
        datasets: [{
            data: einnahmenliste.map(function(transaktion) {
                return transaktion.preis;
            }),
            backgroundColor: generateColors(einnahmenliste.length)
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: 'white'
            }
        },
        responsive: true,
        title: {
            display: true,
            text: 'Einnahmen nach Kategorie'
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function(context) {
                        var label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += context.parsed + '€';
                        return label;
                    }
                }
            },
            datalabels: {
                color: 'white', // Schriftfarbe auf Weiß setzen
                font: {
                    weight: 'bold'
                }
            }
        }
    }
});

// Ausgaben-Kreisdiagramm erstellen
var ctxAusgaben = document.getElementById('ausgabendiagramm').getContext('2d');
var ausgabenChart = new Chart(ctxAusgaben, {
    type: 'pie',
    data: {
        labels: ausgabenliste.map(function(transaktion) {
            return transaktion.kategorie;
        }),
        datasets: [{
            data: ausgabenliste.map(function(transaktion) {
                return transaktion.preis;
            }),
            backgroundColor: generateColors(ausgabenliste.length)
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Ausgaben nach Kategorie'
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function(context) {
                        var label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += context.parsed + '€';
                        return label;
                    }
                }
            },
            datalabels: {
                color: 'white', // Schriftfarbe auf Weiß setzen
                font: {
                    weight: 'bold'
                }
            }
        }
    }
});

// Generieren von Hintergrundfarben
function generateColors(count) {
    var colors = [
        "#0000FF", // Blau
        "#6495ED", // Kornblumenblau
        "#1E90FF", // Dodger-Blau
        "#4169E1", // Königsblau
        "#00008B", // Dunkelblau
        "#0000CD", // Mittelblau
        "#191970", // Marineblau
        "#87CEEB", // Himmelblau
        "#4682B4", // Stahlblau
        "#ADD8E6" // Hellblau
      ];
    return colors.slice(0, count);
}

// Hinzufügen einer Ausgabe
function addAusgabe() {
    var kategorie = prompt('Geben Sie die Kategorie der Ausgabe ein:');
    var beschreibung = prompt('Geben Sie die Beschreibung ein:');
    var preis = parseFloat(prompt('Geben Sie den Preis der Ausgabe ein:'));
    var datum = prompt('Geben Sie das Datum der Ausgabe ein:');

    if (kategorie === null || beschreibung === null || isNaN(preis) || datum === null) {
        return; // Beendet die Funktion, wenn eine der Eingaben null ist oder der Preis keine gültige Zahl ist
    }

    var ausgabe = {
        kategorie: kategorie,
        beschreibung: beschreibung,
        preis: -preis,
        datum: datum
    };

    ausgabenliste.push(ausgabe);
    transaktionen.push(ausgabe);
    localStorage.setItem('transactions_list', JSON.stringify(transaktionen));
    ausgabenChart.update(); // Chart aktualisieren
    location.reload();
}

// Hinzufügen einer Einnahme
function addEinnahme() {
    var kategorie = prompt('Geben Sie die Kategorie der Einnahme ein:');
    var beschreibung = prompt('Geben Sie die Beschreibung ein:');
    var preis = parseFloat(prompt('Geben Sie den Preis der Einnahme ein:'));
    var datum = prompt('Geben Sie das Datum der Einnahme ein:');

    if (kategorie === null || beschreibung === null || isNaN(preis) || datum === null) {
        return; // Beendet die Funktion, wenn eine der Eingaben null ist oder der Preis keine gültige Zahl ist
    }

    var einnahme = {
        kategorie: kategorie,
        beschreibung: beschreibung,
        preis: preis,
        datum: datum
    };

    einnahmenliste.push(einnahme);
    transaktionen.push(einnahme);
    localStorage.setItem('transactions_list', JSON.stringify(transaktionen));
    einnahmenChart.update(); // Chart aktualisieren
    location.reload();
}

document.getElementById("buttonEinzahlen").addEventListener("click", function() {
    location.reload();
});

document.getElementById("buttonNeuerKauf").addEventListener("click", function() {
    location.reload();
});