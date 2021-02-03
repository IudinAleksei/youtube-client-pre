export interface IResponseItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}

interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalized;
  defaultAudioLanguage: string;
}

interface ILocalized {
  title: string;
  description: string;
}

interface IThumbnails {
  default: IThumb;
  medium: IThumb;
  high: IThumb;
  standard: IThumb;
  maxres: IThumb;
}

interface IThumb {
  url: string;
  width: number;
  height: number;
}
