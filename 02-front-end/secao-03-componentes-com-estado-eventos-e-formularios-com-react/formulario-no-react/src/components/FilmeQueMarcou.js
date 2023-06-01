import  React from 'react';

class FilmeQueMarcou extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        return (
            <label>
              Diga o porque esse filme te marcou de alguma forma
              <textarea name ='filmeQueMarcou' value={value} onChange={ handleChange }>
              </textarea>
            </label>
        )
    }
}
export default FilmeQueMarcou;