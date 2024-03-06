import React, { useRef } from "react";
import styles from "./CodeBlock.module.css";

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  const codeRef = useRef<HTMLElement>(null);

  const copyCode = () => {
    const code = codeRef.current?.innerText || "";
    navigator.clipboard.writeText(code);
  };

  return (
    <div className={styles.codeBlock}>
      <button className={styles.copyButton} onClick={copyCode}>
        Copy
      </button>
      <pre>
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
