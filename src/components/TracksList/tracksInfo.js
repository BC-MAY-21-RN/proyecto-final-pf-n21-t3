import {Store} from '../../redux/Store';

export const dataLoadTrack = async (tracks) => {
  const newFormater = [];
  tracks?.map(({track}, index) => {
    newFormater.push(track);
  });
  
   return newFormater;
};
