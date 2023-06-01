import React from 'react';
import FilmeQueMarcou from './FilmeQueMarcou';

class Form extends React.Component {
    state = {
        filmeFavorito:'',
        nome:'',
        idade: 0,
        filmeQueMarcou: '',
        checkbox: false,
    }

    handleChange = ({target}) => {
        const { name } = target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
        [name]: value
        })
    }
    render() {
    return (
        <form>
            <p>Selecione um entre as opções qual filme você mais gosta</p>
            <select name="filmeFavorito" value={this.state.filmeFavorito} onChange={this.handleChange}>
                <option value="Titanic">Titanic</option>
                <option value="A bela e a fera">A bela e a fera</option>
                <option value="O homem aranha">O homem aranha</option>
                <option value="O menino do pijama listrado">O menino do pijama listrado</option>
                <option value="A culpa é das estrelas">A culpa é das estrelas</option>
            </select>
            <label>
                Nome:
                <input
                type='text' name='nome' value={this.state.nome} onChange={this.handleChange}
                />
            </label>
            
            <label>
                Idade:
                <input 
                type='number' name='idade' value={this.state.idade} onChange={this.handleChange}
                />
            </label>

            <label>
                Gostou dessa página?
                <input
                type='checkbox' name='checkbox' value={this.state.checkbox} onChange={this.handleChange}
                />
            </label>
            <FilmeQueMarcou value={this.state.filmeQueMarcou} handleChange={this.handleChange}/>
        </form>
    );
  }
}

export default Form;