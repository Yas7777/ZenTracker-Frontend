// Import dependencies
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function EditEntryPage({ entryToEdit }) {

  const history = useHistory();

  const [mood, setMood] = useState(entryToEdit.mood);
  const [note, setNote] = useState(entryToEdit.note);
  const [date, setDate] = useState(entryToEdit.date);

  const editEntry = async () => {
    const response = await fetch(`/entries/${entryToEdit._id}`, {
      method: 'PUT',
      body: JSON.stringify({
        mood: mood,
        note: note,
        date: date
    }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      history.push('/');
      alert("Entry has been edited!");
    } else {
      history.push('/');
      alert(`Failed to edit entry, status code = ${response.status}`);
    }
    // history.push('/');
  }

  return (
    <>
    <article>
      <h2>Edit your Gains</h2>
      <p>Did Your Overinflate Your Gains? Fix it here</p>

        <fieldset>

          <label htmlFor="mood">Mood</label>
          <select id="mood"
              // value={mood}
                  onChange={e => setMood(e.target.value)}
                  required="required"
          >
            <option value="Like A Superstar">Like A Superstar</option>
            <option value="Good">Good</option>
            <option value="Meh">Meh</option>
            <option value="Bite Me">Bite Me</option>

          </select>

          <label htmlFor="note">Mood Note</label>
          <input id="note"
            type="text"
            placeholder="Type Away"
            value={note}
            onChange={e => setNote(e.target.value)}
            required
          /> <br/>

          <label htmlFor="date">Date</label>
          <input id="date"
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
          /> <br/>


          <button onClick={editEntry}> Save </button>

        </fieldset>
        </article>
        </>
  )

};

export default EditEntryPage;