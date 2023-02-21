import React from 'react';
import { useQuery } from '@tanstack/react-query';
import getUserList from '../../api/getUserList';

const SEARCH = 'search';

function useSearchQuery(params: string, options?: any) {
  return useQuery([SEARCH, params], () => getUserList(params), {
    retry: false,
    onError: (err: any) => {
      console.log(err.response);
    },
    ...options,
  });
}

export default useSearchQuery;
