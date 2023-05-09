import {Html, useProgress} from '@react-three/drei'
const Loader =()=>{
    const {progress} = useProgress();
    return(
        <Html >
            <p style={{
                fontSize: 14,
                color: "#F1F1F1",
                fontWeight: 800,
                marginTop: 40,
            }}>{progress.toFixed(2)}%</p>
        </Html>
    )
}
export default Loader;