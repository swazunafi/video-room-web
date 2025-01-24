

import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setHealthCheck } from '@redux/features/healthCheckSlice';
import { setPeer } from '@redux/features/peersSlice';

const HealthCheckComponent = () => {

    const dispatch = useDispatch();
    const healthCheck = useSelector((state) => state.healthCheckReducer);
    const peerId = uuidv4();
    const router = useRouter();

    if (!healthCheck?.open) return null;

    const joinRoom = (e) => {
        e.preventDefault();
        let peer = {
            id: peerId, name: "Ramakrishna", self: true, chat: false,
            note: false, webcam: false, mic: false
        };
        dispatch(setPeer({ [peerId]: peer }));
        dispatch(setHealthCheck({ open: false }));
        router.push('/videoRoom');
    }

    const closeHealthCheck = (e) => {
        e.preventDefault();
        dispatch(setHealthCheck({ open: false }));
    }

    return (
        <>
            <div className="HealthCheckPop">
                <div className="HealthCheckPopContent">
                    <div className="HC_Heading">Checking your device health for LIVE sessions</div>
                    <div className="popButtons">
                        <button onClick={closeHealthCheck} className="btnCancel">Cancel</button>
                        <Link href="#" onClick={(e) => joinRoom(e)}>
                            <button className="btnConfirm">Join</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HealthCheckComponent;