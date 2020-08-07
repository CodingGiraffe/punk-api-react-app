import React, { Component } from 'react'

class MyComponent extends Component {
    componentDidMount() {
        fetch('http://example.com')
            .then(res => res.json())
            .then(examples => {
                this.setState({ data: examples })
            })
    }

    render() {
        return (
            <div>
                <h1>Welcome to our component</p>
                <p>Take a look at our data: {this.state.data}</p>
            </div>
        )
    }
}

export default MyComponent
