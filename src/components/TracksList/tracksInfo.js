import {Store} from '../../redux/Store';

export const dataLoadTrack = async (tracks) => {

  const newFormater = [];
  
  if(tracks[0].track){
    tracks?.map(({track}) => {
      newFormater.push(track);
    });
  }else{
    console.log('else')
    
    tracks?.map(track => {
      // console.log(track)
      newFormater.push({
          album:{
            name: track.name,
            images:[{
              url: "https://frasesdeinspiracion10.com/wp-content/uploads/2019/10/imagenes-de-amor-2336.jpg"
            }]
          },
          artists: [{
            name: track.artists[0].name,
          }]  
        
      });3
    });

  }
  return newFormater;
};
