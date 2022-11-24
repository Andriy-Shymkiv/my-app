import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [first, setCountFirst] = useState(0)
  const [second, setCountSecond] = useState(0)
  document.body.classList.add('body');

  return (
    <div className="App">
      <div className="Game">
        <h2>first player score is <h1>{first}</h1></h2>

        <button
          className='button'
          type="button"
          onClick={() => setCountFirst(current => current + 1)}
        >
          plus
        </button>
      </div>
      <div className="Game">
        <h2>second player score is <h1>{second}</h1></h2>

        <button
          className='button'
          type="button"
          onClick={() => setCountSecond(current => current + 1)}
        >
          plus
        </button>
      </div>
      <div className="Game">
        <h2>minus 10 for all</h2>

        <button
          className='button'
          type="button"
          onClick={() => {
            setCountFirst(current => current - 10)
            setCountSecond(current => current - 10)
          }}
        >
          minus
        </button>
      </div>

      {first !== 0 || second !== 0
        ? (
          <div className="Game">
            <h2>reset all</h2>

            <button
              className='button'
              type="button"
              onClick={() => {
                setCountFirst(current => current = 0)
                setCountSecond(current => current = 0)
              }}
            >
              reset
            </button>
          </div>
        )
        : null}
    </div >
  );
}

export default App;
