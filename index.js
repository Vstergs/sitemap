const fs = require("fs");

const fileName = "3";
const urls = fs
  .readFileSync(`profiles/${fileName}.txt`, "utf-8")
  .split("\n")
  .filter(Boolean);

const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
const urlsetHeader =
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
const urlsetFooter = "</urlset>\n";

let sitemapXml = xmlHeader + urlsetHeader;

urls.forEach((url) => {
  sitemapXml += `<url><loc>${url.trim()}</loc></url>\n`;
});

sitemapXml += urlsetFooter;

fs.writeFileSync(`profiles/${fileName}.xml`, sitemapXml, "utf-8");
