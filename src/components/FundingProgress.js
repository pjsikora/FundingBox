import React, {Component} from 'react';


export default class FundingProgress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            perc: this.recountPercent(this.props.funding)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.funding !== this.props.funding) {
            this.setState({
                perc: this.recountPercent(this.props.funding)
            })
        }
    }

    recountPercent(funding) {
        let perc = funding / 500 * 100;

        if (perc >= 100) {
            perc = 100
        }
        return perc;
    }

    render() {
        let progressBar;

        if (this.props.funding <= 500) {
            progressBar =
                <div className="progressbar__header">
                    ${500 - this.props.funding} still needed for this project
                </div>
        } else {
            progressBar =
                <div className="progressbar__header progressbar__header--green">
                    ${(this.props.funding - 500)} over our target!!!
                </div>
        }

        return (<div>
            <div className="progressbar">
                {progressBar}
            </div>
            <div className="progressbar__linekeeper">
                <div className="progressbar__line" style={{width: this.state.perc + "%"}}></div>
            </div>
        </div>)
    }
}