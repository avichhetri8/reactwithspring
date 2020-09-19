import React, {nodeRef,useRef} from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import './Modal.css';

const ModalOverlay = props => {

  const content = (
    <React.Fragment  >
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : event => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
    </React.Fragment>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {
  const  nodeRef = React.useRef(null)
  
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
        
        <CSSTransition
        in={props.show}
        nodeRef={nodeRef}
        nodeRef={nodeRef} 
        classNames="modal"
        mountOnEnter
        timeout ={100}
        unmountOnExit
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
