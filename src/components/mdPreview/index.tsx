import * as React from 'react';

import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import less from 'highlight.js/lib/languages/less';
import xml from 'highlight.js/lib/languages/xml';
// import 'highlight.js/styles/googlecode.css';
// import 'highlight.js/styles/darcula.css';
// import 'highlight.js/styles/github.css';
import 'highlight.js/styles/atom-one-dark.css';
import styles from './md-preview.scss';

import marked from 'marked';

interface Props {
  isDetail?: boolean,
  isEdit?: boolean,
  mdtext: string
}
interface State {
  previewVisible: boolean
}

// 使用marked.js+highlight.js的编辑器
export default class MdPreview extends React.Component<Props, State> {
  public readonly state:State = {
    previewVisible: false
  };
  constructor(props: Props) {
    super(props);
    this.markedInit();
  }

  // marked初始化
  public markedInit = () => {
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('less', less);
    hljs.registerLanguage('xml', xml);
    // Set options
    // `highlight` example uses `highlight.js`
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: (code: string) => {
        return hljs.highlightAuto(code).value;
      },
      langPrefix: '',
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
  };

  // 显示、关闭预览
  public previewHandler = () => {
    this.setState({
      previewVisible: !this.state.previewVisible
    });
  };

  public render() {
    // props.isEdit：是否编辑
    // prop.isDetail：是否浏览详情
    return (
      <div
        className={`${styles['md-container']} ${
          this.props.isEdit ? styles['md-preview'] : styles['md-detail']
        }`}
      >
        {(this.props.isDetail || this.state.previewVisible) && (
          <section
            data-text="注意：导出图片的效果可能会有出入！"
            className={styles['md-content']}
            id="md-content"
            dangerouslySetInnerHTML={{
              __html: marked(this.props.mdtext)
            }}
          />
        )}
        {this.props.isEdit && (
          <button
            className={`btn ${styles['handle-btn']}`}
            onClick={this.previewHandler}
          >
            {this.state.previewVisible ? '关闭预览' : '显示预览'}
          </button>
        )}
      </div>
    );
  }
}
