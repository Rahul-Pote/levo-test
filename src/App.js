import React from 'react';
import { Button, Container } from 'react-bootstrap';

import Section from './components/Section';

const RelatedArticle = {
  title: 'Related Articles',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
            lacus lacus. Mauris commodo eget leo vitae ullamcorper. Proin sed
            turpis mi. Nam viverra pharetra nibh ultricies rutrum. Integer
            vulputate tristique pellentesque. Etiam viverra dolor nec.`,
};

const App = () => (
  <div className="App">
    <Container>
      <Section>
        <Section.Head
          title={RelatedArticle.title}
          description={RelatedArticle.description}
        />
        <Section.Body>this is body</Section.Body>
        <Section.Footer>
          <Button variant="primary">Primary</Button>
        </Section.Footer>
      </Section>
    </Container>
  </div>
);

export default App;
