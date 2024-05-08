const express = require('express');
const router = express.Router();

const PLAYERS = {
    'equipo1': [
        { id: '1', nombre: 'Messi', posicion: 'Delantero' },
        { id: '2', nombre: 'Piqué', posicion: 'Defensa' },
        { id: '3', nombre: 'Busquets', posicion: 'Centrocampista' }
    ],
    'equipo2': [
        { id: '4', nombre: 'Ronaldo', posicion: 'Delantero' },
        { id: '5', nombre: 'Sergio Ramos', posicion: 'Defensa' },
        { id: '6', nombre: 'Modric', posicion: 'Centrocampista' }
    ],
    'equipo3': [
        { id: '7', nombre: 'Neymar', posicion: 'Delantero' },
        { id: '8', nombre: 'Marquinhos', posicion: 'Defensa' },
        { id: '9', nombre: 'Verratti', posicion: 'Centrocampista' }
    ]
};

router.get('/:equipo', (req, res, next) => {
    const team = req.params.equipo;
    const players = PLAYERS[team];
    if (players) {
        res.json(players);
    } else {
        res.status(404).json({ message: 'Equipo no encontrado' });
    }
});

router.get('/:equipo/:id', (req, res, next) => {
    const team = req.params.equipo;
    const playerId = req.params.id;
    const player = PLAYERS[team].find(p => p.id === playerId);
    if (player) {
        res.json(player);
    } else {
        res.status(404).json({ message: 'Jugador no encontrado en este equipo' });
    }
});

module.exports = router;
