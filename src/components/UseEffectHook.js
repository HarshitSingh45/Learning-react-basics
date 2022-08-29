import React, {useState, useEffect} from 'react'

function UseEffectHook() {
    const [userID, setUserID] = useState('1');
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts?userID={userID}`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
              console.log('DATA ','USER ', userID,data);
              setData(data);
          })
    }, [userID])
    useEffect(() => {
        document.addEventListener('mousemove', mouseMover);
        return () => {
            document.removeEventListener('mousemove', mouseMover);
        }
    })
    function mouseMover(e) {
        // console.log(e.clientX)
    }
  return (
    <div>
      <button onClick={() => setUserID('2')}>Next User</button>
      {data.map((user) => {
          return(
            <div>
                <p>{user.title}</p>
            </div>
          )
          
      })}
    </div>
  )
}

export default UseEffectHook;
