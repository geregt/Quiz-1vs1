const questionsLevel1 = [
  {
    id: 1,
    type: 'text',
    question: 'Wie hieß die Hauptstadt der BRD vor Berlin?',
    mediaUrl: null,
    answers: ['Bonn', 'Köln', 'Frankfurt', 'Hamburg'],
    correctIndex: 0
  },
  {
    id: 2,
    type: 'text',
    question: 'Welche Position hatte Joseph Goebbels im dritten Reich?',
    mediaUrl: null,
    answers: ['Verteidigungsminister', 'Kommandant der Wehrmacht', 'Stellvertreter des Reichskanzlers','Propagandaleiter'],
    correctIndex: 3
  },
  {
    id: 3,
    type: 'text',
    question: 'Wodurch starb Adolf Hitler?',
    mediaUrl: null,
    answers: ['Eine Bombe', 'Verwundung im Krieg','Selbstmord', 'Vergiftung'],
    correctIndex: 2
  },
  {
    id: 4,
    type: 'text',
    question: 'In welchem Jahr begann der Erste Weltkrieg?',
    mediaUrl: null,
    answers: ['1912', '1914', '1918', '1920'],
    correctIndex: 1
  },
  {
    id: 5,
    type: 'image',
    question: 'Welche Person ist auf dem Bild zu sehen?',
    mediaUrl: "/media/lvl1_1.png",
    answers: ['Winston Churchill', 'Josef Stalin', 'Benito Mussolini', 'Otto von Bismarck'],
    correctIndex: 2,
    credits: 'Foto von Henri Roger‑Viollet, Quelle: Wikimedia Commons (Public Domain).',
  },
  {
    id: 6,
    type: 'text',
    question: 'Wo unterzeichnete Deutschland den Vertrag zur Niederlage im 1. Weltrkieg?',
    mediaUrl: null,
    answers: ['Wien', 'Versailles', 'Genf', 'Basel'],
    correctIndex: 1
  },
  {
    id: 7,
    type: 'image',
    question: 'Wie nennt man die angebrachte Metallspitze an einer Waffe?',
    mediaUrl: "/media/lvl1_2.png",
    answers: ['Messer', 'Sichel', 'Morgenstern', 'Bajonett'],
    correctIndex: 3,
    credits: 'KI - Generiert von Perplexity',
  },
  {
    id: 8,
    type: 'text',
    question: 'Wie nannte die japanische Armee den bewussten Selbstmord zum Zerstören eines Gegnerischen Objekts?',
    mediaUrl: null,
    answers: ['Kamikaze', 'Tatakai', 'Kurabu', 'Kyatchi'],
    correctIndex: 0
  },
  {
    id: 9,
    type: 'text',
    question: 'Welche deutsche Stadt wurde am 13.Februar.1945 fast vollständig Zerstört?',
    mediaUrl: null,
    answers: ['Köln', 'Dresden', 'Frankfurt', 'Berlin'],
    correctIndex: 1
  },
  {
    id: 10,
    type: 'text',
    question: 'Welche Schlacht um Französisches Gebiet im 1. Weltkrieg wurde als "Die Hölle von ..." bekannt',
    mediaUrl: null,
    answers: ['Lille', 'Straßbourg', 'Paris', 'Verdun'],
    correctIndex: 3
  },
    {
    id: 11,
    type: 'text',
    question: 'Wie nennt man das Bündnis zwischen Deutschland, Österreich-Ungarn und Italien vor dem Ersten Weltkrieg?',
    mediaUrl: null,
    answers: ['Dreierbund', 'Entente Cordiale', 'NATO', 'Warschauer Pakt'],
    correctIndex: 0
  },
  {
    id: 12,
    type: 'text',
    question: 'Welches Ereignis gilt als Auslöser des Ersten Weltkriegs?',
    mediaUrl: null,
    answers: [
      'Die Oktoberrevolution in Russland',
      'Die Ermordung von Franz Ferdinand in Sarajevo',
      'Die Bombardierung von Pearl Harbor',
      'Der Überfall auf Polen'
    ],
    correctIndex: 1
  },
  {
    id: 13,
    type: 'text',
    question: 'Wie hieß die demokratische Staatsform in Deutschland zwischen 1919 und 1933?',
    mediaUrl: null,
    answers: ['Weimarer Republik', 'Deutsches Kaiserreich', 'Bundesrepublik Deutschland', 'Norddeutscher Bund'],
    correctIndex: 0
  },
  {
    id: 14,
    type: 'text',
    question: 'Welche Staatsform hatte Deutschland vor 1918?',
    mediaUrl: null,
    answers: ['Republik', 'Monarchie', 'Militärdiktatur', 'Theokratie'],
    correctIndex: 1
  },
  {
    id: 15,
    type: 'text',
    question: 'Welche Front im Ersten Weltkrieg verlief hauptsächlich durch Frankreich und Belgien?',
    mediaUrl: null,
    answers: ['Westfront', 'Ostfront', 'Südfront', 'Nordfront'],
    correctIndex: 0
  },
  {
    id: 16,
    type: 'text',
    question: 'Welche Länder waren während des 1. Weltkrieges eine Doppelmonarchie?',
    mediaUrl: null,
    answers: ['Deutsches Reich - Polen', 'Österreich-Ungarn', 'Russland - Finnland', 'Norwegen - Schweden'],
    correctIndex: 1
  },
  {
    id: 17,
    type: 'text',
    question: 'Nach welchem Krieg entstand 1871 das deutsche Kaiserreich?',
    mediaUrl: null,
    answers: ['Deutsch-Polnische Krieg', 'Deutsch-Belgische Krieg', 'Deutsch-Französische Krieg', 'Deutsch-Dänische Krieg'],
    correctIndex: 2
  },
  {
    id: 18,
    type: 'text',
    question: 'Wie bezeichnet man die Zeit der großen Wirtschaftskrise Ende der 1920er Jahre?',
    mediaUrl: null,
    answers: ['Goldene Zwanziger', 'Große Depression', 'Neue Sachlichkeit', 'Renaissance'],
    correctIndex: 1
  },
  {
    id: 19,
    type: 'text',
    question: 'Welches Land trat im Ersten Weltkrieg 1917 auf Seiten der Alliierten in den Krieg ein?',
    mediaUrl: null,
    answers: ['Japan', 'Spanien', 'USA', 'Schweiz'],
    correctIndex: 2
  },
  {
    id: 20,
    type: 'audio',
    question: 'Dieses kurze Signal ertönt. Wozu wurde ein solcher Alarm im Zweiten Weltkrieg vor allem genutzt?',
    mediaUrl: '/media/lvl1_3.mp3',
    answers: ['Feierabendsignal', 'Luftschutzwarnung', 'Beginn einer Parade', 'Wechsel der Wache'],
    correctIndex: 1,
    credits: 'Audio, Veröffentlicht von Nallchen, Wikipedia(Public Domain) ',
  },
  {
    id: 21,
    type: 'text',
    question: 'Welche politische Richtung gewann in Deutschland während der Weltwirtschaftskrise stark an Einfluss?',
    mediaUrl: null,
    answers: ['Monarchisten', 'Liberale', 'Nationalsozialisten', 'Anarchisten'],
    correctIndex: 2
  },
  {
    id: 22,
    type: 'text',
    question: 'Wie hieß das deutsche Staatsoberhaupt in der Weimarer Republik?',
    mediaUrl: null,
    answers: ['Bundeskanzler', 'Kaiser', 'Reichspräsident', 'Generalsekretär'],
    correctIndex: 2
  },
  {
    id: 23,
    type: 'text',
    question: 'Welches Land wurde 1939 von Deutschland und der Sowjetunion gemeinsam angegriffen?',
    mediaUrl: null,
    answers: ['Frankreich', 'Polen', 'Norwegen', 'Griechenland'],
    correctIndex: 1
  },
  {
    id: 24,
    type: 'image',
    question: 'Welche Art von Ausrüstung ist auf dem Bild dargestellt?',
    mediaUrl: '/media/lvl1_4.png',
    answers: ['Panzerkette', 'Artillerie', 'Stacheldraht', 'Funkgerät'],
    correctIndex: 2,
    credits: 'KI - Generiert von Perplexity',
  },
  {
    id: 25,
    type: 'text',
    question: 'Welcher Begriff beschreibt den Stellungskrieg mit Schützengräben im Ersten Weltkrieg?',
    mediaUrl: null,
    answers: ['Blitzkrieg', 'Grabenkampf', 'Partisanenkrieg', 'Seekrieg'],
    correctIndex: 1
  },
  {
    id: 26,
    type: 'text',
    question: 'Welche Stadt wurde 1945 Ziel von Atombombenangriffen?',
    mediaUrl: null,
    answers: ['Hiroshima und Nagasaki', 'Tokio und Osaka', 'Seoul und Busan', 'Peking und Shanghai'],
    correctIndex: 0
  },
  {
    id: 27,
    type: 'text',
    question: 'Wie hieß das Bündnis aus Großbritannien, Frankreich und Russland vor dem Ersten Weltkrieg?',
    mediaUrl: null,
    answers: ['Triple Alliance', 'Stahlpakt', 'Dreiverband', 'Triple Entente'],
    correctIndex: 3
  },
  {
    id: 28,
    type: 'audio',
    question: 'Welches Gerät macht dieses Geräusch?',
    mediaUrl: '/media/lvl1_5.mp3',
    answers: [
      'Schreibmaschiene',
      'Taschenlampe',
      'Geigerzähler',
      'Funkgerät'
    ],
    correctIndex: 2,
    credits: 'Audio, uyt384, Wikimedia Commons, Lizenz CC BY‑SA 3.0 (creativecommons.org/licenses/by-sa/3.0/).'
  },
  {
    id: 29,
    type: 'text',
    question: 'Wie hieß eine der Atombomben, die im 2. Weltkrieg abgeworfen wurden?',
    mediaUrl: null,
    answers: ['Little Girl','Project Allies', 'Fat Man',  'Project Manhattan'],
    correctIndex: 2
  },
  {
    id: 30,
    type: 'text',
    question: 'Welcher dieser Begriffe gehört NICHT in die Zeit des Ersten Weltkriegs?',
    mediaUrl: null,
    answers: ['Schützengraben', 'U-Boot-Krieg', 'Blockade', 'Berliner Mauer'],
    correctIndex: 3
    
  },
  {
    id: 31,
    type: 'image',
    question: 'Welches Land ist hier auf einer Karte des 1. Weltkrieges markiert?',
    mediaUrl: "/media/lvl1_6.png",
    answers: ['Österreich-Ungarn', 'Osmanisches Reich', 'Jugoslawien', 'UDSSR'],
    correctIndex: 0,
    credits: 'Bild: Trajan117, Wikipedia, Lizenz CC BY‑SA 3.0 (creativecommons.org/licenses/by-sa/3.0/)',
  },
  {
    id: 32,
    type: 'text',
    question: 'Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?',
    mediaUrl: null,
    answers: ['Konrad Adenauer', 'Willy Brandt', 'Helmut Kohl', 'Ludwig Erhard'],
    correctIndex: 0
  },
  {
    id: 33,
    type: 'text',
    question: 'Welche Partei regierte lange Zeit in der DDR?',
    mediaUrl: null,
    answers: ['SPD', 'SED', 'CDU', 'DKP'],
    correctIndex: 1
  },
  {
    id: 34,
    type: 'image',
    question: 'Wie hieß die gezeigt Kanone der Nazis im 2. Weltkrieg?',
    mediaUrl: "/media/lvl1_7.png",
    answers: ['Starker Wilhelm', 'Großer Heinrich', 'Dicke Bertha', 'Schwerer Gustav'],
    correctIndex: 3,
    credits: 'KI - Generiert mit Perplexity',
  },
  {
    id: 35,
    type: 'text',
    question: 'Welche haltung hatte Irland im 2. Weltkrieg?',
    mediaUrl: null,
    answers: ['Alliiert', 'Axenmacht', 'Neutral', 'Teil Großbritanniens'],
    correctIndex: 2,
  },
  {
    id: 36,
    type: 'audio',
    question: 'Was bedeutet dieses Morsecode-Signal?',
    mediaUrl: "/media/lvl1_8.mp3",
    answers: ['Mayday', 'Funkstille', 'Artilleriebefehl', 'SOS'],
    correctIndex: 3,
    credits: 'Audio: von Hydrargyrum,Wikipedia gemeinfrei (Public Domain)'
  },

];

