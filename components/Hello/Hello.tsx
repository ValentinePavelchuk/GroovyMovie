import {ReactElement} from "react";

interface IHelloProps {
    title:string;
}

const Hello = ({title}: IHelloProps):ReactElement => {
    return (
        <div>{title}</div>
    )
}
export default Hello;