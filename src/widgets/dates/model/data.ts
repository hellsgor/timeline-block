type TBaseId = string | (() => string);

export interface ITimelineCategory {
  id: TBaseId;
  title: string;
  items: { year: number; text: string; id: TBaseId }[];
}

export type ITimelineData = Record<string, ITimelineCategory>;
