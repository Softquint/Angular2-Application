import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: '/partials/app.html'
})

export class AppComponent {
    name = "Welcome To Regular Saver";
    LangList = [
        { 
          id:"01",
          title : "JavaScript",
          description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
        },
        { 
          id:"02",
          title : "jQuery",
          description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
        },
        { 
          id:"03", 
          title : "Angularjs",
          description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
        },
        { 
          id:"04", 
          title : "Nodejs",
          description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
        }
      ]

      viewItem(event , value){
        console.log(event)
        event.className = "list-group-item active"
        console.log(value);
      }
      editItem(event , value){
        console.log(value);
      }
      deleteItem(event , value){
         console.log(value);
      }
}