const scraping = (jobId) => {
  const targetUrl = `https://crowdworks.jp/public/jobs/${jobId}`
  const html = UrlFetchApp.fetch(targetUrl).getContentText('UTF-8')
  const $ = Cheerio.load(html)
  return {
    basic: getBasicInfo($),
    statistics: getStatistics($),
    clientInfo: getClientInfo($)
  }
}

// ##########################

/**
 * 基礎情報の抽出
 * @param {Cheerio} html - Cheerioのパースオブジェクト
 * @return {Array} [報酬, 納品完了日, 掲載日, 応募期限]
 */
const getBasicInfo = (html) => {
  const labelList = ['固定報酬制', '納品完了日', '掲載日', '応募期限']
  const $table = Cheerio.load(html('.cw-table')[0])
  const datas = [...$table('tr')].map((tr) => {
    const $tr = Cheerio.load(tr)
    const label = Cheerio.load($tr('th')[0]).text().replace(/ |\n/g, '')
    return labelList.includes(label) ? Cheerio.load($tr('td')[0]).text().replace(/ |\n/g, '') : null
  })
  return datas.filter((data) => data !== null)
}

/**
 * 統計情報の抽出
 * @param {Cheerio} html - Cheerioのパースオブジェクト
 * @return {Array} [応募, 契約, 募集, 気になる]
 */
const getStatistics = (html) => {
  const labelList = ['応募した人', '契約した人', '募集人数', '気になる！リスト']
  const $table = Cheerio.load(html('.application_status_table')[0])
  const datas = [...$table('tr')].map((tr) => {
    const $tr = Cheerio.load(tr)
    const label = Cheerio.load($tr('th')[0]).text().replace(/ |\n/g, '')
    return labelList.includes(label) ? Cheerio.load($tr('td')[0]).text().replace(/ |\n/g, '') : null
  })
  return datas.filter((data) => data !== null)
}

/**
 * Client情報の抽出
 * @param {Cheerio} html - Cheerioのパースオブジェクト
 * @return {Array} [名前, ありがとう, 評価, 募集実績, プロジェクト完了率]
 */
const getClientInfo = (html) => {
  // 特定のタグのdata属性に一通りのデータが詰まっている
  const infos = JSON.parse(html('#employer-information')[0].attribs.data)
  return [
    infos.userDisplayName,
    infos.userThanksCount,
    infos.averageScore,
    infos.jobOfferAchievementCount,
    infos.projectFinishedRate
  ]
}

// utils ##########################
