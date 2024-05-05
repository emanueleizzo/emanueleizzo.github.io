const tables = {
    lesson: {       
        Goniometria_trigonometria: { Materia: "matematica", Nome: "sulla goniometria e la trigonometria", Descrizione: "Definizione di seno, coseno, tangente e cotangete, delle formule e delle loro applicazioni." },
        Derivate: { Materia: "matematica", Nome: "sulle derivate", Descrizione: "Definizione di derivata, derivate fondamentali e teoremi sulle derivate.", Plots: [
            ["rapporto_incrementale", [
                ["x**3+2*x**2-2*x-2", "rgba(255,0,0,0.5)"],
                ["-x", "rgba(0,0,255,0.5)"]
            ], -3, 2, 0.1],
        ]},

        Conversioni: { Materia: "informatica", Nome: "sulle conversioni", Descrizione: "Conversioni da decimale ad altre basi, conversioni da altre basi a decimale, e conversione tra diverse basi." },
        IEEE_754: { Materia: "informatica", Nome: "sull'IEEE 754", Descrizione: "Defizione della rappresentazione in virgola mobile e sul come calcolare la conversione di un numero con l'IEEE 754." },

        Macchina_Von_Neumann: { Materia: "sistemi_operatvi", Nome: "sulla macchina di Von Neumann", Descrizione: "Definizione della macchina e di tutti i suoi componenti." },

        ISO_OSI_TCP_IP: { Materia: "reti_calcolatori", Nome: "sul modello ISO/OSI e lo stack TCP/IP", Descrizione: "Definizione del modello ISO/OSI, dello stack TCP/IP, dell'incapsulamento e dei PDU." },
        Livello_rete: { Materia: "reti_calcolatori", Nome: "sul livello di rete", Descrizione: "Introduzione sul livello di rete e sul protocollo IP, definizione dell'indirizzo IP e del routing." },
        IPv4: { Materia: "reti_calcolatori", Nome: "sull'indirizzo IPv4", Descrizione: "Definizione dell'indirizzo IPv4 e della sua struttura, definizione della subnet mask, degli indirizzi classful e classless, del subnetting e del spuernetting." },
        IPv6: { Materia: "reti_calcolatori", Nome: "sull'indirizzo IPv6", Descrizione: "Definizione dell'indirizzo IPv6 e della sua struttura, differenze tra IPv4 e IPv6." },
        Routing: { Materia: "reti_calcolatori", Nome: "sul routing", Descrizione: "" },

        Prolog: { Materia: "prolog", Nome: " di introduzione su Prolog", Descrizione: "Introduzione al linguaggio di programmazione, alla programmazione dichiarativa e all'IDE utilizzato." },
    },

    article: {
        Stick_Breaking_Problem: { Nome: "sullo Stick Breaking Problem", Descrizione: "Definizione del problema e realizzazione di un simulatore con Python." },
    },

    code: {
        Rompicapo_8_Regine: { Nome: "per la risoluzione del Rompicapo delle 8 Regine", Descrizione: "Definizione del problema e realizzazione di un algoritmo in grado di trovare le soluzioni con Python." },
    }
};



