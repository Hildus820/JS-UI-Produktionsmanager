import React, { Component } from 'react';
import ProdFortschritt from './produktionsprogress';
import DetailsButton from './button';

class ProdLinie extends Component {
  state = {
    isDetailsButtonOpen: false //Initialzustand des Buttons auf False setzen
  };

  openDetailsButton = () => {
    this.setState({ isDetailsButtonOpen: true }); //Öffnen des Pop-Ups
  };

  closeDetailsButton = () => {
    this.setState({ isDetailsButtonOpen: false }); //Schließen des Pop-Ups
  };

  render() {
    const { image, title, description, buttonTitle, buttonContent } = this.props;
    const [tagespensum, fortschritt] = description.split("\n"); //Zeilenumbruch nach Tagespensum, sodass ich in description einen String eintrage, dieser aber gefiltert wird.

    return (
      <div className="card" styles={{ width: '25rem' }}>
        <img src={"assets/img/" + image} className="custom-card-img" alt="..." /> {/*Bild hinzufügen*/}
        <div className="card-body">
          <h5 className="card-title">{title}</h5> {/*Titel*/}
          <p className="card-text">
            {tagespensum}<br />   {/*Ausgabe des Tagespensums*/}
            <ProdFortschritt fortschritt={parseInt(fortschritt)} /> {/*  */}
          </p>
          <button className='btn btn-primary' onClick={this.openDetailsButton}>{buttonTitle}</button>
        </div>
        <DetailsButton
          isOpen={this.state.isDetailsButtonOpen} //Nur Rendern, wenn isDetailsButtonOpen True ist
          onClose={this.closeDetailsButton}
          title={buttonTitle} //Platzhalter Button Titel vergeben
          content={buttonContent} //Platzhalter Inhalt des Popup-Fensters  
        />
      </div>
    );
  }
}

export default ProdLinie;