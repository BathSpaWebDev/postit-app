import logo from './logo.svg';
import './App.css';
import {data} from './data/post-its';
import PostIt from './components/post-it';
import DisplayDate from './components/displayDate';
import Button from './components/button';

function App() {

  return (
    <div className="App">
        <h1>Post it notes</h1>
        <Button rounded={false} buttonText="Hide post its" />

        <div className="container">
          {
            data.map((item, i)=>{
              return (
                <PostIt title={item.title} message={item.message} colour={item.colour} />
              )
            })
          }
          <DisplayDate />
        </div>
       

    </div>
  );
}

export default App;

// create an ImageDisplay component
// accepts the following props: imgSource, captionText, and hasBorder
// should output an image with the path to the image from the imgSource prop, and the a caption below it. If hasBorder is set to true, it should add a border (you can either add a class or directly change the style attribute)
// Use it in the app js component
