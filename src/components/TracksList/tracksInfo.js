import {Store} from '../../redux/Store';

export const dataLoadTrack = async (tracks) => {

  const newFormater = [];
  
  if(tracks[0].track){
    tracks?.map(({track}) => {
      newFormater.push(track);
    });
  }else{
    
    // console.log(tracks)
    tracks?.map(track => {
      // console.log(track.name)
      newFormater.push({
          album:{            
            name: track.name,
            images:[{
              url: track.image ? track.image : "https://frasesdeinspiracion10.com/wp-content/uploads/2019/10/imagenes-de-amor-2336.jpg"
            }],
            id: track.id
          },
          artists: [{
            name: track.artists[0].name,
          }],  
          name: track.name,
          preview_url: track.preview_url
          
      });
    });

  }
  console.log(newFormater)
  return newFormater;
};
