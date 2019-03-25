import React from 'react';

class ButtonGhost extends React.Component {
    render() {
        return(
            <a onClick={this.props.onClick} className="btn btn-ghost" href={this.props.section}>{this.props.children}</a>
        );
    }
}

export default ButtonGhost;