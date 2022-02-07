import React, { Component } from "react"

const TicketContext = React.createContext()

const TicketProvider = TicketContext.Provider
// const TicketConsumer = TicketContext.Consumer


class MyContext extends Component {
  render() {
    return (
      <TicketProvider value={"ticket-data"}>{this.props.children}</TicketProvider>
    )
  }
}

export { TicketProvider, MyContext }