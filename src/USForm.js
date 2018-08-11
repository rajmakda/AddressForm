import React from 'react'

class USForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedState: "",
            states: [{
                "$elt": "Alabama",
                "$id": "AL"
            },
            {
                "$elt": "Alaska",
                "$id": "AK"
            },
            {
                "$elt": "American Samoa",
                "$id": "AS"
            },
            {
                "$elt": "Arizona",
                "$id": "AZ"
            },
            {
                "$elt": "Arkansas",
                "$id": "AR"
            },
            {
                "$elt": "Armed Forces Americas",
                "$id": "AA"
            },
            {
                "$elt": "Armed Forces Europe",
                "$id": "AE"
            },
            {
                "$elt": "Armed Forces Pacific",
                "$id": "AP"
            },
            {
                "$elt": "California",
                "$id": "CA"
            },
            {
                "$elt": "Colorado",
                "$id": "CO"
            },
            {
                "$elt": "Connecticut",
                "$id": "CT"
            },
            {
                "$elt": "Delaware",
                "$id": "DE"
            },
            {
                "$elt": "District of Columbia",
                "$id": "DC"
            },
            {
                "$elt": "Federated States of Micronesia",
                "$id": "FM"
            },
            {
                "$elt": "Florida",
                "$id": "FL"
            },
            {
                "$elt": "Georgia",
                "$id": "GA"
            },
            {
                "$elt": "Guam",
                "$id": "GU"
            },
            {
                "$elt": "Hawaii",
                "$id": "HI"
            },
            {
                "$elt": "Idaho",
                "$id": "ID"
            },
            {
                "$elt": "Illinois",
                "$id": "IL"
            },
            {
                "$elt": "Indiana",
                "$id": "IN"
            },
            {
                "$elt": "Iowa",
                "$id": "IA"
            },
            {
                "$elt": "Kansas",
                "$id": "KS"
            },
            {
                "$elt": "Kentucky",
                "$id": "KY"
            },
            {
                "$elt": "Louisiana",
                "$id": "LA"
            },
            {
                "$elt": "Maine",
                "$id": "ME"
            },
            {
                "$elt": "Marshall Islands",
                "$id": "MH"
            },
            {
                "$elt": "Maryland",
                "$id": "MD"
            },
            {
                "$elt": "Massachusetts",
                "$id": "MA"
            },
            {
                "$elt": "Michigan",
                "$id": "MI"
            },
            {
                "$elt": "Minnesota",
                "$id": "MN"
            },
            {
                "$elt": "Mississippi",
                "$id": "MS"
            },
            {
                "$elt": "Missouri",
                "$id": "MO"
            },
            {
                "$elt": "Montana",
                "$id": "MT"
            },
            {
                "$elt": "Nebraska",
                "$id": "NE"
            },
            {
                "$elt": "Nevada",
                "$id": "NV"
            },
            {
                "$elt": "New Hampshire",
                "$id": "NH"
            },
            {
                "$elt": "New Jersey",
                "$id": "NJ"
            },
            {
                "$elt": "New Mexico",
                "$id": "NM"
            },
            {
                "$elt": "New York",
                "$id": "NY"
            },
            {
                "$elt": "North Carolina",
                "$id": "NC"
            },
            {
                "$elt": "North Dakota",
                "$id": "ND"
            },
            {
                "$elt": "Northern Mariana Islands",
                "$id": "MP"
            },
            {
                "$elt": "Ohio",
                "$id": "OH"
            },
            {
                "$elt": "Oklahoma",
                "$id": "OK"
            },
            {
                "$elt": "Oregon",
                "$id": "OR"
            },
            {
                "$elt": "Palau",
                "$id": "PW"
            },
            {
                "$elt": "Pennsylvania",
                "$id": "PA"
            },
            {
                "$elt": "Puerto Rico",
                "$id": "PR"
            },
            {
                "$elt": "Rhode Island",
                "$id": "RI"
            },
            {
                "$elt": "South Carolina",
                "$id": "SC"
            },
            {
                "$elt": "South Dakota",
                "$id": "SD"
            },
            {
                "$elt": "Tennessee",
                "$id": "TN"
            },
            {
                "$elt": "Texas",
                "$id": "TX"
            },
            {
                "$elt": "Utah",
                "$id": "UT"
            },
            {
                "$elt": "Vermont",
                "$id": "VT"
            },
            {
                "$elt": "Virgin Islands",
                "$id": "VI"
            },
            {
                "$elt": "Virginia",
                "$id": "VA"
            },
            {
                "$elt": "Washington",
                "$id": "WA"
            },
            {
                "$elt": "West Virginia",
                "$id": "WV"
            },
            {
                "$elt": "Wisconsin",
                "$id": "WI"
            },
            {
                "$elt": "Wyoming",
                "$id": "WY"
            }
            ]
        }
        this.handleStateChange = this.handleStateChange.bind(this)
        this.handleAddress1 = this.handleAddress1.bind(this)
        this.handleAddress2 = this.handleAddress2.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleZip = this.handleZip.bind(this)
    }

    handleStateChange = (e) => {
        this.setState({selectedState: e.target.value})
    }

    handleAddress1 = (e) => {
        this.setState({address1: e.target.value})
    }
    handleAddress2 = (e) => {
        this.setState({address2: e.target.value})
    }
    handleCity = (e) => {
        this.setState({city: e.target.value})
    }
    handleZip = (e) => {
        this.setState({zip: e.target.value})
    }

    getStateOptions() {
        let states = this.state.states
        return states.map(function(state, key) {
            return <option key={key} value={state.$id}>{state.$elt}</option>
        })
    }

    render() {
        return (
            <div>
                <div className='form-group'>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" name="line1" placeholder="Address Line 1" value={this.state.address1} onChange={this.handleAddress1} required/>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className='form-row'>
                        <div className="col">
                            <input type="text" className="form-control" name="line2" placeholder="Address Line 2" value={this.state.address2} onChange={this.handleAddress2}/>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-row">
                        <div className="col">
                            <input type='text' className="form-control" name="city" placeholder="City" value={this.state.city} onChange={this.handleCity} required/>
                        </div>
                        <div className="col">
                            <select className="form-control" value={this.state.selectedState} onChange={this.handleStateChange} required>
                                {this.getStateOptions()}
                            </select>
                        </div>
                        <div className="col">
                            <input type='text' className="form-control" name="zip" placeholder="Postal Code" value={this.state.zip} onChange={this.handleZip} required/>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" style={{float: 'left'}}>Submit</button>
            </div>
        )
    }
}

export default USForm;