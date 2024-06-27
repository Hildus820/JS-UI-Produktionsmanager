import React, { Component } from 'react';

class ProdVorschritt extends Component {
    state = {}
    render() {
        const { fortschritt } = this.props; //initialisierung von fortschritt als manuell änderbarer Wert
       
        return (
            /*Erstellen einer Progess-Bar von 0-100% mit fortschritt als aktuelle Wert */
            <div className = "progress" role="progressbar" aria-label={fortschritt} aria-valuenow={fortschritt} aria-valuemin="0" aria-valuemax="100"> 
                <div className ="progress-bar" style={{ width: `${fortschritt}%` }}> {fortschritt}  </div>
            </div>
        );
    }
}

export default ProdVorschritt;