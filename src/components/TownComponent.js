import React from 'react'
import TownService from '../service/TownService'

class TownComponent extends React.Component{
    constructor(props){
        super(props)
         this.state = {
            towns: []
        }
    }

    componentDidMount(){
        TownService.getTowns().then(
            (response) => {
                this.setState({towns: response.data})
            }
        )
    }

    render(){
        return(
            <div>
                <h1 className="text-center panel-title">Towns List</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr className="text-uppercase text-center">
                            <td rowspan="2">Town ID</td>
                            <td rowspan="2">Town Name</td>
                            <td rowspan="2">Population</td>
                            <td rowspan="2">Last Census</td>
                            <td rowspan="2">Famous for</td>
                            <td colspan="2">Mayor</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Party</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.towns.map(
                                town => 
                                <tr key = {town.id}>
                                    <td>{town.id}</td>
                                    <td>{town.name}</td>
                                    <td>{town.population}</td>
                                    <td>{town.lastCensus}</td>
                                    <td>{town.famousFor}</td>
                                    <td>{town.mayor.name}</td>
                                    <td>{town.mayor.party}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    
}

export default TownComponent;