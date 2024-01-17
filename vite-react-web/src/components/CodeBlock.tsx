
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import "highlight.js/styles/atom-one-dark.css";


const CodeBlock = ({ markdown }: { markdown: string }) => {
  return (
    <Markdown rehypePlugins={[rehypeHighlight]}
    >{markdown}
    </Markdown>
  )
}

export default CodeBlock;