const questionsLevel2 = [
  {
    id: 1,
    type: 'text',
    question: 'Welcher König Frankreichs war als "Sonnenkönig bekannt?',
    mediaUrl: null,
    answers: ['Ludwig XVI', 'Jean-Jacques Rousseau', 'Ludwig XIV', 'Napoleon Bonaparte'],
    correctIndex: 2
  },
  {
    id: 2,
    type: 'text',
    question: 'Welche Schlacht brachte vor dem 1. Weltkrieg die meisten Todesopfer?',
    mediaUrl: null,
    answers: ['Völkerschlacht bei Leipzig', 'Deutsch-Französische Krieg', '2. Kreuzzug', '30 Jährige Krieg'],
    correctIndex: 0
  },
  {
    id: 3,
    type: 'image',
    question: 'Wie wurde dieses Konstrukt genannt?',
    mediaUrl: "/media/lvl2_1.png",
    answers: ['Galgen', 'Guillotine', 'Amboss', 'Trichter'],
    correctIndex: 1,
    credits: 'KI - Generiert von Perplexity'
  },
  {
    id: 4,
    type: 'text',
    question: 'Wo fand der letzte Krieg Napoleons statt?',
    mediaUrl: null,
    answers: ['Leipzig', 'Wien', 'Waterloo', 'Paris'],
    correctIndex: 2
  },
  {
    id: 5,
    type: 'text',
    question: 'Welche Sitzung entschied nach dem Ende der Befreiungskriege über europas Schicksal?',
    mediaUrl: null,
    answers: ['Wiener Kongress', 'Versailler Vertrag', 'Berliner Vertrag', 'Genfer Konvention'],
    correctIndex: 0
  },
  {
    id: 6,
    type: 'text',
    question: 'Wie wurde der Herrscher Venedigs genannt?',
    mediaUrl: null,
    answers: ['Kaiser', 'Papst', 'Doge', 'Signore'],
    correctIndex: 2
  },
  {
    id: 7,
    type: 'text',
    question: 'Wieviele Kreuzzüge gab es?',
    mediaUrl: null,
    answers: ['2', '5', '4', '3'],
    correctIndex: 3
  },
  {
    id: 8,
    type: 'text',
    question: 'Wie hieß die Stadt Istanbul früher?',
    mediaUrl: null,
    answers: ['Damaskus', 'Konstantinopel', 'Sparta', 'Pompeji'],
    correctIndex: 1
  },
  {
    id: 9,
    type: 'text',
    question: 'Wer bewies das Heliozentrische Weltbild?',
    mediaUrl: null,
    answers: ['Isaac Newton', 'Nikola Tesla', 'Galileo Galilei', 'Albert Einstein'],
    correctIndex: 2
  },
  {
    id: 10,
    type: 'text',
    question: 'Wer prägte massiv die Bewegung der Protestanten?',
    mediaUrl: null,
    answers: ['Martin Luther', 'Martin Luther King', 'Queen Victoria', 'Georg Büchner'],
    correctIndex: 0
  },
  {
    id: 11,
    type: 'audio',
    question: 'Wann ertönte NICHT dieses Geräusch?',
    mediaUrl: "/media/lvl2_2.mp3",
    answers: ['Zur vollen Stunde', 'Einer Hochzeit', 'Einer Beerdigung', 'Bei Geburtstagen'],
    correctIndex: 3,
    credits:"Audio, Aufnahme von Andreasdiezwior (Wikimedia Commons), gemeinfrei / CC BY‑SA 2.0 DE"
  },
  {
    id: 12,
    type: 'text',
    question: 'Welcher Mönch leitete mit seinen 95 Thesen die Reformation ein?',
    mediaUrl: null,
    answers: ['Johannes Calvin', 'Martin Luther', 'Ignatius von Loyola', 'Philipp II.'],
    correctIndex: 1
  },
  {
    id: 13,
    type: 'text',
    question: 'Wie nennt man die Vorstellung, dass die Erde im Mittelpunkt des Planetensystems steht?',
    mediaUrl: null,
    answers: ['Geozentrisches Weltbild', 'Heliozentrisches Weltbild', 'Astrologisches Weltbild', 'Mythisches Weltbild'],
    correctIndex: 0
  },
  {
    id: 14,
    type: 'text',
    question: 'Welche Erfindung verbreitete ab dem 15. Jahrhundert Ideen und Schriften besonders schnell in Europa?',
    mediaUrl: null,
    answers: ['Dampfmaschine', 'Buchdruck mit beweglichen Lettern', 'Telegraph', 'Kompass'],
    correctIndex: 1
  },
  {
    id: 15,
    type: 'text',
    question: 'Welches Ereignis von 1492 gilt als Beginn der europäischen Expansion nach Amerika?',
    mediaUrl: null,
    answers: ['Landung von Vasco da Gama in Indien', 'Erste Weltumsegelung von Magellan', 'Entdeckung Amerikas durch Christoph Kolumbus', 'Gründung der East India Company'],
    correctIndex: 2
  },
  {
    id: 16,
    type: 'image',
    question: 'Dieser Palast symbolisiert die Macht des französischen Königs. Wie heißt er?',
    mediaUrl: '/media/lvl2_3.jpg',
    answers: ['Schloss Versailles', 'Schloss Sanssouci', 'Notre Dame', 'Escorial'],
    correctIndex: 0,
    credits: 'Bild, von Pierra Patel, Wikimedia Commons (Public Domain)',
  },
  {
    id: 17,
    type: 'image',
    question: 'Wofür ist die Flagge bekannt?',
    mediaUrl: "/media/lvl2_4.png",
    answers: ['Gekarpertes Schiff', 'Gestrandet (SOS)', 'Piraten', 'Seerettung'],
    correctIndex: 2,
    credits: 'KI - Generiert von Perplexity',
  },
  {
    id: 18,
    type: 'text',
    question: 'Wie heißt das Zeitalter, in dem Vernunft und Wissenschaft über Tradition gestellt wurden?',
    mediaUrl: null,
    answers: ['Romantik', 'Barock', 'Aufklärung', 'Klassik'],
    correctIndex: 2
  },
  {
    id: 19,
    type: 'text',
    question: 'Welcher Philosoph forderte eine Gewaltenteilung in Legislative, Exekutive und Judikative?',
    mediaUrl: null,
    answers: ['Thomas Hobbes', 'Montesquieu', 'Jean-Jacques Rousseau', 'Voltaire'],
    correctIndex: 1
  },
  {
    id: 20,
    type: 'text',
    question: 'Welcher Krieg von 1618–1648 verwüstete große Teile des Heiligen Römischen Reiches?',
    mediaUrl: null,
    answers: ['Siebenjähriger Krieg', 'Dreißigjähriger Krieg', 'Spanischer Erbfolgekrieg', 'Hundertjähriger Krieg'],
    correctIndex: 1
  },
  {
    id: 21,
    type: 'text',
    question: 'Welche Methode wurde genutzt um vermeintliche Hexen zu entlarven?',
    mediaUrl: null,
    answers: ['Wasserprobe', 'Lauftest', 'Schriftprobe', 'Gleichgewichtstest'],
    correctIndex: 0
  },
  {
    id: 22,
    type: 'text',
    question: 'Welcher Seefahrer umsegelte als erster die Erde?',
    mediaUrl: null,
    answers: ['Christoph Kolumbus', 'Ferdinand Magellan', 'James Cook', 'Vasco da Gama'],
    correctIndex: 1
  },
  {
    id: 23,
    type: 'text',
    question: 'Welches Reich eroberte Hernán Cortés im frühen 16. Jahrhundert?',
    mediaUrl: null,
    answers: ['Inka-Reich', 'Aztekenreich', 'Osmanisches Reich', 'Maya-Stadtstaaten'],
    correctIndex: 1
  },
  {
    id: 24,
    type: 'text',
    question: 'Wie nennt man die von Europa, Afrika und Amerika gebildete Handelsverbindung dieser Zeit?',
    mediaUrl: null,
    answers: ['Seidenstraße', 'Dreieckshandel', 'Nordischer Bund', 'Kontinentalsystem'],
    correctIndex: 1
  },
  {
    id: 25,
    type: 'text',
    question: 'Welche Stadt entwickelte sich im 17. Jahrhundert zu einem wichtigen Handelszentrum der Niederlande?',
    mediaUrl: null,
    answers: ['Rotterdam', 'Amsterdam', 'Den Haag', 'Antwerpen'],
    correctIndex: 1
  },
  {
    id: 26,
    type: 'text',
    question: 'Wie nannte mann einen Islamischen Herrscher?',
    mediaUrl: null,
    answers: ['Messias', 'Sultan', 'König', 'Kasbah'],
    correctIndex: 1
  },
  {
    id: 27,
    type: 'text',
    question: 'Wie nennt man die Rückbesinnung auf Kunst und Wissenschaft der Antike im 15./16. Jahrhundert?',
    mediaUrl: null,
    answers: ['Barock', 'Renaissance', 'Gotik', 'Romantik'],
    correctIndex: 1
  },
  {
    id: 28,
    type: 'image',
    question: 'Welche Waffe aus dem 16./17. Jahrhundert siehst du hier?',
    mediaUrl: '/media/lvl2_5.png',
    answers: ['Speer', 'Muskete', 'Hellebarde', 'Morgenstern'],
    correctIndex: 2,
    credits: 'KI - Generiert von Perplexity'
  },
  {
    id: 29,
    type: 'text',
    question: 'Welches Land wurde im 18. Jahrhundert durch seine Flotte und Kolonien zur führenden Seemacht?',
    mediaUrl: null,
    answers: ['Spanien', 'Portugal', 'Großbritannien', 'Schweden'],
    correctIndex: 2
  },
  {
    id: 30,
    type: 'text',
    question: 'Welcher Naturforscher beschrieb 1687 Gravitationsgesetze?',
    mediaUrl: null,
    answers: ['Galileo Galilei', 'Johannes Kepler', 'Isaac Newton', 'René Descartes'],
    correctIndex: 2
  },
  {
    id: 31,
    type: 'image',
    question: 'Welche Nachricht wird hier ausgerufen?',
    mediaUrl: '/media/lvl2_6.png',
    answers: ['Beginn Amerikanische Revolution', 'Betteln um Geld', 'Ende des jahres', 'Beginn Französische Revolution'],
    correctIndex: 3,
    credits: 'KI - Generiert mit Perplexity'
  },
  {
  id: 32,
    type: 'text',
    question: 'Zu welchem heutigen Staat kamen damals viele britischen Gefangene?',
    mediaUrl: null,
    answers: ['Marokko' ,'Indien','Australien','USA'],
    correctIndex: 2
  }
];

