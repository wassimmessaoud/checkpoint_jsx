import myImage from "./barca2.jpg"
import './App.css';

function App() {
  return (
    <div>
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
       <h1 className="title red">Fc Barcelona</h1>
      <>
      <img src={myImage}/>
      </>
      <>
      <img src="/barca1.jpg"/>
      </>
      </div>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4"/>
      </video>
      </div>
  );
}

export default App;
