/**
 * 结尾总结模板
 * 总结要点，留下深刻印象
 */

module.exports = async (config) => {
  const { title, topic } = config;

  return {
    voiceover: [
      `总结一下今天关于${topic}的核心要点：`,
      `1. [第一个重要点的总结]`,
      `2. [第二个重要点的总结]`,
      `3. [第三个重要点的总结]`,
      `感谢大家收看【${title}】。如果你觉得这个视频有帮助，请点个赞，订阅频道获取更多科普内容。`,
      `下期再见！`
    ],
    keyTakeaways: [
      '简洁回顾核心概念',
      '强调实用价值',
      '启发观众思考'
    ],
    callToAction: {
      like: '点赞支持',
      subscribe: '订阅频道',
      share: '分享给朋友',
      comment: '留言讨论'
    },
    sceneDescription: [
      '镜头1: 返回到品牌界面',
      '配合结尾音乐',
      '滚动显示关键要点',
      '显示频道信息和订阅按钮'
    ],
    duration: 60, // 1分钟
    emotionalNotes: '给观众留下深刻印象，鼓励进一步互动'
  };
};