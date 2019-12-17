import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Login from '../Login';
import ForgetPasswordWindow from '../Modals/resetPassword';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({isOpen, setClose}) {
  const classes = useStyles();
  const [isForgetPassword, setForgetPassword] = React.useState(false);

  function closeLoginWindow() {
    setClose(false);
    setForgetPassword(false);
  }

  return (
    <>
    {isForgetPassword 
      ? <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={isOpen}
          onClose={() => closeLoginWindow()}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={isOpen}>
            <ForgetPasswordWindow closeModalWindow={closeLoginWindow} />
          </Fade>
        </Modal> 
      : <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={() => setClose(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <Login setForgetPassword={setForgetPassword} closeModalWindow={closeLoginWindow} />
        </Fade>
      </Modal>
    }
  </>
);
}