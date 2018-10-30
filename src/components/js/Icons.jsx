import React, { Component } from 'react';


class Icons extends Component {
    constructor(props) {
        super(props);
        this.setState({
            url: props.url,
            name: props.name,
            fontAwesome: props.fontAwesome
        });
    }

    render() {
        return (
            <div className="Icons">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous"></link>
                <div className="Icon-Link">
                    <a href={this.props.url} alt={this.props.name}>
                        <Icons className={this.props.fontAwesome} />
                    </a>
                </div>
            </div>
        )
    }
}
export default Icons;