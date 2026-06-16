import cls from './Modal.module.scss'
import closeImg from '../../assets/close.svg'

const Modal = ({isOpen, onClose, children}) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div className={cls.overlay} onClick={onClose}>
            <div className={cls.Modal} onClick={(e) => e.stopPropagation()}>
                <button
                    type="button"
                    className={cls.close}
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <img src={closeImg} alt="close" />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;