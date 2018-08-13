import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import styles from 'style/style.css'
import FundingForm from 'components/FundingForm'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Root style={styles}>
        <FundingForm/>
    </Root>,
    document.querySelector('#root'));

registerServiceWorker();
