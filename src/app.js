import React from 'react';

import Persons from './persons';
import Alerts from './alerts';

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <h3>
          Agenda de Contatos
        </h3>
      </div>

      <Persons/>

      <Alerts/>
    </div>
  );
}
