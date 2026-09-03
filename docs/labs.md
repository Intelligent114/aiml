---
sidebar_position: 4
title: 实验
---

# 课程实验

课程设置一次开发环境配置、三次单人实验和一次多人 Final Project。前三次正式实验依次覆盖线性模型、神经网络和综合机器学习流程，最后一次实验综合搜索、MDP、强化学习与博弈。

## 实验总览

| 编号 | 标题 | 主要内容 | 入口 |
|:---|:---|:---|:---|
| LAB0 | 机器学习开发环境配置 | Git、Conda、VS Code、NumPy、scikit-learn、PyTorch 与环境验证 | <a href="/assets/files/alml-public/labs/lab0.pdf" download>实验文档 ↓</a> · <a href="https://oj.temaurinum.moe/labs/lab0-environment/" target="_self">OJ</a> |
| LAB1 | 从线性模型到可靠评估（单人） | 线性/逻辑回归、数据处理、正则化与模型评估 | — |
| LAB2 | 反向传播与神经网络（单人） | 反向传播、梯度检查、小型神经网络与消融实验 | — |
| LAB3 | 高维数据的表示、聚类与分类（单人） | PCA、GMM、聚类、SVM、决策树与集成模型 | — |
| LAB4 | 搜索与强化学习博弈智能体（多人 Final Project） | 搜索、MDP、强化学习、Self-play 与博弈评测 | — |

## 内容说明

### LAB0 机器学习开发环境配置

配置 Git、Miniforge/Conda 和 VS Code，安装 NumPy、scikit-learn 与 PyTorch，并运行课程提供的验证程序。程序把确定性的机器学习计算结果与当前账户学号组合后生成 SHA256，由 TensorJudge 验证环境是否正确。

LAB0 同时提供 Windows 与 macOS 操作说明，不要求 GPU。

### LAB1 从线性模型到可靠评估（单人）

在新的表格数据任务上完成数据检查、预处理、线性回归或逻辑回归的核心实现，并与 scikit-learn 基线比较。实验重点不是单一排行榜成绩，而是正确划分数据、选择评价指标、控制正则化并解释泛化表现。

评测主要检查数值与接口正确性、隐藏数据上的合理泛化、实验输出的可复现性和结果分析。

### LAB2 反向传播与神经网络（单人）

实现基础网络层的前向和反向传播，使用有限差分完成梯度检查，再使用 PyTorch 训练一个小型神经网络。实验要求比较若干初始化、激活函数或正则化设置，并解释训练曲线和验证曲线。

研究结合部分采用小规模复现：围绕一个明确现象完成一张图或一组消融结果，不要求完整复现大型模型或使用 GPU。

### LAB3 高维数据的表示、聚类与分类（单人）

在新的高维数据上完成表示学习和模型比较。学生实现 PCA 或 GMM/EM 中的一个核心部分，分析 K-means/GMM 的聚类结构，并比较降维前后的 SVM、决策树和集成模型。

实验强调聚类指标、下游分类表现和计算开销之间的关系。研究结合部分可以复现“表示维数—性能”、聚类稳定性或分类器消融等单一结果。

### LAB4 搜索与强化学习博弈智能体（多人 Final Project）

小组为一个规模受控的双人零和环境开发智能体。项目从随机或启发式基线开始，实现 Minimax、Alpha-Beta 或 MCTS 等搜索方法，并结合 Q-learning、DQN、Actor-Critic 或 Self-play 中的一种学习方法。

最终评测包括接口与合法性检查、隐藏对手测试、模型表现、消融分析、可复现性以及小组分工说明。锦标赛可以作为展示或部分表现评价，但不会单独决定项目成绩。

:::note 提问与提交

实验通过 [TensorJudge](https://oj.temaurinum.moe/) 评测。对环境、实验框架或 OJ 有疑问时，请先搜索并通过[课程资料仓库的 GitHub Issues](https://github.com/Intelligent114/ALML_public/issues/new/choose)提问；不要公开学号、验证码、SHA256、完整个人实现或未公开答案。

:::
