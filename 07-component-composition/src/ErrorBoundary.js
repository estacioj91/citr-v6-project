// docs
import {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';

class ErrorBoundary extends Component {
  state = {hasError: false, redirect: false};

  static getDerivedStateFromError(){
    return {hasError: true}
  }

  componentDidCatch(error, info) {
    //log
    console.error("Error Boundary caught error", error, info);
  }

  componentDidUpdate() {
    if(this.state.hasError) {
      setTimeout(() => {
        return this.setState({redirect: true})
      }, 5000)
    }
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to="/"/>
    }

    else if(this.state.hasError) {
      return (
        <h2>
          Error found. <Link to ="/">click here</Link> or wait.
        </h2>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
