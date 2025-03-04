---
sidebar_label: 소각
sidebar_position: 3
---

# 소각 기능 사용 방법 (토큰 소각)

### **① 지갑 연결하기 (예: MetaMask)**

1. "Connect wallet"을 클릭합니다.
    
    ![Burn_1.png](/img/docs/Burn_1.png)

    ![Burn_2.png](/img/docs/Burn_2.png)
        
2. MetaMask (또는 다른 지원되는 지갑)를 선택하고 연결합니다.
3. 올바른 네트워크에 연결되어 있는지 확인합니다.

### **② 소각할 토큰 설정하기**

1. 소각 화면에서 소각할 토큰을 선택합니다.  
   **(예시) "USDTX(ETH) → USDTX(JOC)"의 경우**  
   - "From"에서 **USDTX**를 선택합니다 (소각할 토큰).  
   - "To"에서 **ETH**를 선택합니다 (받을 토큰).  
   - 소각할 **USDTX**의 양을 입력합니다. (예를 들어, "100 USDTX"를 입력하면 환율에 따른 ETH의 해당 금액이 표시됩니다.)
    
    ![Burn_3.png](/img/docs/Burn_3.png)
    
    ![Burn_4.png](/img/docs/Burn_4.png)
    
2. 가격, 가스 수수료(거래 수수료), 슬리피지를 확인합니다.  
3. "최소 수령 금액"을 검토합니다 (이는 시장의 유동성에 따라 달라질 수 있습니다).

### **③ 소각 실행하기**

1. "Burn" 버튼을 클릭합니다.  
2. 지갑(예: MetaMask)에 팝업이 나타납니다.  
3. 가스 수수료를 확인하고 거래를 승인합니다.  
4. 거래가 블록체인에 처리될 때까지 기다립니다 (몇 초에서 몇 분이 걸릴 수 있습니다).

### **④ 거래 확인하기**

1. 완료 후, ETH가 지갑에 반영되었는지 확인합니다.  
2. Etherscan에서 거래를 확인합니다 ([https://etherscan.io/](https://etherscan.io/)).  
3. MetaMask의 거래 내역 또는 Uniswap의 "거래 기록"에서 거래 ID(Tx Hash)를 복사합니다.  
4. Etherscan에서 Tx Hash를 검색하여 거래가 성공적으로 완료되었는지 확인합니다.