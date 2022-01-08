import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <section>
          <div className="py-5 d-flex justify-content-center">
            <div className="card container text-center py-5 mt-7">
              <h1 className="display-4"><b><strong><em>Bienvenido</em></strong></b> a Chatty</h1>
              <div className="mt-4">
                <Link className="btn btn-warning px-5 mr-3" to="/signup">Crear Cuenta</Link>
                <Link className="btn btn-success px-5" to="/login">Iniciar Sesion</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
