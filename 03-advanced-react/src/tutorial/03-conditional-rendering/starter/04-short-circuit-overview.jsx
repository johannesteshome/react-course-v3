import { useState } from 'react';

const ShortCircuitOverview = () => {

  const [truth, setTruth] = useState("True")
  const [falsey, setFalsey] = useState("")

  return <div>
    
    <h4>Falsey And: {falsey && 'Output'}</h4>
    <h4>Falsey OR: {falsey || 'Output'}</h4>
    <h4>Truthey And: {truth && 'Output'}</h4>
    <h4>Truthey OR: {truth || 'Output'}</h4>
  </div>;
};
export default ShortCircuitOverview;
