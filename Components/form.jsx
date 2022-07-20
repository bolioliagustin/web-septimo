import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Alert } from "react-bootstrap";

export default function form() {
  const [show, setShow] = useState(true);
  const [alert, setAlert] = useState(null);
  const [alertMenssage, setAlertMenssage] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_enw2jl3",
        "template_6vtg6ep",
        event.target,
        "1igrL_wbz2bSR624M"
      )
      .then((response) => {
        if (response) {
          console.log(response);
          setAlert(false);
          setAlertMenssage("Mensaje enviado, gracias por contactarnos!");
        }
      })
      .catch((error) => {
        if (error) {
          console.log(error);
          setAlert(true);
          setAlertMenssage("Error al enviar el mensaje, prueba en  un rato");
        }
      });
  };
  return (
    <div class="my-4 mt-2 mb-2">
      <h2 class="text-center mb-4">Contactanos</h2>
      <form className="form-contact" onSubmit={sendEmail}>
        <div class="form-outline form-white mb-4">
          <input
            type="name"
            name="user_name"
            class="form-control form-control-lg"
          />
          <label class="form-label">Nombre</label>
        </div>
        <div class="form-outline form-white mb-4">
          <input
            type="email"
            name="user_email"
            class="form-control form-control-lg"
          />
          <label class="form-label">Email</label>
        </div>
        <div class="form-outline form-white mb-4">
          <textarea
            class="form-control"
            name="user_message"
            rows="4"
          ></textarea>
          <label class="form-label">Comentario</label>
        </div>
        <div className="d-grid">
          <button type="enviar" class="btn btn_primary p-1" size="md">
            Enviar
          </button>
          <div className="alerta center pt-4">
          {alert === true && show === true ? (
            <Alert
              variant="danger"
              onClose={() => {
                setShow(true);
                setAlert(null);
                setAlertMenssage("");
              }}
              dismissible
            >
              {alertMenssage}
            </Alert>
          ) : alert === false && show === true ? (
            <Alert
              variant="success"
              onClose={() => {
                setShow(true);
                setAlert(null);
                setAlertMenssage("");
              }}
              dismissible
            >
              {alertMenssage}
            </Alert>
          ) : null}
          </div>
        </div>
      </form>
    </div>
  );
}