const questionsLevel3 = [
  {
    id: 1,
    type: 'audio',
    question: 'Welche Sprache ist das ?',
    mediaUrl: "/media/lvl3_1.mp3",
    answers: ['Alt Nordisch' ,'Angelsächsisch','Altostslawisch','Keltisch'],
    correctIndex: 0,
    credits:"Auschnitt aus einem Video von 'Equator AI' https://www.youtube.com/watch?v=Wc22W3bos64"
  },
  {
    id: 2,
    type: 'text',
    question: 'Welcher Wikinger entdeckte Vinland (Amerika)?',
    mediaUrl: null,
    answers: ['Ragnar Lothbrok' ,'Leif Eriksson','Ivar der Knochenlose','Björn Eisenseite'],
    correctIndex: 1
  },
  {
    id: 3,
    type: 'text',
    question: 'Welches Königreich gehörte im 9. Jahrhundert NICHT zu England?',
    mediaUrl: null,
    answers: ['Wessex' ,'Northumbria','Mercia','Irland'],
    correctIndex: 3
  },
  {
    id: 4,
    type: 'text',
    question: 'Welcher Italiener reiste an Kublai Kahns Hof?',
    mediaUrl: null,
    answers: ['Galileo Galilei' ,'Marco Polo','Antonio Vivaldi','Michelangelo'],
    correctIndex: 1
  },
  {
    id: 5,
    type: 'image',
    question: 'Welcher Nation kann man dieses Schiff zuordnen?',
    mediaUrl: "/media/lvl3_2.png",
    answers: ['Portugal' ,'Niederlande','Norwegen','England'],
    correctIndex: 2,
    credits:"KI - Generiert mit Perplexity"
  },
  {
    id: 6,
    type: 'text',
    question: 'Welche Stadt war 1000 das kulturelle und wissenschaftliche Zentrum Arabiens?',
    mediaUrl: null,
    answers: ['Damaskus' ,'Jerusalem','Bagdad','Aleppo'],
    correctIndex: 2
  },
  {
    id: 7,
    type: 'audio',
    question: 'Welcher Nation wird dieser Gesang zugeordnet?',
    mediaUrl: "/media/lvl3_3.mp3",
    answers: ['Mongolei' ,'Japan','England','Spanien'],
    correctIndex: 0,
    credits: "Audio: von User:Kku, Wikimedia Commons, Lizenz GFDL 1.2 & CC BY-SA 3.0."
  },
  {
    id: 8,
    type: 'image',
    question: 'Wie heißt diese Waffe?',
    mediaUrl: "/media/lvl3_4.png",
    answers: ['Dolch' ,'Sichelschwert','Säbel','Muskete'],
    correctIndex: 2,
    credits: "KI - Generiert mit Perplexity"
  },
  {
    id: 9,
    type: 'text',
    question: 'Welcher Fürst leitete die Einigung Japans ein?',
    mediaUrl: null,
    answers: ['Oda Nobunaga' ,'Akechi Mitsuhide','Sen no Rikyu','Toyotomi Hideyoshi'],
    correctIndex: 0
  },
  {
    id: 10,
    type: 'image',
    question: 'Wie heißt diese Waffe?',
    mediaUrl: "/media/lvl3_5.png",
    answers: ['Morgenstern' ,'Keule','Axt','Flegel'],
    correctIndex: 0,
    credits: "KI - Generiert mit Perplexity"
  },
  {
    id: 11,
    type: 'text',
    question: 'Welcher Religion gehörten die meisten Menschen in Spanien im 11. Jahrhundert an?',
    mediaUrl: null,
    answers: ['Christentum' ,'Islam','Judentum','Buddhismus'],
    correctIndex: 1
  },
  {
    id: 12,
    type: 'text',
    question: 'Welches Reich beherrschte im 9. Jahrhundert große Teile Mitteleuropas unter Karl dem Großen?',
    mediaUrl: null,
    answers: ['Römisches Reich', 'Frankenreich', 'Byzantinisches Reich', 'Osmanisches Reich'],
    correctIndex: 1
  },
  {
    id: 13,
    type: 'text',
    question: 'Welche Stadt war im Mittelalter Hauptstadt des Byzantinischen Reiches?',
    mediaUrl: null,
    answers: ['Rom', 'Konstantinopel', 'Alexandria', 'Bagdad'],
    correctIndex: 1
  },
  {
    id: 14,
    type: 'text',
    question: 'Welche Religion verbreitete sich ab dem 7. Jahrhundert von Arabien aus schnell über Nordafrika und Teile Europas?',
    mediaUrl: null,
    answers: ['Christentum', 'Islam', 'Judentum', 'Hinduismus'],
    correctIndex: 1
  },
  {
    id: 15,
    type: 'text',
    question: 'Wie heißt der Handelsweg, der China mit dem Mittelmeerraum verband?',
    mediaUrl: null,
    answers: ['Bernsteinstraße', 'Seidenstraße', 'Via Appia', 'Nordroute'],
    correctIndex: 1
  },
  {
    id: 16,
    type: 'image',
    question: 'Welcher europäische Baustil des Hochmittelalters ist hier zu sehen?',
    mediaUrl: '/media/lvl3_6.png',
    answers: ['Romanik', 'Gotik', 'Renaissance', 'Barock'],
    correctIndex: 1,
    credits: 'KI - Generiert mit Perplexity'
  },
  {
    id: 17,
    type: 'text',
    question: 'Welche Krankheit sorgte für den Tod von 1/3 der europäischen Bevölkerung?',
    mediaUrl: null,
    answers: ['Spanischer Floh', 'Schwarze Pest', 'Grippe', 'Grüne Seuche'],
    correctIndex: 1
  },
  {
    id: 18,
    type: 'text',
    question: 'Wie nennt man das System der Lehnsbeziehungen zwischen Herren und Vasallen im europäischen Mittelalter?',
    mediaUrl: null,
    answers: ['Demokratie', 'Feudalismus', 'Meritokratie', 'Absolutismus'],
    correctIndex: 1
  },
  {
    id: 19,
    type: 'text',
    question: 'Welche norditalienische Stadt wurde im Hochmittelalter zu einem Zentrum von Kunst und Banken?',
    mediaUrl: null,
    answers: ['Genua', 'Neapel', 'Venedig', 'Florenz'],
    correctIndex: 3
  },
  {
    id: 20,
    type: 'text',
    question: 'Welches Volk eroberte 1066 England in der Schlacht bei Hastings?',
    mediaUrl: null,
    answers: ['Sachsen', 'Normannen', 'Wikinger', 'Franken'],
    correctIndex: 1
  },
  {
    id: 21,
    type: 'text',
    question: 'Welche gewaltige Befestigungsanlage in China wurde über viele Jahrhunderte ausgebaut?',
    mediaUrl: null,
    answers: ['Verbotene Stadt', 'Große Mauer', 'Himmelstempel', 'Sommerpalast'],
    correctIndex: 1
  },
  {
    id: 22,
    type: 'text',
    question: 'Welche Stadt war Sitz des Papstes und religiöses Zentrum der lateinischen Christenheit?',
    mediaUrl: null,
    answers: ['Konstantinopel', 'Jerusalem', 'Rom', 'Avignon'],
    correctIndex: 2
  },
  {
    id: 23,
    type: 'text',
    question: 'Welches Königreich auf den Britischen Inseln wurde im 9. Jahrhundert besonders oft von Wikingern angriffen?',
    mediaUrl: null,
    answers: ['Wessex', 'Irland', 'Schottland', 'Böhmen'],
    correctIndex: 0
  },
  {
    id: 24,
    type: 'text',
    question: 'Welche Stadt in Al-Andalus war um das Jahr 1000 ein wichtiges kulturelles Zentrum der Muslime in Spanien?',
    mediaUrl: null,
    answers: ['Toledo', 'Cordoba', 'Granada', 'Barcelona'],
    correctIndex: 1
  },
  {
    id: 25,
    type: 'text',
    question: 'Welcher Kaiser wurde 800 in Rom von Papst Leo III. zum Kaiser gekrönt?',
    mediaUrl: null,
    answers: ['Otto I.', 'Karl der Große', 'Friedrich I. Barbarossa', 'Heinrich IV.'],
    correctIndex: 1
  },
  {
    id: 26,
    type: 'image',
    question: 'Welche bekannte japanische Waffe des Mittelalters ist hier dargestellt?',
    mediaUrl: '/media/lvl3_7.png',
    answers: ['Speer', 'Katana', 'Morgenstern', 'Armbrust'],
    correctIndex: 1,
    credits: 'KI - Generiert mit Perplexity'
  },
  {
    id: 27,
    type: 'text',
    question: 'Welche Stadt war KEINE Hansestadt?',
    mediaUrl: null,
    answers: ['Hamburg', 'Lübeck', 'Amsterdam', 'Tallinn'],
    correctIndex: 2
  },
  {
    id: 28,
    type: 'text',
    question: 'Welcher Fürst machte Dresden zum kulturellen Zentrum Sachsens?',
    mediaUrl: null,
    answers: ['Augustus I.', 'Augustus II.', 'Friedrich der Weise', 'Johann der Beständige'],
    correctIndex: 0
  },
  {
    id: 29,
    type: 'text',
    question: 'Welchem Gebiet ist das damalige Böhmen heute zuzuordnen?',
    mediaUrl: null,
    answers: ['England', 'USA', 'Serbien', 'Tschechien'],
    correctIndex: 3
  },
  {
    id: 30,
    type: 'text',
    question: 'Welche mittelalterliche Institution betrieb im 12. und 13. Jahrhundert viele Universitäten in Europa?',
    mediaUrl: null,
    answers: ['Zünfte', 'Kirche', 'Kaufmannsgilden', 'Königshöfe'],
    correctIndex: 1
  },
  {
    id: 31,
    type: 'text',
    question: 'Welcher Vertrag legte 1648 das Ende des Dreißigjährigen Krieges fest?',
    mediaUrl: null,
    answers: [
      'Vertrag von Versailles',
      'Westfälischer Friede',
      'Wiener Kongress',
      'Vertrag von Utrecht'
    ],
    correctIndex: 1
  }
];

