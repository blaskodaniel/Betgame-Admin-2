import React, { createContext, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { TeamsAtom } from '../statemanager/atoms';
import { getTeamsSelector } from '../statemanager/selectors';

export const ShareContext = createContext();

const ShareProvider = ({ children }) => {
  const teams = useRecoilValue(getTeamsSelector);

  return (
    <>
      <ShareContext.Provider>{children}</ShareContext.Provider>
    </>
  );
};
export default ShareProvider;
