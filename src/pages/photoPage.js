const Photo = () => {
  return <h1>Photo</h1>;
};

export default Photo;
// import React from 'react';
// import ImageUploader from 'react-images-uploading';

// export default class Photo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { pictures: [] };
//     this.onDrop = this.onDrop.bind(this);
//   }

//   onDrop(pictureFiles, pictureDataURLs) {
//     this.setState({
//       pictures: pictureFiles,
//     });
//   }

//   render() {
//     return (
//       <ImageUploader
//         withIcon={true}
//         buttonText='Choose images'
//         onChange={this.onDrop}
//         imgExtension={['.jpg', '.gif', '.png', '.gif']}
//         maxFileSize={5242880}
//       />
//     );
//   }
// }

// another example of what I could do
// import { MDBFile } from 'mdb-react-ui-kit';

// export default function App() {
//   return (
//     <div>
//       <MDBFile label='Default file input example' id='customFile' />
//     </div>
//   );
// }