const questionsLevel4 = [
  {
    id: 1,
    type: 'text',
    question: 'Welche antike Stadt wurde 79 n. Chr. durch den Vesuvausbruch zerstört?',
    mediaUrl: null,
    answers: ['Athen', 'Pompeji', 'Karthago', 'Troja'],
    correctIndex: 1
  },
  {
    id: 2,
    type: 'text',
    question: 'Welcher römische Kaiser zündete angeblich Rom an?',
    mediaUrl: null,
    answers: ['Nero', 'Augustus', 'Trajan', 'Caesar'],
    correctIndex: 0
  },
  {
    id: 3,
    type: 'text',
    question: 'Mit welchem Stamm hatte Rom KEINE nennenswerten Konflikte?',
    mediaUrl: null,
    answers: ['Griechen', 'Germanen', 'Chinesen', 'Ägypter'],
    correctIndex: 2
  },
  {
    id: 4,
    type: 'text',
    question: 'Welcher Gladiator setzte sich für die Freiheit der Sklaven ein?',
    mediaUrl: null,
    answers: ['Flamma', 'Marcus Attilius', 'Varus', 'Spartakus'],
    correctIndex: 3
  },
  {
    id: 5,
    type: 'image',
    question: 'Wie heißt das gezeigte Bauwerk?',
    mediaUrl: "/media/lvl4_1.png",
    answers: ['Maja-Tempel', 'Atlantis', 'Sphinx', 'Stonehenge'],
    correctIndex: 2,
    credits: 'KI - Generiert mit Perplexity'
  },
  {
    id: 6,
    type: 'text',
    question: 'Wie nennt man eine römische Hundertschaft?',
    mediaUrl: null,
    answers: ['Legion', 'Zenturie', 'Kohorte', 'Manipel'],
    correctIndex: 1
  },
  {
    id: 7,
    type: 'text',
    question: 'Von wem stammt das Zitat "Veni. Vidi. Vici."?',
    mediaUrl: null,
    answers: ['Nero', 'Kleopatra', 'Augustus', 'Caesar'],
    correctIndex: 3
  },
  {
    id: 8,
    type: 'text',
    question: 'Woher stammt das Wort für Händlergruppen "Karawan"?',
    mediaUrl: null,
    answers: ['Rom', 'Griechenland', 'Persien', 'Ägypten'],
    correctIndex: 2
  },
  {
    id: 9,
    type: 'text',
    question: 'Wo ist Latein noch heute eine Amtssprache?',
    mediaUrl: null,
    answers: ['Italien', 'Gibralta', 'Vatikanstadt', 'Andorra'],
    correctIndex: 2
  },
  {
    id: 10,
    type: 'audio',
    question: 'Welche Sprache ist hier zu hören?',
    mediaUrl: "/media/lvl4_2.mp3",
    answers: ['Persisch', 'Altgriechisch', 'Latein', 'Proto-Keltisch'],
    correctIndex: 2,
    credits: "Auschnitt aus einem Video von 'Equator AI' https://www.youtube.com/watch?v=Wc22W3bos64"
  },
  {
  id: 11,
  type: 'text',
  question: 'Welcher chinesische Philosoph prägte ab dem 5. Jh. v. Chr. die Lehre von Ordnung und Pflicht?',
  mediaUrl: null,
  answers: ['Laozi', 'Konfuzius', 'Sunzi', 'Mozi'],
  correctIndex: 1
},
{
  id: 12,
  type: 'text',
  question: 'Welche Dynastie begründete um 206 v. Chr. ein geeintes Kaiserreich in China?',
  mediaUrl: null,
  answers: ['Han-Dynastie', 'Qing-Dynastie', 'Song-Dynastie', 'Tang-Dynastie'],
  correctIndex: 0
},
{
  id: 13,
  type: 'text',
  question: 'Welches indische Reich wurde im 3. Jh. v. Chr. unter Ashoka besonders groß?',
  mediaUrl: null,
  answers: ['Maurya-Reich', 'Mogulreich', 'Gupta-Reich', 'Chola-Reich'],
  correctIndex: 0
},
{
  id: 14,
  type: 'text',
  question: 'Welches heutige Land war Kerngebiet des antiken Perserreiches?',
  mediaUrl: null,
  answers: ['Irak', 'Iran', 'Türkei', 'Syrien'],
  correctIndex: 1
},
{
  id: 15,
  type: 'text',
  question: 'In welchem Meer fanden viele Kämpfe der Perserkriege zwischen Griechen und Persern statt?',
  mediaUrl: null,
  answers: ['Schwarzes Meer', 'Rotes Meer', 'Mittelmeer', 'Ägäis'],
  correctIndex: 3
},
{
  id: 16,
  type: 'image',
  question: 'Zu welcher Kultur gehört diese Pyramidenanlage?',
  mediaUrl: '/media/lvl4_3.png',
  answers: ['Ägyptische Kultur', 'Maya', 'Inka', 'Altes China'],
  correctIndex: 1,
  credits: 'KI - Generiert mit Perplexity'
},
{
  id: 17,
  type: 'text',
  question: 'In welcher Region lebten die Maya hauptsächlich?',
  mediaUrl: null,
  answers: ['Anden', 'Yucatán und Mittelamerika', 'Nordatlantik', 'Arabische Halbinsel'],
  correctIndex: 1
},
{
  id: 18,
  type: 'text',
  question: 'Welche Schrift nutzten die Maya für Kalender und Inschriften?',
  mediaUrl: null,
  answers: ['Keilschrift', 'Hieroglyphen', 'Runen', 'Lateinschrift'],
  correctIndex: 1
},
{
  id: 19,
  type: 'text',
  question: 'Welche nordamerikanische Kultur baute große Erd-Hügelanlagen („Mounds“)?',
  mediaUrl: null,
  answers: ['Mississippikultur', 'Wikinger', 'Maori', 'Samen'],
  correctIndex: 0
},
{
  id: 20,
  type: 'text',
  question: 'Wie nennt man die nomadischen Völker, die in den Steppen Nordamerikas Bisons jagten?',
  mediaUrl: null,
  answers: ['Pueblos', 'Plains-Indianer', 'Inuit', 'Maya'],
  correctIndex: 1
},
{
  id: 21,
  type: 'text',
  question: 'Welche Stadt war ein wichtiges Zentrum der klassischen griechischen Kultur?',
  mediaUrl: null,
  answers: ['Rom', 'Athen', 'Babylon', 'Karthago'],
  correctIndex: 1
},
{
  id: 22,
  type: 'text',
  question: 'Welche berühmte Schule der Philosophie entstand in Athen um 387 v. Chr.?',
  mediaUrl: null,
  answers: ['Lykeion des Aristoteles', 'Akademie Platons', 'Stoa des Zenon', 'Garten Epikurs'],
  correctIndex: 1
},
{
  id: 23,
  type: 'text',
  question: 'Welcher Herrscher aus Makedonien eroberte im 4. Jh. v. Chr. ein riesiges Reich bis nach Indien?',
  mediaUrl: null,
  answers: ['Philipp II.', 'Alexander der Große', 'Darius III.', 'Pyrrhos'],
  correctIndex: 1
},
{
  id: 24,
  type: 'text',
  question: 'Wie lautet der Name der großen Handels- und Heerstraße, die Persien mit seinen Provinzen verband?',
  mediaUrl: null,
  answers: ['Via Appia', 'Königsstraße', 'Bernsteinstraße', 'Panamericana'],
  correctIndex: 1
},
{
  id: 25,
  type: 'text',
  question: 'Welche Religion entstand im alten Indien und lehrt den Weg zur Befreiung vom Leiden?',
  mediaUrl: null,
  answers: ['Zoroastrismus', 'Buddhismus', 'Judentum', 'Konfuzianismus'],
  correctIndex: 1
},
{
  id: 26,
  type: 'image',
  question: 'Diese Statue zeigt einen sitzenden Lehrer in Meditation. Welche Religion ist gemeint?',
  mediaUrl: '/media/lvl4_4.png',
  answers: ['Christentum', 'Islam', 'Buddhismus', 'Hinduismus'],
  correctIndex: 2,
  credits: 'KI - Generiert mit Perplexity'
},
{
  id: 27,
  type: 'text',
  question: 'Welche antike Stadt in Mesopotamien war bekannt für ihre „Hängenden Gärten“?',
  mediaUrl: null,
  answers: ['Babylon', 'Ur', 'Nineve', 'Memphis'],
  correctIndex: 0
},
{
  id: 28,
  type: 'text',
  question: 'Welches Volk entwickelte im heutigen Iran die Religion des Zoroastrismus?',
  mediaUrl: null,
  answers: ['Griechen', 'Perser', 'Ägypter', 'Phönizier'],
  correctIndex: 1
},
{
  id: 29,
  type: 'audio',
  question: 'Du hörst einen einfachen, von Trommeln begleiteten Gesang. Welche Region könnte er am ehesten darstellen?',
  mediaUrl: '/media/lvl4_5.mp3',
  answers: ['Nordamerika', 'Skandinavien', 'Indonesien', 'Mitteleuropa'],
  correctIndex: 0,
  credits: 'Aufnahme von Otto Abraham, 1906, als gemeinfrei (Public Domain) gekennzeichnet.'
},
{
  id: 30,
  type: 'text',
  question: 'Welche Hochkultur nutzte im Andenraum Terrassenfelder zur Landwirtschaft?',
  mediaUrl: null,
  answers: ['Maya', 'Inka', 'Ägypter', 'Perser'],
  correctIndex: 1
},
{
  id: 31,
  type: 'text',
  question: 'Mit welchem antiken Volk standen die Thraker NICHT in großen Konflikten',
  mediaUrl: null,
  answers: ['Griechen', 'Perser', 'Römer', 'Inder'],
  correctIndex: 3
},
{
  id: 32,
  type: 'text',
  question: 'Wo lebten die Thraker hauptsächlich?',
  mediaUrl: null,
  answers: ['Balkan', 'Baltische Länder', 'Britannische Länder', 'Iberische Halbinsel'],
  correctIndex: 0
}
];

