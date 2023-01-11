import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export interface SimpleDialogProps {
    open: boolean;
    onClose: (value: string) => void;
    title: string;
    content: string;
    onConfirm: (element: any) => void;
    element: any;
}

export const DeleteDialog = (props: SimpleDialogProps) => {
    const { open, onClose, title, content, onConfirm, element } = props;

    const handleClose = () => {
        onClose("Cancel");
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Annuler
                </Button>
                <Button onClick={() => onConfirm(element)} color="primary">
                    Supprimer
                </Button>
            </DialogActions>
        </Dialog>
    )
}