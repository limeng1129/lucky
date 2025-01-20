/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 2,
    text: "第三轮一等奖",
    title: "",
    img: "../img/111.png"
  },
  {
    type: 2,
    count: 10,
    text: "第三轮二等奖",
    title: "",
    img: "../img/111.png"
  },
  {
    type: 3,
    count: 20,
    text: "第三轮三等奖",
    title: "",
    img: "../img/111.png"
  },
  {
    type: 4,
    count: 2,
    text: "第二轮一等奖",
    title: "",
    img: "../img/111.png"
  },
  {
    type: 5,
    count: 10,
    text: "第二轮二等奖",
    title: "",
    img: "../img/111.png"
  },
  {
    type: 6,
    count: 20,
    text: "第二轮三等奖",
    title: "",
    img: "../img/111.png"
  },
  {
    type: 7,
    count: 2,
    text: "第一轮一等奖",
    title: "",
    img: "../img/111.png"
  },
  {
    type: 8,
    count: 10,
    text: "第一轮二等奖",
    title: "",
    img: "../img/111.png"
  },
  {
    type: 9,
    count: 20,
    text: "第一轮三等奖",
    title: "",
    img: "../img/111.png"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 5, 10,1, 5, 10, 1, 5, 10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "重点实验室";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
