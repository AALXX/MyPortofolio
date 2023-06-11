const Meta = ({ title, keywords, description }) => {
  return (
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <title>{title}</title>
    </head>
  );
};

Meta.defaultProps = {
  title: "Portofolio",
  keywords: "web development, programming",
  description: `S3RBVN's portofolio website `,
};

export default Meta;
