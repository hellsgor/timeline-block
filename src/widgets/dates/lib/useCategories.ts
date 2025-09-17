import { useCallback, useMemo, useState, useRef } from 'react';
import { TIMELINE_DATA } from '../config';
import type { ITimelineData } from '../model';

export function useCategories() {
  const data: ITimelineData = TIMELINE_DATA;

  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  const categoriesLengthRef = useRef(0);
  const categories = useMemo(() => {
    const entries = Object.entries(data);
    categoriesLengthRef.current = entries.length;
    return entries;
  }, [data]);

  const activeCategory = categories[activeCategoryIdx];

  const incrementCategory = useCallback(() => {
    setActiveCategoryIdx((state) =>
      state + 1 >= categoriesLengthRef.current ? state : state + 1,
    );
  }, []);

  const decrementCategory = useCallback(() => {
    setActiveCategoryIdx((state) => (state - 1 < 0 ? state : state - 1));
  }, []);

  return {
    currentIdx: activeCategoryIdx,
    setCurrentIdx: setActiveCategoryIdx,
    categories,
    currentCategory: activeCategory,
    incrementActiveCategorySlide: incrementCategory,
    decrementActiveCategorySlide: decrementCategory,
  };
}
