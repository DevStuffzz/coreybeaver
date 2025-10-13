import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

export default function LatestVideo() {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=UCQajkJU5fIB3Kubcwsr6fgw'
    )
      .then((res) => res.json())
      .then((data) => {
        const latestVideo = data.items[0];
        const id = latestVideo.link.split('v=')[1];
        setVideoId(id);
      });
  }, []);

  if (!videoId) return <div className="text-center py-4">Loading latest video...</div>;

  return (
    <div className="flex justify-center px-4 py-4">
      <div className="w-full max-w-3xl aspect-video">
        <YouTube
          videoId={videoId}
          className="w-full h-full"
          opts={{
            width: '100%',
            height: '100%',
            playerVars: {
              autoplay: 0,
            },
          }}
        />
      </div>
    </div>
  );
}
