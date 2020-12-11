import './App.css';

import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {ThemeProvider} from 'styled-components';
import {temaClaro, temaEscuro} from './Temas';
import {EstiloGlobal} from './EstiloGlobal';

class App extends Component {

  constructor(props) {
		super(props);
    this.state = {tema: 'claro'}
	}   

  mudarTema = () => {
    if (this.state.tema === 'claro') {
      this.setState({tema: 'escuro'})
    } else {
      this.setState({tema: 'claro'})
    }
  } 

  render() {
    return (
        <ThemeProvider theme={this.state.tema === 'claro' ? temaClaro : temaEscuro}>
          <EstiloGlobal />

          <main className='form-signin'>
            <div id='toggle' onClick={this.mudarTema}>☀ {this.state.tema === 'claro' ? 'apagar a luz' : 'acender a luz'}</div>

            <form className='text-center'>
              <img className='mb-4' src='https://avatars3.githubusercontent.com/u/26981426?s=400&u=330402cc4efe681b4040431f933a5c387d6669aa&v=4' alt="Foto de Denis"/>         
              <h1 className='h3 mb-3 fw-normal'>Se inscreva em meu boletim informativo</h1>
              <input type='email' required placeholder="endereço de e-mail" className='form-control'></input>
              <p></p>
              <Button type='submit'>Inscrever</Button>
            </form>
          </main>

        </ThemeProvider>
    )
  }

}

export default App;
