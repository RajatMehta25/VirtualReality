import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import Gallery, { imageTypes } from "react-vr-image-gallery";
export default class alpha extends React.Component {
  render() {
    return (
      <View>
        <Pano source={ asset("1.jpg.jpg")}/>
        <Text
          style={{
            // backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          Rajat Mehta
        </Text>
    
      </View>
    );
  }
};

AppRegistry.registerComponent('alpha', () => alpha);


// import React from 'react';
// import {
//   AppRegistry,
//   asset,
//   View,
// } from 'react-vr';
// import Gallery, { imageTypes } from "react-vr-image-gallery";
 
// export default class ImageGallery extends React.Component {
//   render() {
//     return (
//       <View>
//           <Gallery type={imageTypes.SQUARE} images={[
//               asset("sun.gif"),
//               asset("chess-world.jpg"),
//               asset("earth.jpg"),
//               asset("earth.jpg") 
//             ]
//           }/>
//       </View>
//     );
//   }
// };
// AppRegistry.registerComponent('ImageGallery', () => ImageGallery);