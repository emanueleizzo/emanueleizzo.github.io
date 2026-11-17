const tabelle = {
    dispense: [
        {
            nome: "Algoritmi distribuiti e reti complesse",
            sigla: "ADRC"
        },
        {
            nome: "Analisi di reti",
            sigla: "AR"
        },
        {
            nome: "Calcolo numerico",
            sigla: "CN"
        },
        {
            nome: "Calcolo delle probabilità",
            sigla: "CP"
        },
        {
            nome: "Calcolo delle probabilità 2",
            sigla: "CP2"
        },
        {
            nome: "Intelligenza artificiale",
            sigla: "IA"
        },
        {
            nome: "Ingegneria dei software",
            sigla: "IS"
        },
        {
            nome: "Inferenza statistica e teoria dell'informazione",
            sigla: "ISTI"
        },
        {
            nome: "Logica e reti logiche",
            sigla: "LRL"
        },
        {
            nome: "Machine learning",
            sigla: "ML"
        },
        {
            nome: "Sistemi distribuiti cooperativi",
            sigla: "SDC"
        },
        {
            nome: "Sistemi operativi e reti",
            sigla: "SOR"
        }

    ],

    articoli: [
        {
            nome: "Stick breaking problem",
            sigla: "SBP",
            tipo: "Accademico",
            data: "02/05/2022",
            descrizione: "Descrizione del problema dello stick breaking problem e della stima dei valori medi in Python e in R."
        },
        {
            nome: "Rompicapo delle 8 regine",
            sigla: "R8R",
            tipo: "Studio personale",
            data: "20/12/2022",
            descrizione: "Descrizione del problema delle 8 regine e del mio approccio alla sua risoluzione in Python e in Prolog."
        },
        {
            nome: "Passeggiata del cavallo",
            sigla: "PC",
            tipo: "Studio personale",
            data: "28/11/2022",
            descrizione: "Descrizione del problema della passeggiata del cavallo e la ricerca delle relative soluzioni in Python e in Prolog."
        },
        {
            nome: "D&D e la probabilità",
            sigla: "DND_P",
            tipo: "Studio personale",
            data: "08/11/2026",
            descrizione: "Introduzione generale alla probabilità, a D&D, e studio sui diversi metodi per la generazione delle statistiche di partenza [DA COMPLETARE]"
        }
    ],

    libri: {
        "saghe": [
            {
                "nome": "Planets",
                "libri": [
                    {
                        id: "P_M",
                        nome: "Planets - Mercury",
                        immagine: "mercury.png",
                        descrizione: "Andrea Bilani è un ragazzo di 14 anni come tutti... Se non fosse che la sua vita sta crollando a pezzi, tra gli atti di bullismo che subisce a scuola e le violenze del padre a casa. Non sa, però, che la sua vita sta per cambiare, e che un potere da sempre rimasto celato sta per essere risvegliato...",
                        link: "https://www.wattpad.com/story/277839243-planets-mercury"
                    },
                ]
            }, {
                "nome": "Temperance",
                "libri": [
                    {
                        id: "T_EI",
                        nome: "L'equilibrio instabile",
                        immagine: "equilibrio_instabile.png",
                        descrizione: "Rosaline e Nathaniel Blindshot sono due mezz'elfi. Lei, fabbro come suo padre, dal carattere poco paziente e un po' burbero; lui, archeologo, uno spirito libero ed estroverso. Due persone, non solo connesse dal sangue, ma anche dal destino, al volte infingardo. Sarà l'incontro con un cavaliere a rivelare il loro scopo nel mondo, e a portarli a dover scegliere: combattere la Legione... O unirsi ad essa?",
                        link: "https://www.wattpad.com/story/277839243-temperance-l%27equilibrio-instabile"
                    }
                ]
            }, {
                "nome": "I casi di Alessia Valcanti",
                "libri": [
                    {
                        id: "AV_VA",
                        nome: "Veleno d'annata",
                        immagine: "veleno_annata.png",
                        descrizione: "Alessia Valcanti, 25 anni, è una ragazza estrosa, intelligente e bella. Da sempre appassionata di gialli e giornalismo, ha appena preso la sua laurea magistrale in editoria all'università Tor Vergata; e per festeggiare questo evento, lo zio Edoardo e la cugina Giulia organizzano per lei una festa nella loro azienda vinicola. Ma sarà a causa di questa festa che Alessia si ritroverà invischiata in una serie di omicidi, avente origini radicate in qualcosa successo 30 anni fa, mostrando come l'orgoglio e l'avarizia possano essere letali.",
                        link: "https://www.wattpad.com/story/170950002-veleno-d%27annata"
                    }
                ]
            }
        ],
        "misti": []
    },

    podcast: [
        {
            nome: "Everything on Air",
            sottotitolo: "Un podcast dove si parla d tutto, ma nello specifico di quello che mi passa per la testa.",
            descrizione: "Dalla tecnologia e i videogiochi alla moda, da RuPaul's Drag Race a Dungeons&Dragons, questo podcast esplora tutto ciò che cattura la mia attenzione e curiosità insieme ad amici e ospiti speciali.",
            copertina: "everything_on_air.png",
            link: "https://open.spotify.com/show/2cX5EXUmhyDLmqY9WTz7CI?si=ss5DAb-ATryXDyQNRQeI0w",
            puntate: [
                {
                    id: "EOA_01",
                    nome: "Cosa è \"Everything On Air\"",
                    descrizione: "Il primo episodio del podcast: una presentazione del progetto, delle sue motivazioni e degli argomenti che troveranno spazio nelle puntate future. Un'introduzione al mondo di Everything On Air e alle conversazioni che lo animeranno.",
                    link: "https://open.spotify.com/embed/episode/0AUxQP4rnjJEU7D9rrKAsc?utm_source=generator&theme=0&si=56ac6ad28ecc4f09"
                },
                {
                    id: "EOA_02",
                    nome: "[Videogiochi e Tecnologia] Uscite del 2022 (parte 1)",
                    descrizione: "Insieme a Nicolas, una panoramica sulle principali uscite videoludiche previste per il 2022. Tra titoli attesi, novità e aspettative, cominciamo a esplorare cosa ha in serbo il mondo dei videogiochi per quell'anno.",
                    link: "https://open.spotify.com/embed/episode/1FZXbIZ5QjOdy7SKOxmvng?utm_source=generator&theme=0&si=da743a0c09ad4f92"
                },
                {
                    id: "EOA_03",
                    nome: "[Videogiochi e Tecnologia] Uscite del 2022 (parte 2)",
                    descrizione: "Continua la chiacchierata con Nicolas dedicata alle uscite videoludiche del 2022. Una seconda parte per completare la panoramica, condividere aspettative e parlare dei giochi che potrebbero lasciare il segno.",
                    link: "https://open.spotify.com/embed/episode/3UdHnwMgIBLnd3OnktInRR?utm_source=generator&theme=0&si=d8e2927fd8df4407"
                },
                {
                    id: "EOA_04",
                    nome: "[Videogiochi e Tecnologia] Pokemon e GameFreak - Il non cambiare format per molto tempo non è una bella idea",
                    descrizione: "Insieme a Nicolas, una discussione sulle scelte di sviluppo di Game Freak e sull'evoluzione della serie Pokémon. Il continuo riproporsi di formule consolidate è davvero una buona strategia? Un confronto di opinioni tutt'altro che pacato!",
                    link: "https://open.spotify.com/embed/episode/5va9U3VGT6q56RxSB93Cc8?utm_source=generator&theme=0&si=857043a0b3a845e2"
                },
                {
                    id: "EOA_05",
                    nome: "[Dungeons&Dragons] Cosa è Dungeons&Dragons",
                    descrizione: "In compagnia di Claudio, ci addentriamo nel mondo dei giochi di ruolo e di Dungeons & Dragons. Un'introduzione per scoprire le basi di questo hobby, il suo funzionamento e ciò che rende speciale vivere avventure attraverso l'immaginazione e la collaborazione.",
                    link: "https://open.spotify.com/embed/episode/5BZFOsznr0IwhCzvcbILJr?utm_source=generator&theme=0&si=90379192a7e94fea"
                },
                {
                    id: "EOA_06",
                    nome: "[RuPaul's Drag Race] Stagione 1 USA",
                    descrizione: "Insieme a Luigi, ripercorriamo la prima stagione statunitense di RuPaul's Drag Race, condividendo impressioni, giudizi e opinioni sui suoi protagonisti e sui momenti più significativi. Una conversazione ricca di pareri, confronti e qualche inevitabile discussione accesa!",
                    link: "https://open.spotify.com/embed/episode/0qGeSMtE5Yxo0ZOy5JHrq2?utm_source=generator&theme=0&si=773724c8cae24761"
                },
                {
                    id: "EOA_07",
                    nome: "[Videogiochi e Tecnologia] Tetsuya Nomura, Final Fantasy 7 Remake e Kingdom Hearts",
                    descrizione: "Un approfondimento insieme a Nicolas dedicato a Tetsuya Nomura e ad alcune delle opere più conosciute legate al suo nome: Final Fantasy VII Remake e Kingdom Hearts. Un'occasione per parlare di queste produzioni, delle loro caratteristiche e del rapporto tra il loro autore e i mondi che ha contribuito a creare.",
                    link: "https://open.spotify.com/embed/episode/3r03E6xiM16083XW2zwfnj?utm_source=generator&theme=0&si=84695b60551f47e9"
                },
                {
                    id: "EOA_08",
                    nome: "[Dungeons&Dragons] L'artefice - La classe meno giocata... E forse quella più rotta",
                    descrizione: "In compagnia di Samuele, torniamo nel mondo di Dungeons & Dragons per parlare dell'Artefice, una classe spesso poco giocata, ma dalle possibilità decisamente interessanti. Analizziamo il suo ruolo e il suo potenziale, tra meccaniche particolari e una domanda provocatoria: è davvero una delle classi più sbilanciate del gioco?",
                    link: "https://open.spotify.com/embed/episode/2N1cAzdhHR2xIl5cWmFXdk?utm_source=generator&theme=0&si=feb5b71c9fcb412e"
                },
                {
                    id: "EOA_09",
                    nome: "[SPECIALE] I Game Awards - Premi, nuove uscite e pareri a riguardo",
                    descrizione: "Insieme a Nicolas, uno speciale dedicato ai Game Awards: dai premi assegnati agli annunci delle nuove produzioni, passando per le novità presentate durante l'evento. Un'occasione per commentare i risultati, condividere impressioni e discutere delle sorprese del mondo videoludico.",
                    link: "https://open.spotify.com/embed/episode/3r2lVk5b8lzZXNQP4MENzf?utm_source=generator&theme=0&si=e8d6e89786d7461e"
                },
                {
                    id: "EOA_10",
                    nome: "[SPECIALE] Sanremo 2023 - I commenti pre-evento a caldo sui cantanti in gara e le loro canzoni",
                    descrizione: "In compagnia di Beatrice, ci lanciamo in una prima carrellata di commenti sui cantanti in gara e sulle rispettive canzoni del Festival di Sanremo 2023. Aspettative, impressioni a caldo e pronostici prima ancora che il Festival abbia inizio!",
                    link: "https://open.spotify.com/embed/episode/6vPbI93Jbtl6kxbEjydslj?utm_source=generator&theme=0&si=ec650136b413463f"
                }
            ]
        }
    ],

    progetti_sartoria: [
        {
            nome: "Tim Glaydor",
            immagine: "tim_glaydor.jpg",
            descrizione_foto: "Foto realizzata al castello di Palombara Sabina",
            descrizione_costume: "Costume realizzato per me da utilizzare durante l'evento di LARP Battle for Vilegis",
            pezzi: [
                {
                    nome: "giacca",
                    immagine: "giacca.png",
                    descrizione: ""
                },
                {
                    nome: "tunica",
                    immagine: "tunica.png",
                    descrizione: ""
                },
                {
                    nome: "pantaloni",
                    immagine: "pantaloni.png",
                    descrizione: ""
                },
                {
                    nome: "cappello",
                    immagine: "cappello.png",
                    descrizione: ""
                }
            ]
        },
        {
            nome: "Bernardo Altano",
            immagine: "bernardo_altano.jpg",
            descrizione_foto: "Foto realizzata durante il Celtic Festival di Guidonia",
            descrizione_costume: "Costume realizzato per il mio ragazzo da utilizzare durante varie fiere ed eventi.",
            pezzi: [

            ]

        }
    ]
};



