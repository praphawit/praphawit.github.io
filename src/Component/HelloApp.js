import React from 'react'

class HelloApp extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
          counter: 0
        }

        this.handleClick = this.handleClick.bind(this)
      }

      handleClick() {
        this.setState(prevState => ({
            counter: prevState.counter + 1
          }))
      }

	render() {
		return (
            <React.Fragment>
              <row>
                <h1>Ahoy! React</h1>
                <p>{this.props.message}</p>
                <p>{this.props.a}</p>
                <p>{this.props.b}</p>
                <p>Total click : {this.state.counter}</p>
                <button onClick={this.handleClick}></button>
              </row>
                
            </React.Fragment>
        )
        

	}
}

export default HelloApp