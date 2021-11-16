import React, {Component} from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';
import FnameLname from './FnameLnameDisplay/FnameLnameDisplay'
import NamesList from './NamesList/NamesList';
import SuperheroTable from './SuperheroTable/SuperheroTable';


class App extends Component {

    state = {
    firstName: 'Reggie',
    lastName: 'White'
    };

    state2 = {
    names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
    }

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

    AlertUserFunction = (event) => {
        event.preventDefault();
        alert('devCodeCamp')
        }

    render() {
        return(
            <form onSubmit={(event) => this.AlertUserFunction(event)}>
                <div className='container-fluid'>
                    <TitleBar />
                    <FnameLname fname = {this.state.firstName} lname = {this.state.lastName}/>
                    <NamesList names = {this.state2.names}/>
                    <div className="outterbox">
                        <div className="innerbox3">
                            <button type="submit">Click Me</button>
                        </div>
                    </div>
                    <SuperheroTable heros = {this.superheroes}/>
                </div>
            </form>
        )
    }
}

export default App;







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