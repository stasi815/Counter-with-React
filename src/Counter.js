import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        const { count } = this.state
        const { step } = this.props
        this.setState({ count: count + step })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <h1>{ count }</h1>
                <button onClick={(e) => {
                    this.increment()
                }}>Click</button>
            </div>
        )
    }
}

export default Counter