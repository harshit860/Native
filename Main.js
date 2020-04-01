import React, { Component } from 'react'
import {Text,Button,SafeAreaView} from 'react-native'

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            arr:[
                    {
                    value:'Home',
                    flag:'display1'
                    },
                    {
                        value:'Categories',
                        flag:'display2'
                        },
                        {
                            value:'About',
                            flag:'display3'
                            }
                        ],
            display1:false,
            display2:false,
            display3:false
        }
    }

    setComp = (val1) =>{

        this.state.arr.map((elem)=>{
            let check  = elem.flag
            if(check != val1)
            {
                this.setState({
                    check:!this.state.check
                      
                })
            }
        })
        this.setState({
            [val1]: !this.state[val1]
        })
        console.log(this.state)
    }
    
    render() {
        let a = this.state.arr.map((elem) =>{
            return <SafeAreaView style={{flexGrow:1}}><Button title={elem.value} onPress={()=>this.setComp(elem.flag)} color="grey"></Button>
                </SafeAreaView>
        })
        return (
            <>
            <SafeAreaView style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                 {a}
            </SafeAreaView>
                <SafeAreaView>
                    {this.state.display1 ? (<><Text>Harshit</Text></>) : (<></>) }
                    {this.state.display2 ? (<><Text>Harshit2</Text></>) : (<></>) }
                    {this.state.display3 ? (<><Text>Harshit3</Text></>) : (<></>) }
                </SafeAreaView>
            </>
        )
    }
}
