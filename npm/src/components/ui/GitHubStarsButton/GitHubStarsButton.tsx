import React, { useEffect, useState } from "react";

interface GitHubStarsButtonProps {
  repoUrl: string;
  buttonText?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  additionalClasses?: string;
}

const GitHubStarsButton: React.FC<GitHubStarsButtonProps> = ({
  repoUrl,
  buttonText = "Star",
  backgroundColor = "black",
  textColor = "white",
  hoverBackgroundColor = "#374151",
  hoverTextColor = "white",
  additionalClasses = "",
}) => {
  const [stars, setStars] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const repoPath = repoUrl.replace("https://github.com/", "");
        const response = await fetch(
          `https://api.github.com/repos/${repoPath}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch stars");
        }

        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (err) {
        setError("Failed to fetch stars");
      }
    };

    fetchStars();
  }, [repoUrl]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${additionalClasses}`}
      style={{
        backgroundColor,
        color: textColor,
        transition: "background-color 0.2s, color 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor =
          hoverBackgroundColor;
        (e.currentTarget as HTMLElement).style.color = hoverTextColor;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor =
          backgroundColor;
        (e.currentTarget as HTMLElement).style.color = textColor;
      }}
    >
      <svg
        style={{ width: "1.25rem", height: "1.25rem", marginRight: "0.5rem" }}
        fill="currentColor"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.57c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.2 1.87.85 2.33.65.07-.52.28-.85.51-1.05-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.7 7.7 0 0 1 2-.27c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        />
      </svg>
      <span>{buttonText}</span>
      {stars !== null && (
        <span style={{ marginLeft: "0.5rem" }}>⭐{stars}</span>
      )}
    </a>
  );
};

export default GitHubStarsButton;
