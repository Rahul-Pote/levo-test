import React from 'react';
import { Container } from 'react-bootstrap';
import ArticleSection from './components/Articles/ArticleSection';

const RelatedArticle = {
  title: 'Related Articles',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
            lacus lacus. Mauris commodo eget leo vitae ullamcorper. Proin sed
            turpis mi. Nam viverra pharetra nibh ultricies rutrum. Integer
            vulputate tristique pellentesque.`,
  articles: [
    {
      id: 1,
      date: '2018-09-12T11:47:29.086+00:00',
      title: 'Love of learning, art keys to a great year for Gwen',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      url: '#',
    },
    {
      id: 2,
      date: '2018-09-28T11:47:29.086+00:00',
      title: 'Curious mind leads the way for carer Jill',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      url: '#',
    },
    {
      id: 3,
      date: '2018-09-12T11:47:29.086+00:00',
      title: 'Celebrating our volunteers',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
      url: '#',
    },
    {
      id: 4,
      date: '2018-09-12T11:47:29.086+00:00',
      title: 'Love of learning, art keys to a great year for Gwen',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      url: '#',
    },
    {
      id: 5,
      date: '2018-09-28T11:47:29.086+00:00',
      title: 'Curious mind leads the way for carer Jill',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      url: '#',
    },
    {
      id: 6,
      date: '2018-09-12T11:47:29.086+00:00',
      title: 'Celebrating our volunteers',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
      url: '#',
    },
    {
      id: 7,
      date: '2018-09-12T11:47:29.086+00:00',
      title: 'Love of learning, art keys to a great year for Gwen',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      url: '#',
    },
    {
      id: 8,
      date: '2018-09-28T11:47:29.086+00:00',
      title: 'Curious mind leads the way for carer Jill',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      url: '#',
    },
    {
      id: 9,
      date: '2018-09-12T11:47:29.086+00:00',
      title: 'Celebrating our volunteers',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
      url: '#',
    },
  ],
};

const App = () => (
  <div className="App">
    <Container className="mb-4">
      <ArticleSection {...RelatedArticle} />
    </Container>
  </div>
);

export default App;
