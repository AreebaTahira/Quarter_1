


interface Album {
    artist: string;
    title: string;
    tracks?: number; 
  }
  

  function make_album(artist: string, title: string, tracks?: number): Album {

    let album: Album = { artist, title };
  
    if (tracks) {
      
      album.tracks = tracks;
    }
  
    return album;
  }
  
  
  let album1: Album = make_album("Taylor Swift", "Red");
  let album2: Album = make_album("Ed Sheeran", "Divide", 16);
  let album3: Album = make_album("Adele", "25");
  

  console.log(album1);
  console.log(album2);
  console.log(album3);
  