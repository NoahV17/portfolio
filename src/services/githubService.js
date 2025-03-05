const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_USERNAME = 'NoahV17';

/**
 * Fetch repository information from GitHub
 * @param {string} repoName - The name of the repository
 * @returns {Promise<Object>} - Repository data including stars, forks, etc.
 */
export const getRepositoryInfo = async (repoName) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub repository data:', error);
    return null;
  }
};

/**
 * Fetch recent commits for a repository
 * @param {string} repoName - The name of the repository
 * @param {number} limit - Maximum number of commits to fetch
 * @returns {Promise<Array>} - Array of recent commits
 */
export const getRecentCommits = async (repoName, limit = 5) => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}/commits?per_page=${limit}`
    );
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub commits:', error);
    return [];
  }
};

/**
 * Get README content from a repository
 * @param {string} repoName - The name of the repository
 * @returns {Promise<string>} - README content in markdown format
 */
export const getReadmeContent = async (repoName) => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}/readme`
    );
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const data = await response.json();
    // GitHub returns README content as base64 encoded
    return atob(data.content);
  } catch (error) {
    console.error('Error fetching README:', error);
    return null;
  }
};
