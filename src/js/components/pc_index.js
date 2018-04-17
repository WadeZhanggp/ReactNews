/**
 * Created by zhangguangpeng on 2018/4/5.
 */
import React from 'react';
import {Row, Col} from 'antd'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
import PCNewsContainer from './pc_newscontainer';

export default class PCIndex extends React.Component{
    render(){
        //24格格栅布局
        return(
            <div>
                <PCHeader></PCHeader>
                <PCNewsContainer></PCNewsContainer>
                <PCFooter></PCFooter>
            </div>
        );
    };
}

