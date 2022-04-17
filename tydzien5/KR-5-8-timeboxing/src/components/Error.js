import React from "react"
import ErrorMessage from "./ErrorMessage"

class Error extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error("Wystąpił następujący błąd: ", error, info)
  }

  render() {
    const { message, children } = this.props
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return (
      <>{children}</>
  )}
}

export default Error