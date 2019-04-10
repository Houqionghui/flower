import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, Route, Switch} from 'react-router-dom';
import Addcart from './addcart/Addcart';
import Emptycart from './addcart/Emptycart';
import Daifukuan from './addcart/Daifukuan';
import '../../static/css/Addcart.less';
import action from '../../store/action/index'
import {queryShopCart}  from '../../api/product'


class Shopping extends Component {

    constructor(props) {
        super(props);
        this.state={
            data:[]
        }

    }
    componentDidMount(){
        setTimeout(async()=>{
            let result=await queryShopCart();
            this.setState({
                data:result.data
            })

        },50)



    }


    render() {
        return (
            <div>
                {this.state.data.length!==0? <Addcart/>:<Emptycart/>}
                {/*<Daifukuan/>*/}
            </div>
        )
    }
}

export default connect(state => ({...state.shopCart}), action.shopcart)(Shopping)
