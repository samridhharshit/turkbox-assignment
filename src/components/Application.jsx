import React from 'react';
import { connect } from 'react-redux';
import HospitableBeds from './HospitableBeds';
import SpreadStat from './SpreadStat';
import ICMRTestDetails from './ICMRTestDetails';
import Overview from './Overview';

class Application extends React.Component {
    render() {
        // console.log(this.props.component);
        switch (this.props.component) {

            case "hospitablebeds":
                return (
                    <div className="row application-row">
                        <div className="col-sm-12">
                            <HospitableBeds />
                        </div>
                    </div>
                );

            case "spreadstat":
                return (
                    <div className="row application-row">
                        <div className="col-sm-12">
                            <SpreadStat />
                        </div>
                    </div>
                );

            case "icmrtestdetails":
                return (
                    <div className="row application-row">
                        <div className="col-sm-12">
                            <ICMRTestDetails />
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="row application-row">
                        <div className="col-sm-12">
                            <Overview />
                        </div>
                    </div>
                );

        }
    }
}

const mapStateToProps = (state) => {
    return {
        component: state.mountComponent
    }
}

export default connect(mapStateToProps)(Application)
