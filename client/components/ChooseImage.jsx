import React, { Component } from 'react';
import { Carousel, Image, Box } from 'grommet';

export default class extends Component {
  state = {}

  render() {
    return (
      <Box height="small" width="medium" overflow="hidden">
        <Carousel fill>
          <Image src='../server/public/avatar.images/gee_me_001.svg' />
          <Image src='../server/public/avatar.images/gee_me_002.svg' />
          <Image src='../server/public/avatar.images/gee_me_003.svg' />
        </Carousel>
      </Box>
    );
  }
}












// import React from 'react';
// import ImageUploader from 'react-images-upload';

// class ImageUpload extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { pictures: [] };
//     this.onDrop = this.onDrop.bind(this);
//   }

//   onDrop(picture) {
//     this.setState({
//       pictures: this.state.pictures.concat(picture),
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

// export default ImageUpload