import { StyledWrapperModal, StyledWrapperOverlay } from './Modal.styled';
const { Component } = require('react');

export class Modal extends Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'visible';
  }

  render() {
    return (
      <StyledWrapperOverlay>
        <StyledWrapperModal>
          <button onClick={this.props.close}>Close window</button>
          {this.props.children}
        </StyledWrapperModal>
      </StyledWrapperOverlay>
    );
  }
}
