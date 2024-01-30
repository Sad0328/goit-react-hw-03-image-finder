//import { Component } from 'react';
import { Component } from 'react';
//import { createPortal } from 'react-dom';
import { createPortal } from 'react-dom';
//import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
//import { Overlay, ModalWindow } from './Modal.styled';
import { Overlay, ModalWindow } from './Modal.styled';

// const modalRoot = document.querySelector('#modal-root');
const modalRoot = document.querySelector('#modal-root');
console.log(modalRoot);

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'visible';
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;

    return createPortal(
      <div>
        <Overlay onClick={this.handleBackdropClick}>
          <ModalWindow>{<img srs={largeImageURL} alt={tags} />}</ModalWindow>
        </Overlay>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
