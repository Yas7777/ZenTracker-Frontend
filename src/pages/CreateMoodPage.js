// Import dependencies
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddEntryPage() {

  const history = useHistory();
  const [mood, setMood] = useState('Like A Superstar');
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');


  const addEntry = async () => {
    const newEntry = {mood,note,date};

    const response = await fetch('/entries', {
      method: 'POST',
      body: JSON.stringify(newEntry),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 201) {
      alert("That's a good rant, hope you feeling refreshed!");
    } else {
      alert(`Entry not added, status code = ${response.status}`);
    }
    // Return to home page
    history.push('/');
  }

  return (
    <>
    <article>
    <h2>Add your Gains</h2>

        <fieldset>
            <label htmlFor="mood">Mood</label>
            <select id="mood"
                // value={unit}
                    onChange={e => setMood(e.target.value)}
                    required="required"
            >
                <option value="Like A Superstar">Like A Superstar</option>
                <option value="Good">Good</option>
                <option value="Meh">Meh</option>
                <option value="Bite Me">Bite Me</option>
            </select>

          <label htmlFor="note">Type your Feelings</label>
          <input id="note"
            type="text"
            placeholder="Grow up here"
            value={note}
            onChange={e => setNote(e.target.value)}
            required
          /> <br/>

          <label htmlFor="date">Date</label>
          <input id="date"
            type="date"
            placeholder="mm-dd-yyyy"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
          /> <br/>

            <button onClick={addEntry}> Add </button>
        </fieldset>
        </article>
        </>
  );

};

export default AddEntryPage;