import React from 'react';
import './SuperheroTable.css'

const SuperheroTable = (props) => {
    return ( 
        <div className="outterbox">
            <div className="innerbox4">
                <table>
                    <tr>
                        <th>{props.heros[0].superheroId}</th>
                        <th>{props.heros[1].superheroId}</th>
                        <th>{props.heros[2].superheroId}</th>
                    </tr>
                    <tr>
                        <th>{props.heros[0].name}</th>
                        <th>{props.heros[1].name}</th>
                        <th>{props.heros[2].name}</th>
                    </tr>
                    <tr>
                        <th>{props.heros[0].primaryAbility}</th>
                        <th>{props.heros[1].primaryAbility}</th>
                        <th>{props.heros[2].primaryAbility}</th>
                    </tr>
                    <tr>
                        <th>{props.heros[0].secondaryAbility}</th>
                        <th>{props.heros[1].secondaryAbility}</th>
                        <th>{props.heros[2].secondaryAbility}</th>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default SuperheroTable;