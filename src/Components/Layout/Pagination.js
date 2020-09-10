import React from 'react'
import { connect } from 'react-redux';

class Pagination extends React.Component {
    render() {
        console.log(this.props)

        // näin saamme kaikille 1052 pokemonille omat sivut.
        // numberofPage saa datansa action.datasta, joka tulee init statesta.
        // Muuta nää navlinkkeiksi.
        const pageLinks = [];
        for (let i = 0; i < this.props.numberOfPage; i++) {
            pageLinks.push(<li key={i} className="waves.effect"><a href="#!">{i}</a></li>)
        }

        return (
            <div className="container">
                <ul className="pagination">
                    <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                    {/* {pageLinks} */}
                    <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                </ul>
            </div>
        )
    }
}

// tänne mapstatoProps johon  liitetään sekä previous ja nextpage.
// muista tietenkin numberofpage. nää on kaikki statesta, eli connect + mapdispatchtostore.
// index numero saadaan linkkien luomasta numerosta, joka on pelkkää tekstiä.
export default Pagination;