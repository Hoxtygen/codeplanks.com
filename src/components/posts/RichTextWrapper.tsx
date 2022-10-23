import React, { Fragment, useEffect } from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Link from "next/link";
import Image from "next/image";
import { RichContextProps } from "../../typedefs";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export default function RichTextWrapper({ content }: RichContextProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <RichText
        content={content.raw}
        renderers={{
          a: ({ children, openInNewTab, href, ...rest }) => {
            if (href?.match(/^https?:\/\/|^\/\//i)) {
              return (
                <a
                  href={href}
                  target={openInNewTab ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  {...rest}
                  className="underline decoration-solid decoration-sky-500 hover:decoration-blue-400"
                >
                  {children}
                </a>
              );
            }
            return (
              <Link href={href as string}>
                <a data-testid="blog-link" {...rest}>
                  {children}{" "}
                </a>
              </Link>
            );
          },
          h1: ({ children }) => <h1 className="text-white">{children}</h1>,
          h2: ({ children }) => (
            <h2 className="text-xl font-semibold mb-4">{children}</h2>
          ),
          h3: ({ children }) => <h3>{children}</h3>,
          h4: ({ children }) => <h4>{children}</h4>,
          h5: ({ children }) => <h5>{children}</h5>,
          h6: ({ children }) => <h6>{children}</h6>,
          italic: ({ children }) => <i>{children} </i>,
          p: ({ children }) => (
            <p data-testid="paragraph" className="mb-8">
              {children}
            </p>
          ),
          bold: ({ children }) => <strong>{children}</strong>,
          ul: ({ children }) => (
            <ul aria-label="unordered list" className="list-disc list-inside">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol
              aria-label="ordered list"
              data-testid="ordered list"
              className="list-decimal list-inside"
            >
              {children}
            </ol>
          ),
          li: ({ children }) => <li aria-label="list item"> {children}</li>,
          underline: ({ children }) => <u>{children} </u>,
          code_block: ({ children }) => {
            return (
              <pre
                className="line-numbers language-none"
                data-testid="code-block"
              >
                <code className="language-javascript">{children}</code>
              </pre>
            );
          },
          code: ({ children }) => (
            <code className="language-javascript">{children}</code>
          ),
          table: ({ children }) => (
            <table data-testid="table">{children} </table>
          ),
          table_head: ({ children }) => <thead>{children} </thead>,
          table_body: ({ children }) => <tbody> {children}</tbody>,
          table_row: ({ children }) => <tr> {children}</tr>,
          list_item_child: ({ children }) => <Fragment> {children}</Fragment>,
          blockquote: ({ children }) => (
            <figure data-testid="quote">
              <blockquote>
                <p className="text-lg font-medium">{children}</p>
              </blockquote>
            </figure>
          ),
          img: ({ src, altText, height, width }) => (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src={src as string}
                alt={altText}
                height={height}
                width={width}
                objectFit="cover"
              />
            </div>
          ),
        }}
      />
    </div>
  );
}
