import React from 'react';

class GBForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            houseName: "",
            houseNumber: "",
            streetName: "",
            streetNumber: "",
            city: "",
            state: "",
            zip: ""
        }
        this.handleHouseNumber = (e) => {
            this.setState({houseNumber: e.target.value})
        }
        this.handleHouseName = (e) => {
            this.setState({houseName: e.target.value})
        }
        this.handleStreetNumber = (e) => {
            this.setState({streetNumber: e.target.value})
        }
        this.handleStreetName = (e) => {
            this.setState({streetName: e.target.value})
        }
        this.handleCity = (e) => {
            this.setState({city: e.target.value})
        }
        this.handleState = (e) => {
            this.setState({state: e.target.value})
        }
        this.handleZip = (e) => {
            this.setState({zip: e.target.value})
        }
    }

    // My attempt to validate one of two house name or number
    validateFields() {
        if (this.state.houseNumber === "" || this.state.houseName === "") alert('Either of House Name or House Number is required')
    }

    render() {
        return (
            <div>
                <div className='form-group'>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" name="houseNumber" placeholder="House Number" value={this.state.houseNumber} onChange={this.handleHouseNumber}/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="houseName" placeholder="House Name" value={this.state.houseName} onChange={this.handleHouseName}/>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className='form-row'>
                        <div className="col">
                            <input type="text" className="form-control" name="streetNumber" placeholder="Street Number" value={this.state.streetNumber} onChange={this.handleStreetNumber} required />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="streetName" placeholder="Street Name" value={this.state.streetName} onChange={this.handleStreetName} required />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-row">
                        <div className="col">
                            <input type='text' className="form-control" name="city" placeholder="City" value={this.state.city} onChange={this.handleCity} required />
                        </div>
                        <div className="col">
                            <input type='text' className="form-control" name="State" placeholder="State" value={this.state.state} onChange={this.handleState} required />
                        </div>
                        <div className="col">
                            <input type='text' className="form-control" name="zip" placeholder="Postal Code" value={this.state.zip} onChange={this.handleZip} required />
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" style={{ float: 'left' }}>Submit</button>
            </div>
        );
    }
}

export default GBForm;