const heart = document.getElementById("heart");

const message = document.getElementById("message");

let changed = false;

const texto1 = `
Sé que estos días no han sido los mejores...
<br>

y más que ayudarte solo te he causado más estrés
<br>

y a veces mis actitudes no demuestran mi amor por ti
<br>

pero quiero seguir aprendiendo a entenderte y amarte mejor cada día.
<br>

porque tú eres mi todo en mi vida 💗💗
`;

const texto2 = `
Siempre estaré para ti, nunca lo olvides.
<br>

Eres y siempre serás mi prioridad.
<br>

Eres la mujer que amo, Estelita
<br>
La futura madre de mis hijos,
mi esposa y el amor de mi vida.
<br>

Te adoro muchísimoo  Muaaa ❤️
<br><br>
Con amor, muchísimo amor: sebitas 
`;

heart.addEventListener("click", () => {

    changed = !changed;

    message.innerHTML = changed ? texto2 : texto1;
});

/* CARTAS */

const cards = {

    1:{

        title:"♡ Lo que más amo de ti",

        text:`
Lo que más amo de ti es lo real y sincera que eres.

Amo tus momentos espontáneos de cariño, pero también esos pequeños enojos tuyos que terminan pareciéndome adorables.

Contigo puedo ser yo mismo sin fingir nada.

Y creo que eso es lo más valioso que alguien puede encontrar en otra persona.
`
    },

    2:{

        title:"♡ Lo que nunca te digo",

        text:`
A veces no te digo lo preciosa que te ves.

A veces no te digo que me encantaría tomarte de la mano todo el tiempo y que todos supieran cuánto te amo.

Y tampoco te digo lo loco que me vuelves.

Me tienes completamente enamorado.
`
    },

    3:{

        title:"♡ Nuestro futuro",

        text:`
Me imagino una casa contigo.

Nuestros hijos riéndose mientras tú me amenazas con mandarme al sofá por alguna broma.

Y honestamente...
esa imagen me hace feliz.

Porque el futuro que sueño,
es una familia contigo.
`
    },

    4:{

        title:"♡ Promesa",

        text:`
Nunca volveré a alejarme de ti como antes.

Casi te pierdo una vez…
y jamás podría perdonármelo otra vez.

Te amo demasiado.
`
    },

    5:{

        title:"♡ Cuando te sientas mal",

        text:`
Cuando te sientas mal, búscame.

Háblame.
Llámame.
Pídeme que vaya contigo.

Pero nunca te quedes sola con lo que sientes.

Siempre estaré para ti.
`
    }
};

const overlay = document.getElementById("cardOverlay");

const cardTitle = document.getElementById("cardTitle");

const cardText = document.getElementById("cardText");

document.querySelectorAll(".side-card").forEach(card => {

    card.addEventListener("click", () => {

        const id = card.dataset.card;

        if(overlay.style.display === "flex"){

            overlay.style.display = "none";

            return;
        }

        cardTitle.innerHTML = cards[id].title;

        cardText.innerHTML = cards[id].text;

        overlay.style.display = "flex";
    });
});

overlay.addEventListener("click", () => {

    overlay.style.display = "none";
});