// Import dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import EntryTable from '../components/MoodTable';

function HomePage({ setEntryToEdit }) {
  const history = useHistory();
  const [entries, setEntries] = useState([]);

// RETRIEVE the list of moods
  const loadEntries = async () => {
    const response = await fetch('/entries');
    const data = await response.json();
    setEntries(data);
  }

// Update a mood
  const onEdit = entry => {
    setEntryToEdit(entry);
    history.push('/edit');
  };


// Delete a mood
  const onDelete = async _id => {

    // Make a DELETE request
    const response = await fetch(`/entries/${_id}`, {method: 'DELETE'});
    if (response.status === 204) {
      const getResponse = await fetch('/entries');
      const entries = await getResponse.json();
      setEntries(entries);
    } else {
      console.error(`Failed to delete mood with _id ${_id} with status \
        code = ${response.status}`)
    }
  };

  // LOAD the mood

  useEffect(()=>loadEntries(), []);

  return (
    <>

      <h2>Zen Summary</h2>

      <EntryTable
      entries={entries}
      onDelete={onDelete}
      onEdit={onEdit}/>
      <br/>
    </>
  );
};

export default HomePage;