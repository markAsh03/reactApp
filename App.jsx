import React from 'react';

import Tabs  from 'antd';
const TabPane = Tabs.TabPane;

class App extends React.Component {
   render() {
      return (
         <div>
            <CruiseComponent />
         </div>
      );
   }
}

class CruiseComponent extends React.Component{

    render(){
        return (<Tabs onChange={callback} type="card">
            <TabPane tab="DASHBOARD" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="MY CRUISE" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="AGENTS" key="3">

            </TabPane>
            <TabPane tab="HELP" key="4">Content of Tab Pane 3</TabPane>
        </Tabs>);
    }
}

/**
 *agent组件
 */
class AgentsComponent extends React.Component {

    constructor(){
        super();

        this.state = {
           items:[
               {"":"","":"","":""},
               {},
               {},
               {}
           ]
        };
    }

    render(){
        return (<div className="outer-ban">
            <div className="header-ban">
                <span>Agents</span>
                <MyButtonCompoent btnName="All" btnClickHandle={null}/>
                <MyButtonCompoent btnName="Physical" btnClickHandle={null}/>
                <MyButtonCompoent btnName="Virtual" btnClickHandle={null}/>
            </div>
            <div className="body-ban">
                <div className="body-left">
                    <ItemOfAgentComponent sourceData={this.state}/>
                </div>
                <div className="body-right">
                    <div>Summery</div>
                    <div className="line-style"></div>
                    <div>Building 2</div>
                    <div>idle 2</div>
                    <div>History</div>
                    <div className="line-style"></div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                </div>
            </div>
        </div>);
    }
}


/**
 * agent 的条目
 * < ItemOfAgentComponent sourceData={} />
 */
class ItemOfAgentComponent extends  React.Component{

    //初始化
    constructor(){
        super();
        this.state = this.props.sourceData;
    }

    render(){

        let currentData = this.state;

        let itemName = currentData.itemName;
        let itemWay = currentData.itemWay;
        let itemIp = currentData.itemIp;
        let itemDirectory = currentData.itemDirectory;
        let allResources = currentData.allResources;

        let resource = [];
        if(allResources){
            allResources.map((res) =>{
                resource.push(<ResourceComponent resourceName={res.resourceName}
                                                 deleteResourceHandle={this.deleteResource}/>);
            });
        }

        return (<div className="item-div">
            <div className="item-icon"></div>
            <div className="item-desc">
                <div className="agent-item-message">
                    <span className="name">{itemName}</span> |
                    <span className="way">{itemWay}</span> |
                    <span className="ip">{itemIp}</span> |
                    <span className="directory">{itemDirectory}</span>
                </div>
                <div className="agent-item-ctr">
                    <AddResourceComponent addResourceHandle={this.addResource}/> |
                    <span className="resource">
                        <span>Resources:</span>
                        {resource}
                    </span>
                </div>
            </div>
        </div>)
    }

    /**
     * 添加一个资源
     */
    addResource(event){

    }

    /**
     * 删除一个资源
     * @param event
     */
    deleteResource(event){

    }
}

/**
 * 添加一个资源的组件
 * < AddResourceComponent  addResourceHandle={} />
 */
class AddResourceComponent extends  React.Component{

    render(){
        return (<span className="add-resource" onClick={this.props.addResourceHandle}>
            <span>{"+ Specify Resources"}</span>>
        </span>);
    }
}

/**
 * 删除一个资源的组件
 * < ResourceComponent  deleteResourceHandle={} resourceName={}/>
 */
class ResourceComponent extends React.Component {

    render(){

        return (<div className="a-resource">
            <span className="resource-name">{this.props.resourceName}</span>
            <span className="resource-delete" onClick={this.props.deleteResourceHandle}></span>
        </div>);
    }
}

/**
 *  自定义的按钮组件
 *  <MyButtonCompoent btnName={} btnClickHandle={} />
 */
class MyButtonCompoent extends React.Component{

    render(){
        let btnName = this.props.btnName;
        let btnClassName = "my-button "+ this.props.btnClassName;

        return (<span className="button-crt">
            <span className={btnClassName} onClick={this.props.btnClickHandle}>{btnName}</span>
        </span>);
    }
}



export default App;
