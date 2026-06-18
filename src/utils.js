/**
 * 工具函数
 */

const validateInput = (config) => {
  const errors = [];

  if (!config.title) {
    errors.push('标题不能为空');
  }

  if (!config.topic) {
    errors.push('主题不能为空');
  }

  if (config.duration && config.duration < 300) {
    errors.push('视频时长不能少于5分钟');
  }

  if (config.duration && config.duration > 1200) {
    errors.push('视频时长不能超过20分钟');
  }

  if (errors.length > 0) {
    throw new Error(`配置验证失败:\n${errors.join('\n')}`);
  }

  return true;
};

const formatOutput = (script) => {
  const formatted = {
    ...script,
    summary: `\n=== 视频文案生成完成 ===\n标题: ${script.metadata.title}\n主题: ${script.metadata.topic}\n时长: ${script.metadata.estimatedDuration}\n生成时间: ${script.metadata.generatedAt}\n\n`
  };
  return formatted;
};

const estimateWordCount = (text) => {
  return text.length;
};

const estimateSpeakingTime = (wordCount) => {
  // 平均每分钟150个单词
  return Math.ceil(wordCount / 150);
};

module.exports = {
  validateInput,
  formatOutput,
  estimateWordCount,
  estimateSpeakingTime
};