
import hljs from '../utils/hljs';



const CodeBlock = (code: any) => {
  console.log(code);

  const highlightedCode = hljs.highlight(
    code,
    { language: 'javascript' }
  ).code
  return (
    <>
      <pre>
        <code id={'javascript'}  >
          {highlightedCode}
        </code>
      </pre>
    </>
  )
}

export default CodeBlock;