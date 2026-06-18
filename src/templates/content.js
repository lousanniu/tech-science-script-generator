/**
 * 核心内容讲解模板
 * 分层次讲解技术知识的主体部分
 */

module.exports = async (config) => {
  const { topic } = config;

  return {
    voiceover: [
      `首先，让我们从基础概念开始理解${topic}的定义。`,
      `在深入之前，我们需要知道它的工作原理。`,
      `接下来，让我们看看现实中的应用场景。`
    ],
    sections: [
      {
        title: '第一部分：基础概念',
        duration: 180, // 3分钟
        content: '详细解释核心概念，用简单的语言和类比',
        visuals: [
          '动画演示基本原理',
          '信息图表展示关键点',
          '实时视频或截图'
        ]
      },
      {
        title: '第二部分：工作机制',
        duration: 240, // 4分钟
        content: '逐步讲解系统如何运作',
        visuals: [
          '流程图动画',
          '分步骤演示',
          '特效强调重点'
        ]
      },
      {
        title: '第三部分：实际应用',
        duration: 200, // 约3分20秒
        content: '展示真实世界中的应用',
        visuals: [
          '案例展示',
          '成功故事',
          '数据统计图'
        ]
      }
    ],
    estimatedDuration: 620,
    keyMessages: [
      '学到可以立即应用的知识',
      '理解为什么这个话题很重要',
      '掌握基本的实践技能'
    ]
  };
};