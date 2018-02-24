export interface ComicListConfig {
  type: string;

  filters: {
    limit?: number,
    offset?: number
  };
}
