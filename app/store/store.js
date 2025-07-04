"use client";
import { configureStore } from '@reduxjs/toolkit';
import selectBasics from './slices/selectBasics'
import selectFromWorld from './slices/selectFromWorld'
import selectFromNobel from './slices/selectFromNobel'
import selectInSelect from  './slices/selectInSelect'
import sumAndCount from './slices/sumAndCount'
import joinOperation from './slices/joinOperation'
import moreJoinOperation from './slices/moreJoinOperation'

export const store = configureStore({
  reducer: {
    selectBasics: selectBasics,
    selectFromWorld : selectFromWorld,
    selectFromNobel : selectFromNobel,
    selectInSelect : selectInSelect,
    sumAndCount : sumAndCount,
    joinOperation : joinOperation,
    moreJoinOperation : moreJoinOperation
  },
});
