import fs from 'fs';
import { fileURLToPath, URL } from 'node:url';
import { getHighlighter } from 'shiki';
import { resolve } from 'path';

import type MarkdownIt from 'markdown-it'

const _dirname = fileURLToPath(new URL('.', import.meta.url));
const demoCompPath = resolve(_dirname, '../demo.vue');

const _genHighlighter = async () => {
  const res = await getHighlighter({
    langs: ['javascript', 'typescript', 'json', 'html', 'css', 'vue'],
    themes: ['github-dark']
  })
  return res.codeToHtml
}

const highlighter = await _genHighlighter();

const _getRelativePath = (path1 = '', path2 = '') => {
  const path1Arr = path1.split(/\\|\//g);
  const path2Arr = path2.split(/\\|\//g);
  const path1ArrLen = path1Arr.length;

  let relativePath = '';
  for (let i = 0; i < path1ArrLen; i++) {
    if (path2Arr[i] !== path1Arr[i]) {
      if (path1ArrLen - i > 1) {
        relativePath += new Array(path1ArrLen - i).join('../');
      }
      else {
        relativePath = './';
      }
      relativePath += path2Arr.splice(i).join('/');
      break;
    }
  }

  return '../' + relativePath;
}

const _getDemoLabel = (demo = '', attr?: any) => {
  const reg = attr ? new RegExp(`<demo[^>]+${attr}=['"]([^'"]+)['"]`) : /<demo[\s\S]*?>([\s\S]*?)(<\/demo>|\/>)$/;
  const match = demo.match(reg);
  if (match && match.length >= 1) {
    return match[1] || "";
  }
  return "";
}

export default (md: MarkdownIt) => {
  const { render } = md;
  md.render = (...args) => {
    const docPath = args[1].path;
    let result = render.call(md, ...args);
    const demoReg = /<demo([\s\S]*?)(<\/demo>|\/>)/;
    const demoReg_g = new RegExp(demoReg, 'g');
    const demoLabels = result.match(demoReg_g);

    demoLabels?.forEach((demo: string) => {
      let codeStr = "";
      let htmlStr = "";
      let descStr = "";

      const slot = _getDemoLabel(demo)
      const demoSrc = _getDemoLabel(demo, 'src');
      const demoDesc = _getDemoLabel(demo, 'desc');
      const demoLang = _getDemoLabel(demo, 'lang') || 'vue';
      const demoPath = resolve(docPath, '../../../examples', demoSrc);
      console.log(demoPath)

      let demoRelativePath = "";
      const existSrc = demoSrc && fs.existsSync(demoPath);
      if (slot?.trim()) {
        codeStr = slot;
      }
      else if (existSrc) {
        codeStr = fs.readFileSync(demoPath).toString();
        demoRelativePath = _getRelativePath(demoCompPath, demoPath);
      }
      else {
        codeStr = "src文件不存在";
      }

      htmlStr = highlighter(codeStr, { lang: demoLang, theme: 'github-dark'});
      descStr = md.renderInline(demoDesc) || "";
      let demoStr = demo.replace('>', ` codeStr="${encodeURIComponent(codeStr)}" htmlStr="${encodeURIComponent(htmlStr)}" description="${encodeURIComponent(descStr)}" codePath="${demoRelativePath}">`);
      result = result.replace(demo, demoStr);
    });

    return result
  }
}
