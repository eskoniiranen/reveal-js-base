import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm';

const deck = new Reveal({
  controls: true,
  controlsTutorial: false,
  progress: true,
  center: true,
  hash: true,
  plugins: [ Markdown, Highlight ]
});

deck.initialize();
