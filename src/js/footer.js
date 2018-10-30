import React from 'react';
export default class MyFooter extends React.Component {
    constructor(props) {
		super(props);
	}
    render() {
        const footstyle={
            textAlign:'center',
            paddingTop:'10px'
        }

        return (
            <footer style={ footstyle} className={'text-white bg-dark'}>
                <span> 製作中</span>
            </footer>
        );
    }
}
