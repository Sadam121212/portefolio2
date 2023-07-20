import React, { useState } from "react";
import "./ProjectPlanner.css";
import avatar from "../../images/avataaars.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ProjectPlanner = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const sendMail = (e) => {
    e.preventDefault();

    // Vérifier si tous les champs sont remplis
    if (name && mail && mobile && message) {
      const body = { name, mail, mobile, message };
      console.log(body);

      axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/mail`,
        data: body,
      });

      setName("");
      setMail("");
      setMobile("");
      setMessage("");

      setIsModalVisible(true); // Afficher la modale lorsque les champs sont correctement remplis
    } else {
      // Afficher un message d'erreur si tous les champs ne sont pas remplis
      alert(
        "Veuillez remplir tous les champs avant de soumettre le formulaire."
      );
    }
  };

  const closeModal = () => {
    setIsModalVisible(false); // Fermer la modale
  };

  return (
    <div>
      <form>
        <div className="avatarContainer">
          <img className="avatarContact" src={avatar} alt="Avatar" />
          <div className="separation"></div>
          <p className="avatarContain">
            Thanks for taking the time to reach out. How can I help you today?
          </p>
        </div>
        <div className="corps-formulaire">
          <div className="gauche">
            <div className="groupe">
              <label>Name</label>
              <div className="inputGroupe">
                <input
                  type="text"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FontAwesomeIcon icon={faUser} className="iconContact" />
              </div>
            </div>
            <div className="groupe">
              <label>Email</label>
              <div className="inputGroupe">
                <input
                  type="text"
                  autoComplete="off"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
                <FontAwesomeIcon icon={faEnvelope} className="iconContact" />
              </div>
            </div>
            <div className="groupe">
              <label>Mobile</label>
              <div className="inputGroupe">
                <input
                  type="text"
                  autoComplete="off"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                <FontAwesomeIcon icon={faMobile} className="iconContact" />
              </div>
            </div>
          </div>

          <div className="droite">
            <div className="groupe">
              <label>Message</label>
              <textarea
                placeholder="Enter here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="pied-formulaire" align="center">
          <button onClick={(e) => sendMail(e)}>Submit</button>
        </div>

        {/* Modale */}
        {isModalVisible && (
          <div className="modal">
            <div className="modal-content">
              <h2>Great! Your form is sent !</h2>
              <p>I got your message.</p>
              <p>I will contact you soon. 😃</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProjectPlanner;
