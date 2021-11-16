import React, {Component} from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';
import FnameLname from './FnameLnameDisplay/FnameLnameDisplay'

class App extends Component {

        state = {
            firstName: 'Reggie',
            lastName: 'White'
            };

    constructor(props) {
        super(props);
        this.superheroes = [
            {
                superheroId: 1,
                name: 'Batman',
                primaryAbility: 'Wealthy',
                secondaryAbility: 'Rich'
            },
            {
                superheroId: 2,
                name: 'Superman',
                primaryAbility: 'Super strength',
                secondaryAbility: 'Fly'
            },
            {
                superheroId: 3,
                name: 'Spiderman',
                primaryAbility: 'Spider senses',
                secondaryAbility: 'Shoots web'
            }
        ];
    }

    render() {
        return(
            <div className='container-fluid'>
                <TitleBar />
                <FnameLname fname = {this.state[this.state.firstName]} lname = {this.state[this.state.lastName]}/>
            </div>
        )
    }
}

export default App;





//Exercise 1
// state = {
//     firstName: 'Reggie',
//     lastName: 'White'
// }

//Exercise 2
// state = {
//     names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
// }

//Exercise 3
// state = {
//     superheroes = [
//         {
//             superheroId: 1,
//             name: 'Batman',
//             primaryAbility: 'Wealthy',
//             secondarAbility: 'Rich'
//         },
//         {
//             superheroId: 2,
//             name: 'Superman',
//             primaryAbility: 'Super strength',
//             secondarAbility: 'Fly'
//         },
//         {
//             superheroId: 3,
//             name: 'Spiderman',
//             primaryAbility: 'Spider senses',
//             secondarAbility: 'Shoots web'
//         }
//     ]
// }