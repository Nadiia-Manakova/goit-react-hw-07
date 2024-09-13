import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectVisibleContacts } from "../../redux/selectors";

import css from "./ContactList.module.css";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            // data={contact}
            // name={contact.name}
            // number={contact.number}
            // onClick={() => handleDelete(contact.id)}
            data={contact}
          />
        </li>
      ))}
    </ul>
  );
}
