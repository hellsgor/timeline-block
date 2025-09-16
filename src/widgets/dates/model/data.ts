export interface ITimelineCategory {
  id: string;
  title: string;
  items: { year: number; text: string }[];
}

export type ITimelineData = Record<string, ITimelineCategory>;
