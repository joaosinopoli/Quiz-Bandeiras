const rawCountriesData = [
    {
        "code": "af",
        "name": "Afeganistão",
        "group": "mixed"
    },
    {
        "code": "za",
        "name": "África do Sul",
        "group": "mixed"
    },
    {
        "code": "al",
        "name": "Albânia",
        "group": "mixed"
    },
    {
        "code": "de",
        "name": "Alemanha",
        "group": "tricolor_h_other"
    },
    {
        "code": "ad",
        "name": "Andorra",
        "group": "tricolor_v_blue_red"
    },
    {
        "code": "ao",
        "name": "Angola",
        "group": "mixed"
    },
    {
        "code": "ag",
        "name": "Antígua e Barbuda",
        "group": "mixed"
    },
    {
        "code": "sa",
        "name": "Arábia Saudita",
        "group": "green_heavy"
    },
    {
        "code": "dz",
        "name": "Argélia",
        "group": "red_moon_star"
    },
    {
        "code": "ar",
        "name": "Argentina",
        "group": "central_america"
    },
    {
        "code": "am",
        "name": "Armênia",
        "group": "tricolor_h_other"
    },
    {
        "code": "au",
        "name": "Austrália",
        "group": "canton_stars"
    },
    {
        "code": "at",
        "name": "Áustria",
        "group": "tricolor_h_other"
    },
    {
        "code": "az",
        "name": "Azerbaijão",
        "group": "mixed"
    },
    {
        "code": "bs",
        "name": "Bahamas",
        "group": "triangle_left"
    },
    {
        "code": "bd",
        "name": "Bangladesh",
        "group": "circle_center"
    },
    {
        "code": "bb",
        "name": "Barbados",
        "group": "mixed"
    },
    {
        "code": "bh",
        "name": "Bahrein",
        "group": "bicolor_h"
    },
    {
        "code": "be",
        "name": "Bélgica",
        "group": "tricolor_h_other"
    },
    {
        "code": "bz",
        "name": "Belize",
        "group": "mixed"
    },
    {
        "code": "bj",
        "name": "Benin",
        "group": "pan_african"
    },
    {
        "code": "by",
        "name": "Bielorrússia",
        "group": "bicolor_h"
    },
    {
        "code": "bo",
        "name": "Bolívia",
        "group": "tricolor_h_other"
    },
    {
        "code": "ba",
        "name": "Bósnia e Herzegovina",
        "group": "mixed"
    },
    {
        "code": "bw",
        "name": "Botsuana",
        "group": "mixed"
    },
    {
        "code": "br",
        "name": "Brasil",
        "group": "stars_crosses"
    },
    {
        "code": "bn",
        "name": "Brunei",
        "group": "mixed"
    },
    {
        "code": "bg",
        "name": "Bulgária",
        "group": "tricolor_h_red_white_blue"
    },
    {
        "code": "bf",
        "name": "Burkina Faso",
        "group": "pan_african"
    },
    {
        "code": "bi",
        "name": "Burundi",
        "group": "mixed"
    },
    {
        "code": "bt",
        "name": "Butão",
        "group": "mixed"
    },
    {
        "code": "cv",
        "name": "Cabo Verde",
        "group": "mixed"
    },
    {
        "code": "cm",
        "name": "Camarões",
        "group": "tricolor_v_blue_red"
    },
    {
        "code": "kh",
        "name": "Camboja",
        "group": "mixed"
    },
    {
        "code": "ca",
        "name": "Canadá",
        "group": "mixed"
    },
    {
        "code": "qa",
        "name": "Catar",
        "group": "bicolor_h"
    },
    {
        "code": "kz",
        "name": "Cazaquistão",
        "group": "mixed"
    },
    {
        "code": "td",
        "name": "Chade",
        "group": "tricolor_v_blue_red"
    },
    {
        "code": "cl",
        "name": "Chile",
        "group": "canton_stars"
    },
    {
        "code": "cn",
        "name": "China",
        "group": "red_moon_star"
    },
    {
        "code": "cy",
        "name": "Chipre",
        "group": "mixed"
    },
    {
        "code": "co",
        "name": "Colômbia",
        "group": "gran_colombia"
    },
    {
        "code": "km",
        "name": "Comores",
        "group": "red_moon_star"
    },
    {
        "code": "cg",
        "name": "Congo",
        "group": "pan_african"
    },
    {
        "code": "cd",
        "name": "Rep. Democrática do Congo",
        "group": "mixed"
    },
    {
        "code": "kp",
        "name": "Coreia do Norte",
        "group": "circle_center"
    },
    {
        "code": "kr",
        "name": "Coreia do Sul",
        "group": "circle_center"
    },
    {
        "code": "ci",
        "name": "Costa do Marfim",
        "group": "tricolor_v_blue_red"
    },
    {
        "code": "cr",
        "name": "Costa Rica",
        "group": "mixed"
    },
    {
        "code": "hr",
        "name": "Croácia",
        "group": "tricolor_h_red_white_blue"
    },
    {
        "code": "cu",
        "name": "Cuba",
        "group": "triangle_left"
    },
    {
        "code": "dk",
        "name": "Dinamarca",
        "group": "nordic_cross"
    },
    {
        "code": "dj",
        "name": "Djibouti",
        "group": "triangle_left"
    },
    {
        "code": "dm",
        "name": "Dominica",
        "group": "mixed"
    },
    {
        "code": "eg",
        "name": "Egito",
        "group": "pan_arab"
    },
    {
        "code": "sv",
        "name": "El Salvador",
        "group": "central_america"
    },
    {
        "code": "ae",
        "name": "Emirados Árabes Unidos",
        "group": "pan_arab"
    },
    {
        "code": "ec",
        "name": "Equador",
        "group": "gran_colombia"
    },
    {
        "code": "er",
        "name": "Eritreia",
        "group": "mixed"
    },
    {
        "code": "sk",
        "name": "Eslováquia",
        "group": "tricolor_h_red_white_blue"
    },
    {
        "code": "si",
        "name": "Eslovênia",
        "group": "tricolor_h_red_white_blue"
    },
    {
        "code": "es",
        "name": "Espanha",
        "group": "mixed"
    },
    {
        "code": "us",
        "name": "Estados Unidos",
        "group": "canton_stars"
    },
    {
        "code": "ee",
        "name": "Estônia",
        "group": "tricolor_h_other"
    },
    {
        "code": "sz",
        "name": "Essuatíni",
        "group": "mixed"
    },
    {
        "code": "et",
        "name": "Etiópia",
        "group": "pan_african"
    },
    {
        "code": "fj",
        "name": "Fiji",
        "group": "canton_stars"
    },
    {
        "code": "ph",
        "name": "Filipinas",
        "group": "triangle_left"
    },
    {
        "code": "fi",
        "name": "Finlândia",
        "group": "nordic_cross"
    },
    {
        "code": "fr",
        "name": "França",
        "group": "tricolor_v_blue_red"
    },
    {
        "code": "ga",
        "name": "Gabão",
        "group": "tricolor_h_other"
    },
    {
        "code": "gm",
        "name": "Gâmbia",
        "group": "mixed"
    },
    {
        "code": "gh",
        "name": "Gana",
        "group": "pan_african"
    },
    {
        "code": "ge",
        "name": "Geórgia",
        "group": "mixed"
    },
    {
        "code": "gy",
        "name": "Guiana",
        "group": "triangle_left"
    },
    {
        "code": "gn",
        "name": "Guiné",
        "group": "tricolor_v_blue_red"
    },
    {
        "code": "gq",
        "name": "Guiné Equatorial",
        "group": "triangle_left"
    },
    {
        "code": "gw",
        "name": "Guiné-Bissau",
        "group": "pan_african"
    },
    {
        "code": "ht",
        "name": "Haiti",
        "group": "mixed"
    },
    {
        "code": "hn",
        "name": "Honduras",
        "group": "central_america"
    },
    {
        "code": "hu",
        "name": "Hungria",
        "group": "tricolor_h_other"
    },
    {
        "code": "ye",
        "name": "Iêmen",
        "group": "pan_arab"
    },
    {
        "code": "mh",
        "name": "Ilhas Marshall",
        "group": "stars_crosses"
    },
    {
        "code": "sb",
        "name": "Ilhas Salomão",
        "group": "stars_crosses"
    },
    {
        "code": "in",
        "name": "Índia",
        "group": "tricolor_h_other"
    },
    {
        "code": "id",
        "name": "Indonésia",
        "group": "bicolor_h"
    },
    {
        "code": "ir",
        "name": "Irã",
        "group": "mixed"
    },
    {
        "code": "iq",
        "name": "Iraque",
        "group": "pan_arab"
    },
    {
        "code": "ie",
        "name": "Irlanda",
        "group": "tricolor_v_blue_red"
    },
    {
        "code": "is",
        "name": "Islândia",
        "group": "nordic_cross"
    },
    {
        "code": "il",
        "name": "Israel",
        "group": "mixed"
    },
    {
        "code": "it",
        "name": "Itália",
        "group": "tricolor_v_blue_red"
    },
    {
        "code": "jm",
        "name": "Jamaica",
        "group": "mixed"
    },
    {
        "code": "jp",
        "name": "Japão",
        "group": "circle_center"
    },
    {
        "code": "jo",
        "name": "Jordânia",
        "group": "pan_arab"
    },
    {
        "code": "kw",
        "name": "Kuwait",
        "group": "pan_arab"
    },
    {
        "code": "la",
        "name": "Laos",
        "group": "circle_center"
    },
    {
        "code": "ls",
        "name": "Lesoto",
        "group": "mixed"
    },
    {
        "code": "lv",
        "name": "Letônia",
        "group": "tricolor_h_other"
    },
    {
        "code": "lb",
        "name": "Líbano",
        "group": "mixed"
    },
    {
        "code": "lr",
        "name": "Libéria",
        "group": "canton_stars"
    },
    {
        "code": "ly",
        "name": "Líbia",
        "group": "red_moon_star"
    },
    {
        "code": "li",
        "name": "Liechtenstein",
        "group": "mixed"
    },
    {
        "code": "lt",
        "name": "Lituânia",
        "group": "tricolor_h_other"
    },
    {
        "code": "lu",
        "name": "Luxemburgo",
        "group": "tricolor_h_red_white_blue"
    },
    {
        "code": "mk",
        "name": "Macedônia do Norte",
        "group": "mixed"
    },
    {
        "code": "mg",
        "name": "Madagascar",
        "group": "bicolor_h"
    },
    {
        "code": "my",
        "name": "Malásia",
        "group": "canton_stars"
    },
    {
        "code": "mw",
        "name": "Malawi",
        "group": "mixed"
    },
    {
        "code": "mv",
        "name": "Maldivas",
        "group": "mixed"
    },
    {
        "code": "ml",
        "name": "Mali",
        "group": "tricolor_v_blue_red"
    },
    {
        "code": "mt",
        "name": "Malta",
        "group": "bicolor_h"
    },
    {
        "code": "ma",
        "name": "Marrocos",
        "group": "red_moon_star"
    },
    {
        "code": "mu",
        "name": "Maurício",
        "group": "mixed"
    },
    {
        "code": "mr",
        "name": "Mauritânia",
        "group": "red_moon_star"
    },
    {
        "code": "mx",
        "name": "México",
        "group": "mixed"
    },
    {
        "code": "mm",
        "name": "Mianmar",
        "group": "mixed"
    },
    {
        "code": "fm",
        "name": "Micronésia",
        "group": "stars_crosses"
    },
    {
        "code": "mz",
        "name": "Moçambique",
        "group": "pan_african"
    },
    {
        "code": "md",
        "name": "Moldávia",
        "group": "tricolor_v_blue_red"
    },
    {
        "code": "mc",
        "name": "Mônaco",
        "group": "bicolor_h"
    },
    {
        "code": "mn",
        "name": "Mongólia",
        "group": "mixed"
    },
    {
        "code": "me",
        "name": "Montenegro",
        "group": "mixed"
    },
    {
        "code": "na",
        "name": "Namíbia",
        "group": "mixed"
    },
    {
        "code": "nr",
        "name": "Nauru",
        "group": "mixed"
    },
    {
        "code": "np",
        "name": "Nepal",
        "group": "unique_shapes"
    },
    {
        "code": "ni",
        "name": "Nicarágua",
        "group": "central_america"
    },
    {
        "code": "ne",
        "name": "Níger",
        "group": "tricolor_h_other"
    },
    {
        "code": "ng",
        "name": "Nigéria",
        "group": "tricolor_v_blue_red"
    },
    {
        "code": "no",
        "name": "Noruega",
        "group": "nordic_cross"
    },
    {
        "code": "nz",
        "name": "Nova Zelândia",
        "group": "canton_stars"
    },
    {
        "code": "om",
        "name": "Omã",
        "group": "mixed"
    },
    {
        "code": "nl",
        "name": "Países Baixos",
        "group": "tricolor_h_red_white_blue"
    },
    {
        "code": "pw",
        "name": "Palau",
        "group": "circle_center"
    },
    {
        "code": "pa",
        "name": "Panamá",
        "group": "mixed"
    },
    {
        "code": "pg",
        "name": "Papua Nova Guiné",
        "group": "stars_crosses"
    },
    {
        "code": "pk",
        "name": "Paquistão",
        "group": "red_moon_star"
    },
    {
        "code": "py",
        "name": "Paraguai",
        "group": "tricolor_h_red_white_blue"
    },
    {
        "code": "pe",
        "name": "Peru",
        "group": "tricolor_v_blue_red"
    },
    {
        "code": "pl",
        "name": "Polônia",
        "group": "bicolor_h"
    },
    {
        "code": "pt",
        "name": "Portugal",
        "group": "mixed"
    },
    {
        "code": "ke",
        "name": "Quênia",
        "group": "mixed"
    },
    {
        "code": "kg",
        "name": "Quirguistão",
        "group": "mixed"
    },
    {
        "code": "ki",
        "name": "Kiribati",
        "group": "stars_crosses"
    },
    {
        "code": "gb",
        "name": "Reino Unido",
        "group": "canton_stars"
    },
    {
        "code": "cf",
        "name": "República Centro-Africana",
        "group": "mixed"
    },
    {
        "code": "cz",
        "name": "República Tcheca",
        "group": "tricolor_h_red_white_blue"
    },
    {
        "code": "do",
        "name": "República Dominicana",
        "group": "mixed"
    },
    {
        "code": "ro",
        "name": "Romênia",
        "group": "tricolor_v_blue_red"
    },
    {
        "code": "rw",
        "name": "Ruanda",
        "group": "mixed"
    },
    {
        "code": "ru",
        "name": "Rússia",
        "group": "tricolor_h_red_white_blue"
    },
    {
        "code": "ws",
        "name": "Samoa",
        "group": "canton_stars"
    },
    {
        "code": "sm",
        "name": "San Marino",
        "group": "unique_shapes"
    },
    {
        "code": "lc",
        "name": "Santa Lúcia",
        "group": "mixed"
    },
    {
        "code": "kn",
        "name": "São Cristóvão e Névis",
        "group": "mixed"
    },
    {
        "code": "st",
        "name": "São Tomé e Príncipe",
        "group": "pan_african"
    },
    {
        "code": "vc",
        "name": "São Vicente e Granadinas",
        "group": "mixed"
    },
    {
        "code": "sc",
        "name": "Seychelles",
        "group": "mixed"
    },
    {
        "code": "sn",
        "name": "Senegal",
        "group": "tricolor_v_blue_red"
    },
    {
        "code": "sl",
        "name": "Serra Leoa",
        "group": "mixed"
    },
    {
        "code": "rs",
        "name": "Sérvia",
        "group": "tricolor_h_red_white_blue"
    },
    {
        "code": "sg",
        "name": "Singapura",
        "group": "bicolor_h"
    },
    {
        "code": "sy",
        "name": "Síria",
        "group": "pan_arab"
    },
    {
        "code": "so",
        "name": "Somália",
        "group": "mixed"
    },
    {
        "code": "lk",
        "name": "Sri Lanka",
        "group": "mixed"
    },
    {
        "code": "sd",
        "name": "Sudão",
        "group": "pan_arab"
    },
    {
        "code": "ss",
        "name": "Sudão do Sul",
        "group": "mixed"
    },
    {
        "code": "se",
        "name": "Suécia",
        "group": "nordic_cross"
    },
    {
        "code": "ch",
        "name": "Suíça",
        "group": "unique_shapes"
    },
    {
        "code": "sr",
        "name": "Suriname",
        "group": "mixed"
    },
    {
        "code": "tj",
        "name": "Tajiquistão",
        "group": "mixed"
    },
    {
        "code": "th",
        "name": "Tailândia",
        "group": "mixed"
    },
    {
        "code": "tz",
        "name": "Tanzânia",
        "group": "mixed"
    },
    {
        "code": "tg",
        "name": "Togo",
        "group": "pan_african"
    },
    {
        "code": "to",
        "name": "Tonga",
        "group": "mixed"
    },
    {
        "code": "tt",
        "name": "Trinidad e Tobago",
        "group": "mixed"
    },
    {
        "code": "tn",
        "name": "Tunísia",
        "group": "red_moon_star"
    },
    {
        "code": "tm",
        "name": "Turcomenistão",
        "group": "green_heavy"
    },
    {
        "code": "tr",
        "name": "Turquia",
        "group": "red_moon_star"
    },
    {
        "code": "tv",
        "name": "Tuvalu",
        "group": "canton_stars"
    },
    {
        "code": "ua",
        "name": "Ucrânia",
        "group": "mixed"
    },
    {
        "code": "ug",
        "name": "Uganda",
        "group": "mixed"
    },
    {
        "code": "uy",
        "name": "Uruguai",
        "group": "central_america"
    },
    {
        "code": "uz",
        "name": "Uzbequistão",
        "group": "mixed"
    },
    {
        "code": "vu",
        "name": "Vanuatu",
        "group": "mixed"
    },
    {
        "code": "va",
        "name": "Vaticano",
        "group": "unique_shapes"
    },
    {
        "code": "ve",
        "name": "Venezuela",
        "group": "gran_colombia"
    },
    {
        "code": "vn",
        "name": "Vietnã",
        "group": "red_moon_star"
    },
    {
        "code": "zm",
        "name": "Zâmbia",
        "group": "pan_african"
    },
    {
        "code": "zw",
        "name": "Zimbábue",
        "group": "pan_african"
    },
    {
        "code": "ps",
        "name": "Palestina",
        "group": "pan_arab"
    },
    {
        "code": "tw",
        "name": "Taiwan",
        "group": "canton_stars"
    }
];

// Adicionamos as URLs das bandeiras
const allCountries = rawCountriesData.map(c => ({
    name: c.name,
    code: c.code,
    group: c.group,
    flag: `https://flagcdn.com/${c.code}.svg`
}));
