import { Component } from 'react';
import check from './yellowpen.jpg';



export class PlanList extends Component{

    state={
        userInput:"",
        planList:[],
        image: check

    }
    // boxClicked (){
    //     this.setState({
    //         image:checked
    //     })
    // }

    // onChangeEvent(event){
    onChangeEvent(e){
        // console.log(event.target.value);
        this.setState({userInput: e});
    }

    addItem(input){
        if (input === ''){
            alert("Please enter an item")
        }else{
        let listArray = this.state.planList;
        listArray.push(input)
        this.setState({planList: listArray, userInput:''})
        console.log(listArray)
    }
}


deleteItem(){
    let listArray = this.state.planList;
    listArray = [];
    // опусташаем массив 
    // есть и второй способ
    // listArray.length = 0
    this.setState({planList: listArray})
}

//ставим прослушку и даем назыание классу 
    crossedWord(event){
        const li = event.target;
        li.classList.toggle('crossed');
       
       
       
        // img onClick={this.boxClicked} 

      
       
     

    }


    onFormSubmit(e){
        e.preventDefault();

    }

    render(){
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className='container'>
                <input className='input'
                type="text"
                 placeholder='Your plan' 
                //  onCange чтобы мы могли понять как меняется текст с каждым нажатием 
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}
                // значение валью чему равно что пишет пользователь
                />
            </div>
            <div className='container'>
               
            </div>

            <ul className='listcontainer'>
                {/* {this.state.groceryList.map((item, index) => (
                    <li key={index}> (item) </li>
                ))} */}
                 {this.state.planList.map((item, index) => (
                    <li onClick= {this.crossedWord} key={index}> 
                    {/*   */}
                    {/* <img src={check} width="30px" alt="check-box"/> */}
                    {/* <img onClick={this.boxClicked} src={this.state.image} width="30px" alt="check-box"/> */}
                    <img src={check} width="30px" alt="check-box"/>
                    
                   

                    { item }</li>
                 ))}
               
            </ul>

            <div className="container">
            <button onClick={() => this.addItem(this.state.userInput)} className='btn add'>
                    Add
                </button>
            <button onClick = {()=> this.deleteItem()} className="btn delete">Delete</button>
            </div>

            {/* дальше прописыываем перед клоссворд 
            аналогисно как прописывали добавить инпут
             */}

            </form>


            </div>

        )
    }
}


// import { Component } from "react";


// export class PlanList extends Component {

   

//     state={
//          userInput:"",
//          planList: []
//     }

//     onChangeEvent(e){

//         // this.setState  отразить изменени сочстояния user input

//         this.setState({userInput: e});
//         // console.log(e)


//     // onChangeEvent(event){
//         // console.log(event.target.value)
//     }

//     addItem(input){
//         //могут input слово назвать как хочу
//         //создаем переменную Будет отвечать за список куда будет все попадать
        
//         //в пуш пишем инпут то что добавляет пользователь

//         let listArray = this.state.planList;
//         listArray.push(input)
//         console.log(listArray)

//     }

//     render(){
//         return(
//             <div>
//                 <form>
//                     <div className="container">
//                         <input type="text" 
//                         placeholder="Your plan"
//                         // onChange={this.onChangeEvent}
//                         onChange={(e)=>{this.onChangeEvent(e.target.value)}}
//                         value={this.state.userInput}
//                         //чтобы знать чему равно значение валью чему равно что пишет пользователь 

//                         />

//                     </div>
//                     <div className="container">
//                         <button onClick={() => this.addItem(this.state.userInput)} className='btn add'>
//                             Add
//                         </button>

//                     </div>




//                 </form>
                

//             </div>
           

//         )
       
//     }


// }