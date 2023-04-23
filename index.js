const fs = require("fs");

const fileName = "1";
const urls = fs
  .readFileSync(`profiles/${fileName}.txt`, "utf-8")
  .split("\n")
  .filter(Boolean);

const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
const urlsetHeader =
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
const urlsetFooter = "\n</urlset>\n";

let sitemapXml = xmlHeader + urlsetHeader;

urls.map((url, index) => {
  sitemapXml += `${index === 0 ? "" : "\n"}\t<url>
    <loc>${url.trim()}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;
});

sitemapXml += urlsetFooter;

fs.writeFileSync(`profiles/${fileName}.xml`, sitemapXml, "utf-8");
