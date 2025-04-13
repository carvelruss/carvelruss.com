const apiKey = "#";
const urlToTest = "https://codefrites.com";

const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
  urlToTest
)}&key=${apiKey}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const performanceScore =
      data.lighthouseResult.categories.performance.score * 100 || 0;
    const accessibilityScore =
      data.lighthouseResult.categories.accessibility.score * 100 || 0;
    const bestPracticesScore =
      data.lighthouseResult.categories["best-practices"].score * 100 || 0;
    const seoScore = data.lighthouseResult.categories.seo.score * 100 || 0;

    document.getElementById(
      "performance"
    ).innerHTML = `<p>Performance: ${performanceScore}</p>`;
    document.getElementById(
      "accessibility"
    ).innerHTML = `<p>Accessibility: ${accessibilityScore}</p>`;
    document.getElementById(
      "bestPractices"
    ).innerHTML = `<p>Best Practices: ${bestPracticesScore}</p>`;
    document.getElementById("seo").innerHTML = `<p>SEO: ${seoScore}</p>`;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    document.getElementById("pageSpeedInsights").innerHTML =
      "<p>Error fetching PageSpeed Insights data</p>";
  });
