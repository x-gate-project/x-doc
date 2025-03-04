---
sidebar_label: 发送
sidebar_position: 1
---

# 如何使用发送（转移）功能

### **① 连接您的钱包（例如，MetaMask）**

1. 点击“连接钱包”。
    
    ![Send_1.png](/img/docs/Send_1.png)
    
2. 选择 MetaMask（或其他支持的钱包）并连接。
    
    ![Send_2.png](/img/docs/Send_2.png)
    
3. 确保您连接到正确的网络。

### **② 设置要发送的代币**

1. 在发送界面，选择您想要发送的代币。  
   **（例如）对于 "USDTX(ETH) → USDTX(JOC)"**  
   - 在“从”字段中选择 **USDTX**（要发送的代币）。  
   - 在“到”字段中选择 **ETH**（要接收的代币）。  
   - 输入您想要发送的 **USDTX** 数量。（例如，输入“100 USDTX”将显示对应的 ETH 数量，基于汇率计算。）
    
    ![Send_3.png](/img/docs/Send_3.png)

    ![Send_4.png](/img/docs/Send_4.png)
        
2. 检查价格、燃气费（交易费）和滑点。  
3. 查看“最低收到金额”（可能会因市场流动性而变化）。

### **③ 执行发送（转移）**

1. 点击“发送”按钮。  
2. 您的钱包（例如，MetaMask）将弹出确认窗口。  
3. 检查燃气费并确认交易。  
4. 等待交易在区块链上处理（这可能需要几秒到几分钟）。

### **④ 验证交易**

1. 完成后，检查您的钱包中是否反映了 ETH。  
2. 在 Etherscan 上检查交易（[https://etherscan.io/](https://etherscan.io/)）。  
3. 从 MetaMask 的交易历史或 Uniswap 的“交易记录”中复制交易 ID（Tx Hash）。  
4. 在 Etherscan 上搜索该 Tx Hash，以确认交易是否成功。