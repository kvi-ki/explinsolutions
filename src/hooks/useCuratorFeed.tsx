import { useEffect, useState } from 'react';

interface Post {
  id: string;
  title: string;
  link: string;
  date: string;
  content: string;
  image?: string;
}

export function useCuratorFeed() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchFeed() {
      try {
        const res = await fetch(
          'https://api.curator.io/v1/feeds/curator-feed-default-feed-layout?apiKey=c478ba25-4bb3-4f96-a59c-794435240fd7'
        );
        const data = await res.json();
        setPosts(data.posts || []);
      } catch (err) {
        console.error('Failed to fetch Curator feed:', err);
      }
    }
    fetchFeed();
  }, []);

  return posts;
}
