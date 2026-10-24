---
sidebar_position: 4
title: 实验
---

# 课程实验

课程设置一次开发环境配置、三次单人实验和一次多人 Final Project。

:::info[LAB0 已正式发布]

截止时间为 **2026-09-21 06:00**。截止后仍可提交；每迟交 1 天，扣除该实验成绩的 10%。

:::

## 实验总览

:::info[LAB2 已正式发布]

**神经网络如何学习不同频率的信号**，个人完成，CPU 即可。截止时间为 **2026 年 11 月 23 日 06:00**。<a href="/assets/files/alml-public/labs/lab2.pdf" download>下载实验文档</a>，并从[学生仓库](https://github.com/Intelligent114/ALML_public/tree/main/LABs/LAB2)获取代码、数据和环境文件。

实验报告上传 [Blackboard](https://bb.ustc.edu.cn/)，单个 `submission.py` 上传 [OJ 的 LAB2](https://oj.temaurinum.moe/labs/lab2-frequency-learning/)，不接收其他文件。

**10 月 23 日更新：**最终性能基准调整为 `scale=0.25, lr=0.003, lam=0`，已有提交统一重评。性能分仍为 10 分，按基准与提交的汇总 RMSE 比例折算；代码 40 分、报告 50 分及 800 次更新预算不变。请使用更新后的实验文档，观察阶段的对照配置不变。

**10 月 24 日文档更正：**将原评分表中的“复现与独立核验 2 分”明确标注为任务六，报告六项分值为 **8 + 12 + 14 + 10 + 4 + 2 = 50 分**。该项包括复现记录 1 分、AI 使用说明及可复核自检 1 分；可引用已有核验，无需新增实验。

:::

:::info[LAB1 已正式发布]

截止时间为 **2026 年 10 月 19 日 06:00（北京时间）**，报告与代码适用同一截止时间。实验报告上传 [Blackboard](https://bb.ustc.edu.cn/)，`submission.py` 单独上传 [OJ](https://oj.temaurinum.moe/)，不接收其他文件。

:::

| 编号 | 标题 | DDL | 入口 |
|:---|:---|:---|:---|
| **LAB0** | 机器学习开发环境配置 | **2026-09-21 06:00** | <a href="/assets/files/alml-public/labs/lab0.pdf" download>实验文档 ↓</a> · <a href="https://oj.temaurinum.moe/labs/lab0-environment/" target="_self">OJ</a> |
| **LAB1** | 线性回归与正则化（单人） | **2026-10-19 06:00（北京时间）** | <a href="/assets/files/alml-public/labs/lab1.pdf" download>实验文档 ↓</a> · [代码与数据](https://github.com/Intelligent114/ALML_public/tree/main/LABs/LAB1) · [Blackboard](https://bb.ustc.edu.cn/) · [OJ](https://oj.temaurinum.moe/) |
| **LAB2** | 神经网络如何学习不同频率的信号（单人） | **2026-11-23 06:00** | <a href="/assets/files/alml-public/labs/lab2.pdf" download>实验文档 ↓</a> · [代码与数据](https://github.com/Intelligent114/ALML_public/tree/main/LABs/LAB2) · [Blackboard](https://bb.ustc.edu.cn/) · [OJ](https://oj.temaurinum.moe/labs/lab2-frequency-learning/) |
| LAB3 | 高维数据的表示、聚类与分类（单人） | — | — |
| LAB4 | 搜索与强化学习博弈智能体（多人 Final Project） | — | — |

## 已发布内容

### LAB0 机器学习开发环境配置

配置 Git、Miniforge/Conda 和 VS Code，安装 NumPy、scikit-learn 与 PyTorch，并运行课程提供的验证程序。程序把确定性的机器学习计算结果与当前账户学号组合后生成 SHA256，由 TensorJudge 验证环境是否正确。

LAB0 同时提供 Windows 与 macOS 操作说明，不要求 GPU。

### LAB1 线性回归与正则化

个人完成，预计 8–10 小时。使用材料中的 `environment.yml` 新建 `ai3002-lab1` 环境，补全 `src/submission.py`，完成学习率和正则化参数的联合调整、评估对照及最终测试。最终配置写入 `get_config()`；OJ 依据提交代码按统一的梯度下降训练规则评测。

- **报告 50 分**：将 `学号-姓名-LAB1.pdf` 上传至 [Blackboard](https://bb.ustc.edu.cn/)。
- **代码 40 分、最终性能 10 分**：仅将 `submission.py` 上传至 [OJ](https://oj.temaurinum.moe/)。
- 结果目录、模型文件及压缩包不作为提交文件。完整步骤见[实验 README](https://github.com/Intelligent114/ALML_public/blob/main/LABs/LAB1/README.md)。

### LAB2 神经网络如何学习不同频率的信号

使用 NumPy 手写前向与反向传播并核验梯度，使用 PyTorch 完成频率学习观察、学习率与输入尺度及正则化的联合选参、稀疏含噪反例和二维图像重建。新建 `ai3002-lab2` 环境，所有命令从 LAB2 根目录运行；只修改 `src/submission.py`，按统一的 800 次更新预算完成实验。

- **报告 50 分**：将 `学号-姓名-LAB2.pdf` 上传至 [Blackboard](https://bb.ustc.edu.cn/)。
- **代码 40 分、最终性能 10 分**：仅将 `submission.py` 上传至 [OJ 的 LAB2](https://oj.temaurinum.moe/labs/lab2-frequency-learning/)。最终配置写入 `get_config()`，OJ 使用该配置统一重新训练并评测。
- 报告与代码截止时间均为 **2026 年 11 月 23 日 06:00**。不接收模型、结果目录、压缩包或其他代码；完整步骤见[实验运行说明](https://github.com/Intelligent114/ALML_public/blob/main/LABs/LAB2/README.md)。

:::note[提问与提交]

实验通过 [TensorJudge](https://oj.temaurinum.moe/) 评测。接受迟交；每迟交 1 天扣除 10% 分数。OJ 会标注迟交提交时间，但不会自动扣分，最终扣分由教师人工处理。对环境、实验框架或 OJ 有疑问时，请先搜索并通过[课程资料仓库的 GitHub Issues](https://github.com/Intelligent114/ALML_public/issues/new/choose)提问；不要公开学号、验证码、SHA256、完整个人实现或未公开答案。

:::
