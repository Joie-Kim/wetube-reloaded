export const trending = (req, res) => {
  const videos = [
    {
      title: 'First Video',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 59,
      id: 1,
    },
    {
      title: 'Second Video',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 59,
      id: 2,
    },
    {
      title: 'Third Video',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 59,
      id: 3,
    },
  ];
  return res.render('home', { pageTitle: 'Home', videos }); // Variable object sent pug
};
export const search = (req, res) => res.send('search video');
export const upload = (req, res) => res.send('upload videos');
export const see = (req, res) => res.render('watch', { pageTitle: 'Watch' });
export const edit = (req, res) => res.render('edit', { pageTitle: 'Edit' });
export const remove = (req, res) => res.send('remove video');
