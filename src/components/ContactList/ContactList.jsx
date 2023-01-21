
import { Contact } from "./Contact/Contact";
import PropTypes from 'prop-types';

export const ContactList = ({contacts, deleteContact}) => {
  return <ul className="">
    <Contact contacts={contacts} onDelete={deleteContact} />
  </ul>
}


ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
}