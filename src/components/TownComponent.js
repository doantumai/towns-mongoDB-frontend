import React from 'react'
import TownService from '../service/TownService'

class TownComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            towns: [],
            food: [], 
            moma: [], 
            foodandbeer: [],
            notfoodandbeer: [],
            mayorparty: []
        }
    }

    componentDidMount() {
        TownService.getTowns().then(
            (response) => {
                this.setState({ towns: response.data })
            }
        )

        TownService.getFamousForFood().then(
            (response) => {
                this.setState({ food: response.data })
            }
        )

        TownService.getFamousForMoma().then(
            (response) => {
                this.setState({ moma: response.data })
            }
        )

        TownService.getFamousForFoodAndBeer().then(
            (response) => {
                this.setState({ foodandbeer: response.data })
            }
        )

        TownService.getFamousForNotConsistingFoodAndBeer().then(
            (response) => {
                this.setState({ notfoodandbeer: response.data })
            }
        )

        TownService.getMayorParty().then(
            (response) => {
                this.setState({ mayorparty: response.data })
            }
        )
    }

    render() {
        return (
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
                                    <tr key={town.id}>
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

                <div>&nbsp;</div>

                <h3 className="text-center panel-title">Famous for food</h3>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr className="text-uppercase text-center">
                            <td rowspan="2">Town Name</td>
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
                            this.state.food.map(
                                town =>
                                    <tr key={town.id}>
                                        <td>{town.name}</td>
                                        <td>{town.famousFor}</td>
                                        <td>{town.mayor.name}</td>
                                        <td>{town.mayor.party}</td>
                                    </tr>
                                 )
                        }
                    </tbody>
                </table>
            
                <div>&nbsp;</div>
            
                <h3 className="text-center panel-title">Famous for MOMA</h3>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr className="text-uppercase text-center">
                            <td rowspan="2">Town Name</td>
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
                            this.state.moma.map(
                                town =>
                                    <tr key={town.id}>
                                        <td>{town.name}</td>
                                        <td>{town.famousFor}</td>
                                        <td>{town.mayor.name}</td>
                                        <td>{town.mayor.party}</td>
                                    </tr>
                                 )
                        }
                    </tbody>
                </table>

                <div>&nbsp;</div>
            
                <h3 className="text-center panel-title">Famous for Food and Beer</h3>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr className="text-uppercase text-center">
                            <td >Town Name</td>
                            <td >Famous for</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.foodandbeer.map(
                                town =>
                                    <tr key={town.id}>
                                        <td>{town.name}</td>
                                        <td>{town.famousFor}</td>
                                    </tr>
                                 )
                        }
                    </tbody>
                </table>
                
                <div>&nbsp;</div>
            
                <h3 className="text-center panel-title">Famous for not having Food and Beer</h3>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr className="text-uppercase text-center">
                            <td >Town Name</td>
                            <td >Famous for</td>
                         </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.notfoodandbeer.map(
                                town =>
                                    <tr key={town.id}>
                                        <td>{town.name}</td>
                                        <td>{town.famousFor}</td>
                                    </tr>
                                 )
                        }
                    </tbody>
                </table>

                <div>&nbsp;</div>
            
            <h3 className="text-center panel-title">Mayors from Democratic Party</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr className="text-uppercase text-center">
                        <td rowspan="2">Town Name</td>
                        <td colspan="2">Mayor</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>Party</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.mayorparty.map(
                            town =>
                                <tr key={town.id}>
                                    <td>{town.name}</td>
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