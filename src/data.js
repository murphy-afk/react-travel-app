const trips = [
    {
        id: 1,
        starting_point: "Roma",
        ending_point: "Barcellona",
        starting_date: "2026-04-10",
        ending_date: "2026-04-15",
        category: "soft"
    },
    {
        id: 2,
        starting_point: "Milano",
        ending_point: "Reykjavik",
        starting_date: "2026-06-01",
        ending_date: "2026-06-10",
        category: "wild"
    },
    {
        id: 3,
        starting_point: "Napoli",
        ending_point: "Atene",
        starting_date: "2026-08-20",
        ending_date: "2026-08-27",
        category: "soft"
    },
    {
        id: 4,
        starting_point: "Como",
        ending_point: "Atene",
        starting_date: "2027-08-20",
        ending_date: "2027-08-27",
        category: "wild"
    },
];




const travelers = [
    {
        id: 1,
        name: "Marco",
        surname: "Rossi",
        email: "marco.rossi@email.com",
        telephone_number: "+393331234567",
        identification_code: "RSSMRC90A01H501X"
    },
    {
        id: 2,
        name: "Giulia",
        surname: "Bianchi",
        email: "giulia.bianchi@email.com",
        telephone_number: "+393481234890",
        identification_code: "BNCGLI95C45F205Z"
    },
    {
        id: 3,
        name: "Luca",
        surname: "Verdi",
        email: "luca.verdi@email.com",
        telephone_number: "+393291112233",
        identification_code: "VRDLCU88D12G273K"
    }
];

export default {travelers, trips}