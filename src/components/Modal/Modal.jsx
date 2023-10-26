import { toast } from 'react-toastify';
import { StyledWrapperModal, StyledWrapperOverlay } from './Modal.styled';
const { Component } = require('react');

export class Modal extends Component {
  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.close();
      toast.info('Modal was closed by Escape');
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'visible';
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickOut = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.close();
    }
  };

  render() {
    return (
      <StyledWrapperOverlay onClick={this.handleClickOut}>
        <StyledWrapperModal>
          <button onClick={this.props.close}>Exit</button>
          {this.props.children}
        </StyledWrapperModal>
      </StyledWrapperOverlay>
    );
  }
}
