const linkResolver = (doc) => {
  // URL for a category type
  if (doc.type === "blog_post") {
    return `/blog/${doc.uid}`;
  }

  // Backup for all other types
  return "/";
};

module.exports = linkResolver;
