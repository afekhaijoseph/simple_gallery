import Images from './components/Images'
import {Provider} from './components/Context'
function App() {
  return (
    <Provider>
      <div className="drop-back"></div>
      <div className="App">
         <h2>Gallery App</h2>
         <Images/>
    </div>
    </Provider>
  );
}

export default App;
