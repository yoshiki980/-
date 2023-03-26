export const STORAGE_KEY = {
  AUTHED: 'authed',
  PROBLEM_CODE: 'problemCode',
  languages: 'languages'
}
export const SCORE_TYPE = {
  westHierarchyScoreType: [
    {
      label: 'A+',
      value: 'A+'
    },
    {
      label: 'A',
      value: 'A'
    },
    {
      label: 'A-',
      value: 'A-'
    },
    {
      label: 'B+',
      value: 'B+'
    },
    {
      label: 'B',
      value: 'B'
    },
    {
      label: 'B-',
      value: 'B-'
    },
    {
      label: 'C+',
      value: 'C+'
    },
    {
      label: 'C',
      value: 'C'
    },
    {
      label: 'C-',
      value: 'C-'
    },
    {
      label: 'D+',
      value: 'D+'
    },
    {
      label: 'D',
      value: 'D'
    },
    {
      label: 'E',
      value: 'E'
    }
  ],
  hierarchyScoreType: [
    {
      label: '不及格',
      value: '不及格'
    },
    {
      label: '及格',
      value: '及格'
    },
    {
      label: '中等',
      value: '中等'
    },
    {
      label: '良好',
      value: '良好'
    },
    {
      label: '优秀',
      value: '优秀'
    }
  ]
}

export const CANVAS_OPTION = {
  canvasFontSize: [
    {
      label: '小',
      value: '10px "宋体"'
    },
    {
      label: '正常',
      value: '20px "宋体"'
    },
    {
      label: '大',
      value: '30px "宋体"'
    }
  ],
  canvasLineWidth: [
    {
      label: '窄',
      value: 2
    },
    {
      label: '正常',
      value: 5
    },
    {
      label: '厚',
      value: 15
    }
  ],
  canvasOption: {
    strokeStyle: '#FF0000',
    fontColor: '#FF0000',
    lineWidth: 5,
    font: '20px "宋体"',
    fontSize: 20
  }
}

export const HOMEWORK_PLAN = {
  completeWayTypes: [
    {
      label: '单人完成',
      value: 'single'
    },
    {
      label: '小组完成',
      value: 'teamwork'
    }
  ],
  markTypes: [
    {
      label: '离线批阅',
      value: '0'
    },
    {
      label: '在线批阅',
      value: '1'
    }
  ],
  sampleGradeType: [
    {
      label: '手动指定等级',
      value: '1'
    }, {
      label: '系统根据成绩判定',
      value: '2'
    }
  ],
  sampleGrade: [
    {
      label: '优',
      value: 1
    }, {
      label: '良',
      value: 2
    }, {
      label: '中',
      value: 3
    }, {
      label: '差',
      value: 4
    }
  ],
  homeworkTypeMap: {
    'Homework': '平时作业',
    'Paper': '论文',
    'MidTermPaper': '期中考试',
    'UnitTest': '单元测试',
    'Other': '其他'
  },
  homeworkScoreTypeMap: {
    'hundredMark': '百分制',
    'hierarchy': '优良中差等级制',
    'westHierarchy': 'ABCD等级制'
  },
  scoreTypes: [
    {
      label: '百分制',
      value: 'hundredMark'
    },
    {
      label: '优良中差等级制',
      value: 'hierarchy'
    },
    {
      label: 'ABCD等级制',
      value: 'westHierarchy'
    }
  ]
}

export const SORT = {
  sort: [{
    value: 'DEFAULT',
    label: '默认排序'
  }, {
    value: 'NUMBER_ASC',
    label: '按学号升序'
  }, {
    value: 'NUMBER_DESC',
    label: '按学号降序'
  }, {
    value: 'UPLOAD_TIME_ASC',
    label: '提交时间升序'
  }, {
    value: 'UPLOAD_TIME_DESC',
    label: '提交时间降序'
  }]
}
export const DOMAIN = {
  callback: 'https://cas.dgut.edu.cn/logout?callback=https://hw.dgut.edu.cn'
}
