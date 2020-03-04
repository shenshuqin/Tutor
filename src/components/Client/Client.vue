<template>
  <div class="home">
       <div class="container">
        <div class="row">&nbsp;</div>
        <div class="row">
            <div class="col-2">User</div>
            <div class="col-4"><input type="text" id="userInput" /></div>
        </div>
        <div class="row">
            <div class="col-2">Message</div>
            <div class="col-4"><input type="text" id="messageInput" /></div>
        </div>
        <div class="row">&nbsp;</div>
        <div class="row">
            <div class="col-6">
                <input type="button" id="sendButton" value="Send Message" />
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <hr />
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <ul id="messagesList"></ul>
        </div>
    </div>
  </div>
    </template>
    <script>
    // import Hubs from '../signalr/hubs'
    export default {
    name: "Client",
    data() {
        return {
           
        }
    },
    mounted() {
        this.connectServer();
    },
    methods: {
        connectServer() {
        var connection = new signalR.HubConnectionBuilder().withUrl("https://9ysep.com:8066/chatHub").build();
        //Disable send button until connection is established
        document.getElementById("sendButton").disabled = true;
        connection.on("broadcastMessage", function (message) {
            console.log("0");
            // var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
             var arr = [];
            for (let i in message) {
                arr.push(message[i]); //属性
            }
            var user = arr[1];
            var msg = arr[2];
            var type = arr[0]
            var encodedMsg =typt + user + " says " + msg;
            console.log(encodedMsg);
            var li = document.createElement("li");
            li.textContent = encodedMsg;
            document.getElementById("messagesList").appendChild(li);
        });
        connection.start().then(function () {
            document.getElementById("sendButton").disabled = false;
        }).catch(function (err) {
            return console.error(err.toString());
        });

        document.getElementById("sendButton").addEventListener("click", function (event) {
            var user = document.getElementById("userInput").value;
            var message = document.getElementById("messageInput").value;
            var type = 'set';
            // class Msg {
            //     constructor(Type,Username,Content) {
            //         this.Type = Type;
            //         this.Username = Username;
            //         this.Content = Content;
            //     }
            // }
            // var msg =new Msg(user,message,type);
            var msg = {
                Username:user,
                Content:message
            };
            // console.log(msg);
            //  var model= new Object();
            //      model.user = user;
            //      model.message = message;
            //      console.log(model);
            connection.invoke("Send", msg).catch(function (err) {
                return console.error(err.toString());
            });
            event.preventDefault();
        });
        },
    }
    }
    </script>

    <style>

    </style>