import { removeAllChildNodes } from "./utils.js";

export default class Pokemon {
    constructor(name, moves, stats) {
        this.name = name;
        this.moves = moves;
        this.selectedMoves = [];
        this.stats = stats;
    }

    displayPokemon() {
        const pokemonDetails = document.getElementById('pokemon-details');
        const name = document.createElement('h4');
        const img = document.createElement('img');
        removeAllChildNodes(pokemonDetails);
        const movesList = document.getElementById('moves-available-list');
        removeAllChildNodes(movesList);
        this.generateMoves(movesList, this.moves);
        name.innerHTML = this.name;
        img.src = `./img/${this.name}-front.png`;
        pokemonDetails.appendChild(name);
        pokemonDetails.appendChild(img);
    }
    
    generateMoves(movesListElement, list) {
        list.forEach(move => {
            const moveElement = document.createElement('li');
            moveElement.dataset.move_name = move.name;
            moveElement.innerHTML = move.name;
            movesListElement.appendChild(moveElement);
        });
    }

    generateSelectedMoves(movesListElement, list) {
        removeAllChildNodes(movesListElement);
        list.forEach(move => {
            const moveElement = document.createElement('li');
            moveElement.dataset.move_name = move.name;
            moveElement.innerHTML = move.name;
            movesListElement.appendChild(moveElement);
        });
    }
    
    displaySelectedMoves() {
        const selectedMovesList = document.getElementById('moves-selected-list');
        this.generateSelectedMoves(selectedMovesList, this.selectedMoves);
        
    }

    addSelectedMove(move) {
        if (this.selectedMoves.indexOf(move) > -1 || this.selectedMoves.length >= 4 || move == undefined) {
            return;
        }
        const addMove = this.moves.find((m) => {
          return m.name === move
        })
        this.selectedMoves.push(addMove);
        this.displaySelectedMoves();
    }

    removeSelectedMove(move) {        
        const sMove = this.selectedMoves.find(element => element.name == move);
        const index = this.selectedMoves.indexOf(sMove);
        this.selectedMoves.splice(index, 1);
        this.displaySelectedMoves();
    }
}