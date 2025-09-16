import { useState } from 'react';
import { TIMELINE_DATA } from '../config';
import type { ITimelineData } from '../model';

export function useCategories() {
  const data: ITimelineData = TIMELINE_DATA;

  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  const categories = Object.entries(data);
  const activeCategory = categories[activeCategoryIdx];

  const incrementCategory = () => {
    setActiveCategoryIdx((state) =>
      state + 1 > categories.length ? state : state + 1,
    );
  };

  const decrementCategory = () => {
    setActiveCategoryIdx((state) => (state - 1 < 0 ? state : state - 1));
  };

  return {
    currentIdx: activeCategoryIdx,
    setCurrentIdx: setActiveCategoryIdx,
    categories,
    currentCategory: activeCategory,
    incrementActiveCategorySlide: incrementCategory,
    decrementActiveCategorySlide: decrementCategory,
  };
}
