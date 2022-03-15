//este archivo es una Idea para la busqueda 
//https://www.youtube.com/watch?v=Bk90lT6ne3g&t=612s
import spotify_search from "./spotify_search";

const PAGE = 20;

class MusicSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      offset: 0,
      query: '',
      isFetching: false,
      isEmpty: false,
      spotify_token: null,
      isTokenFetching: false,
    };
  }

  async componentDidMount(){
      await this.refreshToken();
      await this.loadNextPage();
  }

  async componentWillMount(){
      this.refreshToken();
      this.loadNextPage();
  }

  handleSearchChange(text) {
    //reset state
    this.setState(
      {
        isEmpty: false,
        query: text,
        songs: [],
      },
      () => {
        this.loadNextPage();
      },
    );
  }
  
  async loadNextPage(){
     const{
         songs,
         offset,
         query,
         spotify_token,
         isFetching,
         isEmpty
     } = this.state

     if(isFetching || isEmpty){
         return;
     }

     this.setState({isFetching: true})
      
     const newSongs = await spotify_search({
         offset: offset,
         limit: PAGE,
         q: query,
         spotify_token
     });

     if(newSongs.length === 0){
         console.log('no songs found, there may be an error');
         this.state({ isEmpty: true});
     }

     this.setState({
         isFetching: false,
         songs: [...songs, ...newSongs],
         offset: offset + PAGE
     });
 }
  
}