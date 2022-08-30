// import dependencies
import { MdDeleteForever, MdModeEdit } from 'react-icons/md'

function Entry({ entry, onDelete, onEdit }) {
  return (
    <tr>
      <td>{entry.mood}</td>
      <td>{entry.note}</td>
      <td>{entry.date.substring(0,10)}</td>
      <td><MdModeEdit className="icon" onClick={ () => onEdit(entry) }/></td>
      <td><MdDeleteForever className="icon" onClick={ () => onDelete(entry._id) }/></td>
    </tr>
  );
}

  export default Entry;