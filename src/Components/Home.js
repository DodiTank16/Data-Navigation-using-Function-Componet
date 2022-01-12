import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Home() {
  let initialState = '';
  const [data, setData] = useState(initialState);
  const [count, setCount] = useState(0);
  // console.log(data)

  const location = useLocation();
  location.state = data;
  const { from } = location.state;

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  const handleChange = (e) => {
    // console.log(e);
    setData(e.target.value);
  };


  const homeStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80")`,
    height: '90vh',
    marginTop: '-26.5px',
    fontSize: '20px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const h2font = {
    color: '#FF5733',
  };

  return (
    <div style={homeStyle}>
      <h1>
        <u>This is the Home Page</u>
      </h1>
      <h2 style={h2font}>It is also known as the first page of the website.</h2>
      <input
        type="text"
        name="TextBox"
        className="textBox"
        onChange={handleChange}
      />
      <Link className="btn" to={'/contact'} state={{ from: data , count1: count}}>
        Contact Us
      </Link>
      <button className='subBtn' onClick={() => setCount(count + 1)}>Increment title count</button>
    </div>
  );
}
export default Home;
