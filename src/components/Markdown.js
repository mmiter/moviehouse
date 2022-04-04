import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
// next
import NextLink from "next/link";
// @mui
import { styled } from "@mui/material/styles";
import { Link, Typography, Divider } from "@mui/material";
// components
import Image from "./Image";

const MarkdownStyle = styled("div")(({ theme }) => ({
    // List
    "& p": {
      padding: 5,
    },
    "& ul, & ol": {
      ...theme.typography.body1,
      paddingLeft: theme.spacing(5),
      "& li": {
        lineHeight: 2,
      },
    },

    // Blockquote
    "& blockquote": {
      lineHeight: 1.5,
      fontSize: "1.5em",
      margin: "40px auto",
      position: "relative",
      fontFamily: "Georgia, serif",
      padding: theme.spacing(3, 3, 3, 8),
      borderRadius: Number(theme.shape.borderRadius) * 2,
      backgroundColor: theme.palette.background.default,
      color: `${theme.palette.text.primary} !important`,
      [theme.breakpoints.up("md")]: {
        width: "80%",
      },
      "& p, & span": {
        marginBottom: "0 !important",
        fontSize: "inherit !important",
        fontFamily: "Georgia, serif !important",
        color: `${theme.palette.text.primary} !important`,
      },
      "&:before": {
        left: 16,
        top: -8,
        display: "block",
        fontSize: "3em",
        content: '"\\201C"',
        position: "absolute",
        color: theme.palette.text.disabled,
      },
    },
  }));

export default function Markdown({ ...other }) {
  return (
    <MarkdownStyle>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={components}
        {...other}
      />
    </MarkdownStyle>
  );
}

const components = {
  h1: ({ ...props }) => <Typography variant="h1" {...props} />,
  h2: ({ ...props }) => <Typography variant="h2" {...props} />,
  h3: ({ ...props }) => <Typography variant="h3" {...props} />,
  h4: ({ ...props }) => <Typography variant="h4" {...props} />,
  h5: ({ ...props }) => <Typography variant="h5" {...props} />,
  h6: ({ ...props }) => <Typography variant="h6" {...props} />,
  hr: ({ ...props }) => <Divider sx={{ my: 3 }} {...props} />,
  img: ({ ...props }) => (
    <Image
      alt={props.alt}
      ratio="16/9"
      sx={{ borderRadius: 2, my: 5 }}
      {...props}
    />
  ),
  a: ({ ...props }) =>
    props.href.includes("http") ? (
      <Link target="_blank" rel="noopener" {...props} />
    ) : (
      <NextLink href={props.href} passHref>
        <Link {...props}>{props.children}</Link>
      </NextLink>
    ),
};
