---
sidebar_label: 전송
sidebar_position: 1
---

# 전송(Transfer) 기능 사용 방법

### **① 지갑 연결하기 (예: MetaMask)**

1. "지갑 연결" 버튼을 클릭합니다.
    
    ![Send_1.png](/img/docs/Send_1.png)
    
2. MetaMask (또는 지원되는 다른 지갑)를 선택하고 연결합니다.
    
    ![Send_2.png](/img/docs/Send_2.png)
    
3. 올바른 네트워크에 연결되어 있는지 확인합니다.

### **② 전송(Transfer)할 토큰 설정하기**

1. 전송 화면에서 원하는 전송 토큰을 선택합니다.  
   **(예시) "USDTX(ETH) → USDTX(JOC)"의 경우**  
   - "From"에 **USDTX**(전송할 토큰)를 선택합니다.  
   - "To"에 **ETH**(받을 토큰)를 선택합니다.  
   - 전송할 **USDTX**의 양을 입력합니다. (예: "100 USDTX"를 입력하면 환율에 따라 대응되는 ETH 양이 표시됩니다.)
    
    ![Send_3.png](/img/docs/Send_3.png)

    ![Send_4.png](/img/docs/Send_4.png)
        
2. 가격, 가스 요금(거래 수수료), 슬리피지를 확인합니다.  
3. "최소 수령 금액"을 검토합니다(시장 유동성에 따라 변동될 수 있습니다).

### **③ 전송(Transfer) 실행하기**

1. "전송" 버튼을 클릭합니다.  
2. 지갑(e.g., MetaMask)에서 확인 팝업이 나타납니다.  
3. 가스 요금을 검토하고 거래를 확인합니다.  
4. 거래가 블록체인 상에서 처리되기를 기다립니다(몇 초에서 몇 분이 소요될 수 있습니다).

### **④ 거래 확인하기**

1. 완료 후, ETH가 지갑에 반영되었는지 확인합니다.  
2. [Etherscan](https://etherscan.io/)에서 거래를 확인합니다.  
3. MetaMask의 거래 기록 또는 Uniswap의 "거래 내역"에서 거래 ID(Tx Hash)를 복사합니다.  
4. Etherscan에서 Tx Hash를 검색하여 거래가 성공적으로 완료되었는지 확인합니다.