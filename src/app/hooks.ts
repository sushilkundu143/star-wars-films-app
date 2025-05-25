import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store'; // Ensure './store' exists and exports RootState and AppDispatch

// If './store' does not exist, update the path below to the correct location of your store file, for example:
// import type { RootState, AppDispatch } from '../store';
// or create the file './store.ts' with the appropriate exports.

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
