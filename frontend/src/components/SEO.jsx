import { useEffect } from "react";

/**
 * SEO Component to dynamically update document title and meta description.
 * @param {Object} props
 * @param {string} props.title - The title for the current page.
 * @param {string} props.description - The meta description for the current page.
 */
const SEO = ({ title, description }) => {
  useEffect(() => {
    // Update Document Title
    const baseTitle = "Ilena Interior Studio";
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }

    // Update OG Title if exists
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) {
      ogTitle.setAttribute("content", `${title} | ${baseTitle}`);
    }
  }, [title, description]);

  return null;
};

export default SEO;
