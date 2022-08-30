// import dependencies
import Entry from './Mood.js'

function EntryTable({ entries, onDelete, onEdit }) {
  return (
    <table>
      <thead>
        <tr>
            <th> Today's mood </th>
            <th> Your Feelings </th>
            <th> Date </th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, i) => <Entry
        entry={entry}
        onDelete={onDelete}
        onEdit={onEdit}
        key={i}/> )}
      </tbody>
    </table>
  );
}


export default EntryTable;