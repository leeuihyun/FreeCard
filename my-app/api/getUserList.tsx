import { Octokit } from '@octokit/core';

const getUserList = async (name: string) => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const res = await octokit.request('GET /search/users', {
    q: name,
    page: 1,
    per_page: 100,
  });
  const items = res.data.items;
  console.log(items);
  return items;
};

export default getUserList;
