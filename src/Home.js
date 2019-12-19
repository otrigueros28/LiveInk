import React from 'react';
import  {Link} from 'react-router-dom'
const Home = ({imgs}) => {

  return (
    <div>
      <h2> Select Your design</h2>
      <div>
       <Link to = '/frame'><img src="/img/cross.png" id ='options' /></Link>
       <Link to = '/frame'><img src="/img/geo.png" id ='options'/></Link>
       <Link to = '/frame'><img src="/img/globe.png" id ='options'/></Link>
       <Link to = '/frame'><img src="/img/rose.png" id ='options'/></Link>
       <Link to = '/frame'><img src="/img/tiger.png" id ='options'/></Link>
      </div>

      <form action="upload.php" method="post" enctype="multipart/form-data">
        Select image to upload(PNG):
        <input type="file" name="fileToUpload" id="fileToUpload" />
        <input type="submit" value="Upload Image" name="submit" />
      </form>
   </div>
  )
};


export default Home;
