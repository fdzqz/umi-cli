import styles from './index.less';
import { useState } from 'react';

interface IndexPageProps {}

const IndexPage: React.FC<IndexPageProps> = () => {
  const [content, setContent] = useState<number>(1);
  return (
    <div>
      <h1 className={styles.title}>{content?.toString()}</h1>
      <span onClick={() => setContent(content + 1)}>+1</span>
    </div>
  );
};

export default IndexPage;
