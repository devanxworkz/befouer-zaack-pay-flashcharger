import React, { useEffect, useState } from "react";

function getUserId() {
  let userId = localStorage.getItem("wallet_user_id");

  if (!userId) {
    userId = crypto.randomUUID();

    localStorage.setItem(
      "wallet_user_id",
      userId
    );
  }

  return userId;
}

export default function WalletTest() {
  const [balance, setBalance] = useState(0);

  const userId = getUserId();

  async function loadBalance() {
    try {
      const res = await fetch(
        `https://ocpp.rivotmotors.com/api/wallet/balance/${userId}`
      );

      const data = await res.json();

      setBalance(data.balance);
    } catch (err) {
      console.log(err);
    }
  }

  async function addMoney() {
    try {
      await fetch(
        "https://ocpp.rivotmotors.com/api/wallet/credit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: userId,
            amount: 100,
            session_id: crypto.randomUUID(),
          }),
        }
      );

      loadBalance();
    } catch (err) {
      console.log(err);
    }
  }

  async function deductMoney() {
    try {
      await fetch(
        "https://ocpp.rivotmotors.com/api/wallet/deduct",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: userId,
            amount: 50,
            session_id: crypto.randomUUID(),
          }),
        }
      );

      loadBalance();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadBalance();
  }, []);

  return (
    <div
      style={{
        padding: 40,
        color: "white",
        background: "#111",
        minHeight: "100vh",
      }}
    >
      <h1>Wallet Test</h1>

      <p>
        <b>User ID:</b>
      </p>

      <p>{userId}</p>

      <h2>Balance: ₹{balance}</h2>

      <button
        onClick={addMoney}
        style={{
          padding: 12,
          marginRight: 10,
        }}
      >
        Add ₹100
      </button>

      <button
        onClick={deductMoney}
        style={{
          padding: 12,
        }}
      >
        Deduct ₹50
      </button>
    </div>
  );
}