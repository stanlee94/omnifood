import React from 'react';

class ButtonFull extends React.Component {
    render() {
        return <a onClick={this.props.onClick} className="btn btn-full" href={this.props.section}>{this.props.children}</a>;
    }
}

export default ButtonFull;