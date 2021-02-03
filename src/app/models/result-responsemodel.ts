import { IResponseItem } from './result-item.model';

export interface IYoutubeResponse {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items: IResponseItem[];
}

interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}
