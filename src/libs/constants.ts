type siteType = {
  siteTitle: string;
  siteDesc: string;
  siteUrl: string;
};

export const siteMeta: siteType = {
  siteTitle: "サイトタイトル",
  siteDesc: "ディスクリプションが入ります。",
  siteUrl: "https://〇〇.jp/",
};

export const pageInfo = {
  TOP: {
    pageTitle: "",
    pageDesc: "",
  },
  page404: {
    pageTitle: "お探しのページが見つかりませんでした",
    pageDesc: "",
    pageNoindex: true,
  },
};
