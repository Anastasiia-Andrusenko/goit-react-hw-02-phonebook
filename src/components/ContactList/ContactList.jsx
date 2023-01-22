
import { Contact } from "./Contact/Contact";
import PropTypes from 'prop-types';


export const ContactList = ({contacts, deleteContact}) => {
  return <ul className="">
    {contacts.map((contact => <Contact key={contact.id}  contact={contact} onDelete={deleteContact} />))}
    
  </ul>
}


ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
}

