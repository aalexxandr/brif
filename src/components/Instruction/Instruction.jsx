import React from 'react';
import style from './instruction.module.css'
import Icon from '@material-ui/core/Icon'
import { Typography } from '@material-ui/core'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import CheckIcon from '@material-ui/icons/Check'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import ClearIcon from '@material-ui/icons/Clear';

function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }

const Instruction = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={style.instructionBlock}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} className={style.instructionButton}>
                Инструкция
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Как управлять заявками:
                </DialogTitle>
                <DialogContent className={style.instructionPopup}>
                    <Typography variant="body1" className={style.popupWrapper}>
                        <div className={style.instructionTitle_grid}>
                            Нажмите
                            <Icon component={SubdirectoryArrowLeftIcon} className={style.arrowIcon} />
                        </div>
                        <div className={style.buttonsBlock}>
                            <Icon component={LockOpenIcon} color="primary" />
                            <span className={style.action}>
                                чтобы открыть заявку
                            </span>
                        </div>
                        <div className={style.buttonsBlock}>
                            <Icon component={CheckIcon} color="primary" />
                            <span className={style.action}>
                                чтобы закрыть заявку
                            </span>
                        </div>
                        <div className={style.buttonsBlock}>
                            <Icon component={DeleteOutlineIcon} color="primary" />
                            <span className={style.action}>
                                чтобы переместить заявку в корзину
                            </span>
                        </div>
                        <div className={style.buttonsBlock}>
                            <Icon component={ClearIcon} color="secondary" />
                            <span className={style.action}>
                                чтобы безвозвратно удалить заявку
                            </span>
                        </div>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Понятно
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Instruction