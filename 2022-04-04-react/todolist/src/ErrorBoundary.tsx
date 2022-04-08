import { Component } from "react";

type Props = { children: React.ReactNode };
type State = { hasError: boolean };
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong ...</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
