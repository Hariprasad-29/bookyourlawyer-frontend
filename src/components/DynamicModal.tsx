import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Typography, TextField, Button } from "@material-ui/core";
import CreditCardInput from "react-credit-card-input";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(10, 10, 10),
      alignContent: "center",
      display: "flex",
      flexDirection: "column",
    },
  })
);

interface Props {
  open: boolean;
  amount?: number;
  modalOpen: () => void;
  modalClose: () => void;
}

export default function TransitionsModal(props: Props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [cardNumber, setCardNumber] = React.useState();
  const [expiry, setExpiry] = React.useState();
  const [cvc, setCvc] = React.useState();

  const { enqueueSnackbar } = useSnackbar();

  const handleOpen = () => {
    props.modalOpen();
  };

  const handleClose = () => {
    props.modalClose();
  };

  const onPay = () => {
    handleClose();
    enqueueSnackbar("Payment Successful!", {
        variant: "success",
    })
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <div>
              <TextField
                style={{
                  marginBottom: 30,
                  marginLeft: 40,
                }}
                id="outlined-basic"
                label="Name on Card"
                variant="outlined"
              />
            </div>
            <div>
              <CreditCardInput
                cardNumberInputProps={{
                  value: cardNumber,
                  onChange: (e: any) => setCardNumber(e.target.value),
                }}
                cardExpiryInputProps={{
                  value: expiry,
                  onChange: (e: any) => setExpiry(e.target.value),
                }}
                cardCVCInputProps={{
                  value: cvc,
                  onChange: (e: any) => setCvc(e.target.value),
                }}
                fieldClassName="input"
              />
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                style={{
                  marginTop: 40,
                  marginLeft: 130,
                }}
                onClick={onPay}
              >
                pay ${props.amount}
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
