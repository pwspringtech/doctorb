import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log('error caught by ErroryBoundary: ', error)
    console.log('error info caught by ErroryBoundary: ', errorInfo)

  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <p style={{ color: 'white'}}>Instagram feed unavailable</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;