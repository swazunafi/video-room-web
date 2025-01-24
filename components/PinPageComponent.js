import { useEffect, useState } from 'react';
import HealthCheckComponent from './HealthCheckPop';

import { useDispatch } from 'react-redux';
import { setHealthCheck } from '@redux/features/healthCheckSlice';
import { clearPeers } from '@redux/features/peersSlice';

const PinPageComponent = () => {

  const [pin, setPin] = useState(['', '', '', '']);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handlePinChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === '') {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      if (value !== '' && index < 3) {
        document.getElementById(`pinInput-${index + 1}`).focus();
      }
    }
  };

  const handleJoinSession = () => {
    const fullPin = pin.join('');
    if (fullPin.length !== 4) {
      setError('Please enter a 4-digit PIN');
    } else {
      setError('');
      dispatch(setHealthCheck({ open: true }));
    }
  };

  useEffect(() => {
    dispatch(clearPeers());
  }, [dispatch]);

  return (
    <div>
      <ul className='sessionDateTime'>
        <li className='sessionDateTime'>Session Date:</li>
        <li className='sessionDateTime'>January 25, 2025</li>
      </ul>
      <ul className='sessionDateTime'>
        <li className='sessionDateTime'>Session Time:</li>
        <li className='sessionDateTime'>12:45 PM</li>
      </ul>
      <div className='pinHead'>Please enter the 4 digit PIN provided in the email</div>
      <div className="pinInputFormBlk">
        <div className="pinInputContainer">
          {pin.map((digit, index) => (
            <input
              key={index}
              id={`pinInput-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handlePinChange(e, index)}
              maxLength="1"
              className="pinInput"
            />
          ))}
        </div>
        <button onClick={handleJoinSession} className="btnJoin">Join Session</button>
        {error && <p className="error-message">{error}</p>}
      </div>
      <ul className='StartTimerNoteBlk'>
        <li className='StartTimerNote'>
          <div className='timerLabel'>Time to Start: </div>
          <ul className='timer'>
            <li className='hour'>05</li>
            <li className='minute'>22</li>
            <li className='second'>10</li>
          </ul>
        </li>
        <li className='StartTimerNote'>
          You can join the session 5 minutes before the start time
        </li>
      </ul>

      {/* Health Check Pop Screen */}
      <HealthCheckComponent />

    </div>
  );
};

export default PinPageComponent;
