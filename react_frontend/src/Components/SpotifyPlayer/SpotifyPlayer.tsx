import * as React from 'react';
function SpotifyPlayer() {
    return ( 
        <iframe 
        src="https://open.spotify.com/embed/album/2K91FtkITbVaU4aBgsfzxr?utm_source=generator" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
        </iframe>
     );
}

export default SpotifyPlayer;