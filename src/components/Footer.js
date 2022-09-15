import githubLogo from '../icons/github.svg';

export default function Footer() {
  return (
    <div className="Footer">
      <p>Website made by @t3t3c for Odin Project</p>
      <a href="https://github.com/t3t3c">
        <img src={githubLogo} alt="GitHub Logo" />
      </a>
    </div>
  );
}
