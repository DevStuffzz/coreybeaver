import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '0k2ejdie', // replace with your Sanity project ID
  dataset: 'products',        // or whatever dataset you named
  useCdn: true,                 // `false` if you want freshest data
  apiVersion: '2025-10-01',     // use today's date
});
