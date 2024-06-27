import React, { Component } from 'react';
import ProdLinie from './komponenten/produktionslinie';

class App extends Component {
    state = {}
    render() {
        return (
            //Erstellen eines Containers für die einzelnen Cards
            <React.Fragment>
                <div><h1 className='header'>Produktionsplan für KW 27</h1></div>
                <div className="prod-line-oben"> {/*Containder für die obere Reihe*/}
                    {/*Einzelne Produktionslinien definieren */}
                    <ProdLinie 
                    image="Planfräsen.jpg" 
                    title="Planfräsen Grundplatte 100x100mm" 
                    description="Tagespensum: 600\n50" 
                    buttonTitle="Details"
                    buttonContent={<ul>
                        <li>Auftragsnummer: 0815</li>
                        <li>Arbeitsbeginn: 01.07.2024 06:00Uhr</li>
                        <li>Geplantes Arbeitsende: :01.07.2024 22:00Uhr</li>
                    </ul>
                    }
                    />

                    <ProdLinie 
                    image="Drehen.jpg" 
                    title="Drehen Flansch" 
                    description="Tagespensum: 750\n60"
                    buttonTitle="Details" 
                    />

                    <ProdLinie 
                    image="Bohrmaschine.jpg" 
                    title="Befestigungsbohrungen Flansch " 
                    description="Tagespensum: 750\n58" 
                    buttonTitle = "Details"
                    />

                </div>
                <div className="prod-line-unten"> {/*Container für die untere Reihe*/}
                    <ProdLinie image="Entgraten.jpg" title="Entgraten des Flansches" description="Tagespensum: 750\n50" />
                    <ProdLinie image="Löten.jpg" title="Elektronikfertigung" description="Tagespensum: 1250\n85" />
                    <ProdLinie image="Endmontage.jpg" title="Befestigungsbohrungen Flansch " description="Tagespensum: 600\n33"/>
                </div>
            </React.Fragment>

        );
    }
}
export default App;