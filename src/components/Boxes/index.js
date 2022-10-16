import React from "react";
import Table from 'react-bootstrap/Table';
import classes from "./boxes.module.css"
import Buttom from "react-bootstrap/Button"
import { useNavigate } from 'react-router-dom';

const TableBox = (props) => {
    const { currentTableData } = props;
    const navigate = useNavigate();
    let item = {
        dayChange: -7.02843359,
        fullName: "1inch",
        id: 41134331,
        name: "1INCH",
        price: 0.58364982,
        rank: 91,
        symbol: "1INCHBUSD",
        tags: ['innovation-zone', 'defi']
    }
    const clickNavigate = (e, item) => {
        e.preventDefault();
        navigate('graph', { state: { id: item.id, name: item.name } })
        // console.log('clidked')
    }
    return (<>
        <Table className={classes.container} size="sm" >
            <thead>
                <tr>
                    <th><div>Ranks</div></th>
                    <th><div>Full Name</div></th>
                    <th><div>Name</div></th>
                    <th><div>Day Change</div></th>
                    <th><div>Price</div></th>
                    <th><div>Symbol</div></th>
                    <th><div>Graph</div></th>                                    
                </tr>
            </thead>
            <tbody className={classes.table_body}>
                {currentTableData?.map((item, idx) => {
                    return (<tr>
                        <td><div>{item.rank}</div></td>
                        <td><div>{item.fullName}</div></td>
                        <td><div>{item.name}</div></td>
                        <td><div>{item.dayChange}</div></td>
                        <td><div>{item.price}</div></td>
                        <td><div>{item.symbol}</div></td>
                        <td><span><Buttom onClick={(e) => { clickNavigate(e, item) }} >View</Buttom></span></td>
                    </tr>)
                })}
            </tbody>
        </Table>
    </>)
}

export default TableBox;