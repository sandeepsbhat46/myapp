import { render } from '@testing-library/react';
import React, {Component} from 'react';
import FirstChild from './firstChild';

class ParentComponent extends Component{
    render(){
        return(
            <h1>
            I am the parent component
            <FirstChild/>
            </h1>
        );
    }
}

export default ParentComponent;