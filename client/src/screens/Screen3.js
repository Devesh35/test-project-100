import Header from "../components/Header";
import { COLOR } from "../Constants";

const Screen3 = () => {

    const header = () => <>
        <div className='container-fluid p-0 m-0 text-center' style={{ backgroundColor: COLOR.veryLightGray }}>
            <div className='row p-4 m-0'>

            </div>
        </div>
    </>

    return (
        <>
            <Header screen={3} />
            {header()}
        </>
    )
};

export default Screen3;