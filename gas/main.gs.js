const updateActiveSheet = () => {
  update({ skip: false })
}

const updateActiveSheetNoChecked = () => {
  update({
    skip: (sheet, row) => {
      const checkCol = 4
      return sheet.getRange(row, checkCol).getValue()
    }
  })
}

const updateTimestamp = (sheet, row) => {
  const timestampCol = 1
  const time = new Date()
  sheet.getRange(row, timestampCol).setValue(time)
}

const update = ({ skip }) => {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = spreadsheet.getActiveSheet()
  const startRow = 6
  const lastRow = sheet.getLastRow()
  const jobIdRow = 3
  const startCol = 5

  for (i = 0; i <= lastRow - startRow; i++) {
    const row = startRow + i
    if (skip && skip(sheet, row)) {
      continue
    }
    const jobId = sheet.getRange(row, jobIdRow).getValue()
    /**
     * basic: [報酬, 納品完了日, 掲載日, 応募期限]
     * statistics: [応募, 契約, 募集, 気になる]
     * clientInfo: [名前, ありがとう, 評価, 募集実績, プロジェクト完了率]
     */
    const { basic, statistics, clientInfo } = scraping(jobId)
    basic
      .concat(statistics)
      .concat(clientInfo)
      .forEach((val, index) => {
        sheet.getRange(row, startCol + index).setValue(val)
      })
    updateTimestamp(sheet, row)
  }
}
