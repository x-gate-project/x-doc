---
sidebar_label: 민트
sidebar_position: 2
---

# 민트(토큰 발행) 사용 방법

### **① 지갑 연결 (예: MetaMask)**

1. "지갑 연결"을 클릭합니다.
    
    ![Mint_1.png](/img/docs/Mint_1.png)
    
    ![Mint_2.png](/img/docs/Mint_2.png)
    
2. MetaMask(또는 다른 지원 지갑)를 선택하고 연결합니다.
3. 올바른 네트워크에 연결되어 있는지 확인합니다.

### **② 민트(발행)할 토큰 설정**

1. 민트 화면에서 발행할 토큰을 선택합니다.  
   **(예: "USDTX(ETH) → USDTX(JOC)"의 경우)**  
   - "보낼 토큰"으로 **USDTX**를 선택합니다.  
   - "받을 토큰"으로 **ETH**를 선택합니다.  
   - 발행할 **USDTX** 양을 입력합니다. (예를 들어 "100 USDTX"을 입력하면 환율에 따라 해당하는 ETH 양이 표시됩니다.)
    
    ![Mint_3.png](/img/docs/Mint_3.png)

    ![Mint_4.png](/img/docs/Mint_4.png)
        
2. 가격, 가스 수수료(거래 수수료), 슬리피지를 확인합니다.  
3. "최소 수령 금액"을 검토합니다 (시장 유동성에 따라 달라질 수 있습니다).

### **③ 민트(발행) 실행**

1. "민트" 버튼을 클릭합니다.  
2. 지갑(MetaMask 등)에 팝업이 나타납니다.  
3. 가스 수수료를 검토하고 거래를 확인합니다.  
4. 블록체인에서 거래가 처리될 때까지 기다립니다 (몇 초에서 몇 분 정도 걸릴 수 있음).

### **④ 거래 확인**

1. 완료 후, 지갑에 ETH가 반영되었는지 확인합니다.  
2. Etherscan([https://etherscan.io/](https://etherscan.io/))에서 거래를 확인합니다.  
3. MetaMask의 거래 내역이나 Uniswap의 "거래 내역"에서 거래 ID(Tx Hash)를 복사합니다.  
4. Etherscan에서 Tx Hash를 검색하여 거래가 성공했는지 확인합니다.