const questionsLevel5 = [
  {
    id: 1,
    type: 'text',
    question: 'In welchem Jahrhundert vor Christus wurden die Pyramiden Gebaut?',
    mediaUrl: null,
    answers: ['26.','21.','18.','32.'
    ],
    correctIndex: 0
  },
  {
    id: 2,
    type: 'text',
    question: 'Welche Pyrmide ist die höhste?',
    mediaUrl: null,
    answers: ['Cheops-Pyramide','Chephren-Pyramide','Mykerinos-Pyramide','Sphinx'
    ],
    correctIndex: 0
  },{
    id: 3,
    type: 'text',
    question: 'Welche abrahamatische Religion war die erste?',
    mediaUrl: null,
    answers: ['Islam','Christentum','Buddhismus','Judentum'
    ],
    correctIndex: 3
  },
  {
    id: 4,
    type: 'text',
    question: 'Wann starb der Säbelzahntiger aus?',
    mediaUrl: null,
    answers: ['vor 10.000 Jahren','vor 4.000 Jahren','vor 100.000 Jahren','vor 6.000 Jahren'
    ],
    correctIndex: 0
  },
  {
  id: 5,
  type: 'text',
  question: 'An welchem Fluss entstand das Alte Ägypten hauptsächlich?',
  mediaUrl: null,
  answers: ['Nil', 'Euphrat', 'Indus', 'Tigris'],
  correctIndex: 0
},
{
  id: 6,
  type: 'text',
  question: 'Wie hieß die Bilderschrift der alten Ägypter auf Tempeln und Gräbern?',
  mediaUrl: null,
  answers: ['Keilschrift', 'Hieroglyphen', 'Runen', 'Alphabet'],
  correctIndex: 1
},
{
  id: 7,
  type: 'text',
  question: 'Welche frühe Hochkultur lag im heutigen Irak zwischen Euphrat und Tigris?',
  mediaUrl: null,
  answers: ['Maya', 'Sumerer', 'Griechen', 'Perser'],
  correctIndex: 1
},
{
  id: 8,
  type: 'text',
  question: 'In welcher Region der Welt wurden die ältesten bekannten Höhlenmalereien entdeckt?',
  mediaUrl: null,
  answers: ['Australien', 'Südamerika', 'Westeuropa', 'Südafrika'],
  correctIndex: 2
},
{
  id: 9,
  type: 'audio',
  question: 'Welche Sprache ist das?',
  mediaUrl: "/media/lvl5_1.mp3",
  answers: ['Altgriechisch', 'Arabisch', 'Mittel-Ägyptisch', 'Berber'],
  correctIndex: 2,
  credits: "Auschnitt aus einem Video von 'Equator AI' https://www.youtube.com/watch?v=Wc22W3bos64"
},
{
  id: 10,
  type: 'audio',
  question: 'Welchem Volk ist dieses Lied zuzuordnen?',
  mediaUrl: "/media/lvl5_2.mp3",
  answers: ['Griechen', 'Thraker', 'Perser', 'Angelsachsen'],
  correctIndex: 0,
  credits: "credits: Audio:, Aufnahme von Marcus Harvey (User:Byz), Wikimedia Commons, Lizenz CC BY-SA 2.5(creativecommons.org/licenses/by-sa/2.5/)"
},
{
  id: 11,
  type: 'text',
  question: 'Welche frühe Schrift nutzten die Mesopotamier auf Tontafeln?',
  mediaUrl: null,
  answers: ['Keilschrift', 'Hieroglyphen', 'Kyrillisch', 'Latein'],
  correctIndex: 0
},
{
  id: 12,
  type: 'text',
  question: 'Welches Volk der Antike war berühmt für Seefahrt und Handel im Mittelmeer?',
  mediaUrl: null,
  answers: ['Perser', 'Phönizier', 'Skythen', 'Gallier'],
  correctIndex: 1
},
{
  id: 13,
  type: 'text',
  question: 'Welche frühe chinesische Dynastie ist für Orakelknochen und Bronzegefäße bekannt?',
  mediaUrl: null,
  answers: ['Han-Dynastie', 'Qin-Dynastie', 'Shang-Dynastie', 'Tang-Dynastie'],
  correctIndex: 2
},
{
  id: 14,
  type: 'text',
  question: 'Wie nennt man die Zeit, in der Menschen vor allem von Jagen und Sammeln lebten?',
  mediaUrl: null,
  answers: ['Steinzeit', 'Bronzezeit', 'Eisenzeit', 'Antike'],
  correctIndex: 0
}
];

function getQuestionsByLevel(level) {
  const allQuestions = {
    1: questionsLevel1,
    2: questionsLevel2,
    3: questionsLevel3,
    4: questionsLevel4,
    5: questionsLevel5
  };
  return allQuestions[level] || questionsLevel1;
}

module.exports = { 
  questionsLevel1, 
  questionsLevel2, 
  questionsLevel3, 
  questionsLevel4, 
  questionsLevel5,
  getQuestionsByLevel 
};

