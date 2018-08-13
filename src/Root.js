import  {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.progressRoot = document.getElementById('progress-root');
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.progressRoot
        );
    }
}