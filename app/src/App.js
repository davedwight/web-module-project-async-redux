import React , { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchStart, fetchSuccess, fetchFail, getDog } from './actions/';

const initialValue = {
  id: 1,
  image: "https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg"
};

function App(props) {

  const { image, isFetching, error } = props;

  useEffect(() => {
    props.dispatch(getDog());
  }, [])

  const handleClick = () => {
    props.dispatch(getDog());
  }

  if (error) {
    return <h2>There was an error: {error}</h2>
  }

  if (isFetching) {
    return <h2>Fetching a dog...</h2>
  }

  return (
    <div className="App">
      <div>
        <button onClick={handleClick}>Get new image</button>
        <div></div>
        <img src={image} alt="dog"/>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    image: state.image,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps)(App);
