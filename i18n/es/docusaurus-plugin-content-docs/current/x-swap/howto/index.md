---
sidebar_label: Procedimientos de Uso para X-Swap
sidebar_position: 1
---

# Procedimientos de Uso para X-Swap

## Procedimientos para el Uso de Swap

**Swap se refiere a cambiar una criptomoneda por otra criptomoneda.**

A diferencia de los intercambios centralizados (CEX), en exchanges descentralizados (DEX) como X-Swap, no se utiliza un libro de órdenes, sino que **se emplean pools de liquidez para intercambiar tokens**.

**① Conectar una cartera (por ejemplo, MetaMask)**

1. Haz clic en "Conectar Cartera (Connect Wallet)".
2. Selecciona y conecta MetaMask (u otra cartera compatible).
3. Asegúrate de estar conectado a la red correcta.

**② Configurar los pares a intercambiar**

1. En la pantalla de swap, selecciona los pares que deseas intercambiar.
**(Ejemplo: "USDT → ETH")**
Elige USDT en "De (From)".
Elige ETH en "Para (To)". Ingresa la cantidad de USDT que deseas intercambiar.
(Ejemplo: al ingresar "100 USDT", se mostrará el equivalente en ETH según la tasa de cambio.)
2. Verifica el precio, las tarifas de gas (comisiones) y el deslizamiento.
3. Revisa la "cantidad mínima a recibir". (Esto puede variar de acuerdo a la liquidez del mercado.)

**③ Realizar el Swap (Intercambio)**

1. Haz clic en el botón "Swap".
2. Aparecerá una ventana emergente de la cartera (como MetaMask).
3. Verifica la tarifa de gas y aprueba la transacción.
4. Espera hasta que la transacción se procese en la blockchain. (Esto puede tardar desde unos segundos hasta varios minutos.)

**④ Confirmar la transacción**

1. Una vez completado el swap, verifica que el ETH se refleje en la cartera.
2. Usa Etherscan ([https://etherscan.io/)](https://etherscan.io/%EF%BC%89%E3%81%A7%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B6%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF) para revisar la transacción.
3. Copia el ID de la transacción (Tx Hash) desde el historial de transacciones de MetaMask o desde el "historial de transacciones" de Uniswap.
4. Busca en Etherscan para confirmar si la transacción fue exitosa.



## Procedimientos para el Uso de Pool

**Un Pool de Liquidez es un mecanismo que proporciona la liquidez necesaria (oferta de tokens) para el comercio de criptomonedas.**

En DEX como X-Swap, **puedes ganar comisiones de transacción depositando criptomonedas en un pool de liquidez**.

**① Conectar la cartera**

1. Haz clic en "Conectar Cartera (Connect Wallet)".
2. Selecciona y conecta una cartera como MetaMask.
3. Verifica que estás conectado a la red correcta como Ethereum Mainnet o BSC.

**② Añadir Liquidez (Add Liquidity)**

1. Abre la pestaña "Pool".
2. Selecciona "Añadir Liquidez (Add Liquidity)".
3. Elige el par de tokens para proporcionar liquidez. (Ejemplo: USDT / ETH)
    - La proporción del par debe ser 1:1.
    - Ejemplo: ingresa 100 USDT y la cantidad correspondiente en ETH.
4. Ingresa el monto y verifica la participación en el pool (proporción de tokens LP).
5. Haz clic en "Aprobar (Approve)" para permitir el uso de tokens en la cartera.
6. Haz clic en "Suministrar (Supply)" para aprobar la transacción.
7. Verifica la tarifa (gas) y realiza la aprobación final.

**③ Verificar recompensas obtenidas**

- Cada vez que se realiza un swap, las comisiones de transacción (por ejemplo, 0.3%) se distribuyen a los proveedores de liquidez del pool.
- Las recompensas se acumulan de acuerdo con el período de provisión de liquidez.
- Se necesitan tokens LP al retirar la liquidez.

**④ Retirar Liquidez (Remove Liquidity)**

1. Abre la pestaña "Pool".
2. Selecciona el par de liquidez que estás proporcionando.
3. Haz clic en "Eliminar (Remove)" liquidez.
4. Selecciona el porcentaje a retirar. (Ejemplo: 100% para retirar todo)
5. Aprueba la transacción en la cartera para confirmar.
6. Los tokens originales (USDT y ETH) y las recompensas obtenidas regresarán a la cartera.

- La cantidad de tokens depositados puede cambiar debido al impacto del swap. (Pérdida impermanente)
- Prestar liquidez por un período prolongado incrementa las recompensas por comisiones de transacción.