import React, { useEffect }  from 'react';
import Layout from '@theme/Layout';

export default function FoxCredit() {
  useEffect(() => {
    const timeout = setTimeout(() => {
        window.location.replace("https://link.foxwallet.com/credit");
    }, 1);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Layout title="Fox Credit" description="Fox Credit">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
      </div>
    </Layout>
  );
}