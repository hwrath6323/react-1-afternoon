import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            pets: [
                {
                name: 'Princess',
                species: 'cat',
                breed: 'Blue Tonkinese'
                },

                {
                name: 'Diablo',
                breed: 'Doberman'
                },

                {
                name: 'Erian',
                species: 'dragon'
                },

                {
                name: 'Clop',
                species: 'unicorn',
                breed: 'Foddian'
                },

                {
                name: 'Shadow',
                breed: 'black hedgehog'
                }
            ],
            userInput: '',
            filteredPets: []
        }
    }

    handleChange(val){
        this.setState({userInput: val});
    }

    filterPets(prop){
        var pets = this.state.pets;
        var filteredPets = [];

        for (var i = 0; i < pets.length; i++){
            if(pets[i].hasOwnProperty(prop)){
                filteredPets.push(pets[i]);
            }
        }

        this.setState({filteredPets: filteredPets})

    }




    render(){
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.pets, null, 10)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.filterPets(this.state.userInput)}> Filter </button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredPets, null, 10)}</span>
            </div>
        )
    }
}