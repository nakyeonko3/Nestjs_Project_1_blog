import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

const nordColors = {
  nord0: "#2E3440",
  nord1: "#3B4252",
  nord2: "#434C5E",
  nord3: "#4C566A",
  nord4: "#D8DEE9",
  nord5: "#E5E9F0",
  nord6: "#ECEFF4",
  nord7: "#8FBCBB",
  nord8: "#88C0D0",
  nord9: "#81A1C1",
  nord10: "#5E81AC",
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1
        style={{
          fontSize: "clamp(1.875rem, 5vw, 2.25rem)",
          fontWeight: "bold",
          color: nordColors.nord6,
          marginBottom: "1rem",
          borderBottom: `1px solid ${nordColors.nord3}`,
          paddingBottom: "0.5rem",
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          fontSize: "clamp(1.5rem, 4vw, 1.875rem)",
          fontWeight: "600",
          color: nordColors.nord4,
          marginTop: "1.5rem",
          marginBottom: "0.75rem",
        }}
      >
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p
        style={{
          color: nordColors.nord4,
          marginBottom: "1rem",
          lineHeight: "1.75",
          fontSize: "clamp(1rem, 2vw, 1.125rem)",
        }}
      >
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        style={{
          color: nordColors.nord8,
          textDecoration: "underline",
          // ":hover": { color: nordColors.nord7 },
        }}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul
        style={{
          listStyleType: "disc",
          listStylePosition: "inside",
          color: nordColors.nord4,
          marginBottom: "1rem",
          paddingLeft: "1rem",
        }}
      >
        {children}
      </ul>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: `4px solid ${nordColors.nord9}`,
          paddingLeft: "1rem",
          fontStyle: "italic",
          color: nordColors.nord5,
          margin: "1rem 0",
        }}
      >
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code
        style={{
          backgroundColor: nordColors.nord1,
          color: nordColors.nord4,
          borderRadius: "0.25rem",
          padding: "0.25rem 0.5rem",
          fontSize: "0.875em",
        }}
      >
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre
        style={{
          backgroundColor: nordColors.nord0,
          color: nordColors.nord4,
          borderRadius: "0.25rem",
          padding: "1rem",
          overflowX: "auto",
          margin: "1rem 0",
          fontSize: "0.875em",
        }}
      >
        {children}
      </pre>
    ),
    img: (props) => (
      <Image
        width={500}
        height={500}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "0.5rem",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          margin: "1rem 0",
        }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
