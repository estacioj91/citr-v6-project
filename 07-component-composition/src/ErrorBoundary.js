// docs
import {Component} from 'react';
import {Link} from 'react-router-dom';

class ErrorBoundary extends Component {
  state = {hasError: false};

  static getDerivedStateFromError(){
    return {hasError: true}
  }

  componentDidCatch(error, info) {
    //log
    console.error("Error Boundary caught error", error, info);
  }

  render() {
    if(this.state.hasError) {
      return (
        <h2>
          Error found. <Link to ="/">click here</Link>
        </h2>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
