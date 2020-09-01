/* eslint-disable react/prop-types */
import React from 'react'

class DetailPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        // ID = pokemonin nimi, eli ID on sama asia kuin hahmon nimi.
        const { id } = this.props.match.params;
        // ja tässä itse urli, johon liitetään kyseinen id.
        const detailUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
        fetch(detailUrl)
            .then(resp => {
                if (!resp.ok) throw new Error("Not 2xx response")
                else return resp.json()
            })
            .then(data => this.setState({ data }))
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                {
                    this.state.data ? 
                    <div className="card">
                        <div className="card-image">
                            <img className="materialboxed" width="40" src={this.state.data.sprites.front_default}/>
                        </div>
                        <div className="card-title">
                            {this.state.data.name}
                        </div>
                        <div className="card-content">
                            Some description
                        </div>
                    </div> 
                    // antaa tyhjää, jos ei lataa kunnolla.
                    :
                    ''
                }
            </div>
        );
    }
}

export default DetailPage;