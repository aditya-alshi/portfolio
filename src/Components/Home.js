export default function Home() {
  return (
    <div className="all--projects">
      <h1>Projects</h1>
      <a
        className="ject--link--spnb"
        href="https://jectcommunitybank.onrender.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="project-thumbnails"
          src="jecthome.jpg"
          alt="project-thumbnail"
        />
      </a>
      <a
        href="https://shop-whop.netlify.app/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="project-thumbnails"
          src="ShopWhop.jpg"
          alt="project-thumbnail"
        />
      </a>
    </div>
  );
}
