//Begruessen des Users auf der Startseite 

//sowie Zitat des Tages

//Begrüßen
if (typeof localStorage !== 'undefined') {
    //Nutzernnamen abrufen
    var userData = JSON.parse(localStorage.getItem('userData'));
    var username = userData.username;
    //Nutzernamen einfügen
    var greetingElement = document.getElementById('begruessung');
    greetingElement.textContent = 'Hallo, ' + username + '!';
  } else {
    window.location.href = "./error.html";
    console.log('Etwas ist schiefgelaufen!');
  }

//Zitat des Tages

// Liste mit verschiedenen Zitaten
var zitate = [
    "Armut ist keine Schande, aber sie ist sehr unbequem. - Miguel de Cervantes",
    "Geld ist nicht alles, aber ohne Geld ist alles nichts. - Unbekannt",
    "Armut beginnt im Kopf und endet auch dort. - Johann Wolfgang von Goethe",
    "Armut ist ein Zustand, Reichtum eine Gesinnung. - William Shakespeare",
    "Wer glaubt, dass Geld alles ist, vermisst das Wesentliche. - Unbekannt",
    "Das Glück besteht nicht darin, dass du tun kannst, was du willst, sondern darin, dass du immer willst, was du tust. - Leo Tolstoi",
    "Kein Geld auf der Welt kann das ersetzen, was man verloren hat. - Rose Kennedy",
    "Reichtum besteht nicht im Besitz von Schätzen, sondern im Verzicht auf Bedürfnisse. - Epikur",
    "Wer kein Geld hat, hat auch keine Freiheit. - Johann Wolfgang von Goethe",
    "Ein glückliches Leben ist nicht das Ergebnis von materiellem Reichtum, sondern von innerer Zufriedenheit. - Dalai Lama",
    "Geld ist nur ein Instrument, um die Dinge zu tun, die man tun möchte. Es ist nicht das Ziel im Leben. - Unbekannt",
    "Geld ist wie Zeit. Ohne Aufmerksamkeit und Interesse hat es keinen Wert. - Henry David Thoreau",
    "Geld ist nichts als Papier, das eine Illusion von Reichtum schafft. - Robert Kiyosaki",
    "Geld ist nur ein Werkzeug. Es gibt Dinge im Leben, die man nicht kaufen kann: Liebe, Freundschaft, Glück, Gesundheit. - Unbekannt",
    "Geld ist ein Schleier, der die Wahrheit verdeckt. - Mahatma Gandhi",
    "Geld ist der Schleier, der zwischen uns und der Welt steht. - Ralph Waldo Emerson",
    "Geld kann nicht alles kaufen, aber es kann einem helfen, sich um die Dinge zu kümmern, die man liebt. - Unbekannt",
    "Geld macht nicht glücklich, aber es beruhigt die Nerven. - Unbekannt",
    "Je mehr Geld man hat, desto mehr Verantwortung hat man, es richtig zu verwenden. - Henry Ford",
    "Geld ist wie ein guter Diener, aber ein schlechter Herr. - Francis Bacon",
    "Geld kann die Dinge erleichtern, aber es kann das Leben nicht besser machen. - Unbekannt",
    "Wenn du viel Geld hast, denke daran, dass es deine Verantwortung ist, es auf eine Weise zu verwenden, die der Welt zugute kommt. - Unbekannt"
  ];
  
  // Zufällig ein Zitat auswählen
  var randomIndex = Math.floor(Math.random() * zitate.length);
  var ausgewaehltesZitat = zitate[randomIndex];
  var zitatElement = document.getElementById('zitat');
  zitatElement.textContent = ausgewaehltesZitat;
  
  