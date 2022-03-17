export const format = (track, imageAlbum) => ({
  album: {
    name: track.name,
    images: [
      {
        url: track.image ? track.image : imageAlbum,
      },
    ],
    id: track.id,
  },
  artists: [
    {
      name: track.artists[0].name,
    },
  ],
  name: track.name,
  preview_url: track.preview_url
    ? track.preview_url
    : 'https://p.scdn.co/mp3-preview/a270730db8c094877900b167a41d186ce6755d0a?cid=5914e5016a704b0c84b27239cfee6242',
});
