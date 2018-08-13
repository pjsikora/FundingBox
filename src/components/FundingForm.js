import React, {Component} from 'react';
import FundingProgress from 'components/FundingProgress';


export default class FundingForm extends Component {
    constructor(props) {
        super(props);
        let definedFunding = localStorage.getItem('definedFunding');
        if (typeof definedFunding === 'undefined') definedFunding = 0;
        this.state = {
            funding: 57,
            fundingInput: parseInt(definedFunding, 10),
            whyTooltipIsVisible: false
        }
    }

    saveForLater = () => {
        let fundingInput;

        if (isNaN(this.state.fundingInput)) {
            fundingInput = 0;
        } else {
            fundingInput = this.state.fundingInput;
        }

        localStorage.setItem('definedFunding', parseInt(fundingInput, 10));
    }

    addFunding = () => {
        if (typeof this.state.fundingInput !== 'undefined') {
            const funding = this.state.funding + parseInt(this.state.fundingInput, 10)
            this.setState({
                funding: funding,
            })
        }
    }

    inputChange = (e) => {
        this.setState({
            fundingInput: e.target.value
        });
    }

    whyClick = () => {
        this.setState({
            whyTooltipIsVisible: true
        })
    }

    whyClose = () => {
        this.setState({
            whyTooltipIsVisible: false
        })
    }

    render() {
        let
            toolTip;

        if (this.state.whyTooltipIsVisible) {
            toolTip = <p>
                <button className="button button--close" onClick={this.whyClose}></button>
                <span className="tooltip">Lorem ipsum dolor sit amet</span>
                </p>
        }

        return (
            <div className="fundingbox">
                <FundingProgress
                    funding={this.state.funding} />
                <div className="form">
                    <p>
                        <span className="form__span">Only 3 days left</span> to fund this.
                    </p>
                    <p>
                        Join the 42 other donors who have already supported this project. Every dollar helps.
                    </p>

                    <div className="form__keeper">
                        <div className="row">
                            <div className="column column--pr">
                                <div className="form__inputkeeper">
                                    <input type="number"
                                           className="form__input"
                                           value={this.state.fundingInput}
                                           onChange={this.inputChange}
                                    />
                                </div>
                            </div>
                            <div className="column column--pl">
                                <button className="button" onClick={this.addFunding}>Give Now</button>
                            </div>
                        </div>


                    </div>
                    <p className="form__p--why" onClick={this.whyClick}>
                        Why give $50?
                    </p>
                    {toolTip}
                </div>
                <div className="row">
                    <div className="column column--pr">
                        <a className="button button--grey" onClick={this.saveForLater}>Save for later</a>
                    </div>
                    <div className="column column--pl">
                        <a className="button button--grey" href="mailto:someone@example.com?Subject=Hello%20again" target="_top">Send Mail</a>
                    </div>
                </div>
            </div>
        )
    }
}