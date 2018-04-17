/**
 * Created by zhangguangpeng on 2018/4/7.
 */
import React from 'react';
import {Row, Col} from 'antd'
import { Menu, Icon } from 'antd';

export default class MobileFooter extends React.Component{

    render(){
        //24格格栅布局
        return(
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="footer">
                        &copy;&nbsp;2018 ReactNews. All Rights Reserved.
                    </Col>
                    <Col span={2}>

                    </Col>
                </Row>
            </footer>
        );
    };
}
