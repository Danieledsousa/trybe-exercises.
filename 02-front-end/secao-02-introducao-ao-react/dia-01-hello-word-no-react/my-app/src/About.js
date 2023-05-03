import React from 'react';

class AboutInfo extends React.Component {
    
    render() {
        const nome = 'Daniele';
        const description = 'Sou Daniele, tenho 28 anos, e moro no Distrito Federal.'
        
        return (
        <div>
            <h1>
            {nome}
            </h1>
            <p>
            {description}
            </p>
            <h2>Minhas Habilidades</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
            </ul>
        </div>
        );
    }
}

export default AboutInfo;