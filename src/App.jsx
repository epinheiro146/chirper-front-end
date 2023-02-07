import React, { useState } from 'react';
//import Chirp from './components/Chirp';

const App = () => {

    const [id, setId] = useState(4);

    const [username, setUsername] = useState('');

    const [message, setMessage] = useState('');

    const [timeline, setTimeline] = useState([
        {
            id: 1,
            username: '@dingusdongus',
            message: '@LadiesMan217 is a sussy baka'
        },
        {
            id: 2,
            username: '@LadiesMan217',
            message: '@dingusdongus imagine unironically saying that in current year'
        },
        {
            id: 3,
            username: '@majima_everywhere',
            message: '@LadiesMan217 @dingusdongus grab the popcorn, bois'
        }
    ]);

    const handleNewChirp = (e) => {
        e.preventDefault();
        setTimeline([
            ...timeline, { id: id, username: username, message: message }
        ]);
        setId(id + 1);
        setUsername('');
        setMessage('');
    }

    return (
        <>
            <h1>Your Timeline</h1>
            <div>
                {timeline.map(val => {
                    return (
                        <div key={`chirp-card-${val.id}`}>
                            <h5>{val.username}</h5>
                            <p>{val.message}</p>
                        </div>
                    );
                })}
            </div>
            <form>
                <input value={username} onChange={e => setUsername(e.target.value)} />
                <input value={message} onChange={e => setMessage(e.target.value)} />
                <button onClick={(e) => { handleNewChirp(e) }}>Chirp!</button>
            </form>
        </>
    );
};

export default App;