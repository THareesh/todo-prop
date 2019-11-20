import React from 'react'
import Form from './form'
import List from './list';



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      todoList: [],
      isUpdate:false,
      id:null
    }
  }
  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.id !==null){
           this.update(this.state.id)
    }else {
      if(this.state.name.length === 0){
        alert("please add todo lists")
      }else{
        if(this.state.todoList.includes(this.state.name)){
          alert("todo already exists")
        }else{
          this.setState({
            todoList:this.state.todoList.concat(this.state.name),name:''
          })
        }
      }
    }
  }
  delteButton = (i) => {
    this.setState({todoList:this.state.todoList.filter((v,k)=> k!==i),name:''})
  }
  editButton = (i, j) => {
    this.setState({
      isUpdate:true ,id:i,name:j
    })
  }
  update =(id)=>{
     const copyData = [...this.state.todoList]
     copyData[id] = this.state.name;
     this.setState({
      todoList:copyData,
      name:'',
      id:null
     })
  }
  removeAll = ()=>{
     this.setState({
      todoList : []
     })
  }

  render() {
    return (
      <React.Fragment>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          id = {this.state.id}
          deleteAll={this.removeAll}
        />
         <hr />
        <List TodoList={this.state.todoList}
          delteButton={this.delteButton}
          editButton={this.editButton}
        />
      </React.Fragment>
    )
  }
}

export default Main