import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import useSearchQuery from '../query/search/searchQuery';

interface TestType {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id?: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}
const Home = () => {
  const [txt, setTxt] = useState<string>('');
  const [res, setRes] = useState<string>('');
  const onChangeTxt = (e: any) => {
    setTxt(e.target.value);
  };
  const onClickButton = () => {
    if (txt.length > 0) {
      setRes(txt);
    }
  };
  const { data } = useSearchQuery(res, { enabled: !!res, refetchOnWindowFocus: false });
  return (
    <div>
      <input type="text" placeholder="plz input" onChange={onChangeTxt} />
      <button onClick={onClickButton}>button test</button>
    </div>
  );
};

export default Home;
