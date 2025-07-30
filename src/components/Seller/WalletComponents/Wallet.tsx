'use client';
import React, { useState } from 'react';

import SetPin from './SetPin';
import SecureWallet from './SecureWallet';
import WalletBalance from './WalletBalance'; 

const Wallet = () => {
  const [step, setStep] = useState<'secure' | 'setpin' | 'walletBalance'>('secure');

  return (
    <div>
      {step === 'secure' && <SecureWallet onSetPin={() => setStep('setpin')} />}
      {step === 'setpin' && <SetPin onSetPinComplete={() => setStep('walletBalance')} />}
      {step === 'walletBalance' && <WalletBalance />} 
    </div>
  );
};

export default Wallet;
