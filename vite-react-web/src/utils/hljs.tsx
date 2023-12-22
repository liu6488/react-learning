import hljs from 'highlight.js/lib/core';
// 导入需要的语言高亮
import javascript from 'highlight.js/lib/languages/javascript';
// import csharp from 'highlight.js/lib/languages/csharp';
// import php from 'highlight.js/lib/languages/php';
// import python from 'highlight.js/lib/languages/python';
// import objectivec from 'highlight.js/lib/languages/objectivec';
// import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('javascript', javascript);

export default hljs;
