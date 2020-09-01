/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

class Card extends React.Component {
    render() {
        // Card saa propsista tietenkin datan, ja propsit tulee statesta.
        const { name, url } = this.props.pokemon
        // eli KUUDENNEN / merkin jälkeen tulee props id, joka on siis pikachu.png, eli / korvaa tuo ID.
        // HUOM: tämä urli on vain kuvia varten. Itse applikaation nettisivu url on index-numeroon perustuva.
        const id = url.split('/')[6]
        const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

        return (
            <div className="col s2 m2">
                <div className="card vetical">
                    <div className="card-image">
                        <img src={ imgUrl } />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p> { name } </p>
                        </div>
                        <div className="card-action">
                            <Link to={'/details/' + id}>Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;