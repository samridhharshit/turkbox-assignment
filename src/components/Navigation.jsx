import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

class Navigation extends React.Component {
    change = (event) => {
        const { value } = event.target;
        // console.log(name, value);
        this.props.routeTo(value);
    }
    render() {
        return (
            <div className="row navigation-row">
                <div className={this.props.class}>
                    <div className="button to-overview-button">
                        <Button

                            value="overview"
                            onClick={this.change}
                        >
                            overview
                        </Button>
                    </div>

                    <div className="button hospitable-bed-across-india">
                        <Button

                            value="hospitablebeds"
                            onClick={this.change}
                        >
                            Hospitable Beds across India
                            </Button>
                    </div>
                    <div className="button spread-stat-by-age">
                        <Button

                            value="spreadstat"
                            onClick={this.change}
                        >
                            Spread stat by Age
                            </Button>
                    </div>
                    <div className="button icmr-testing-details">
                        <Button

                            value="icmrtestdetails"
                            onClick={this.change}
                        >
                            ICMR testing details
                            </Button>
                    </div>


                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        class: state.className
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        routeTo: (componentType) => { dispatch({ type: 'mountComponent', component: componentType }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
