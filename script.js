var data= {

    chatinit:{

        title: ["Hello..!","How can I assist you today?","Kindly select option from below..!"],

        options: ['orders','return','refund','payment','others']

    },



    orders: {

        title:["Sure...","I'm currently detecting 4 active orders in this month.","Please select one of it to know more.","(select others to talk with our agent)"],

        options:['order_1','order_2','order_3','order_4','Others'],

        url : {   

        }

    },



    return: {

        title:["Working on it..","Oh!, I'm seeing only two of your orders are eligible for return.","Rest are expired to return policy.","Select which you want to return.!","(select others to talk with our agent)"],

        options:['shirt (order_1)','smart watch (order_4)','others'],

        url : {

        }

    },



    refund: {

        title:["On it..","Got it,I'm seeing you have requested refund for 2 orders till now.select from below for which you want to Check details of..","(select others to contact our agent)"],

        options:['toy car(order_5)','silver chain(order_6)','others'],

        url : {           

        }

    },



    payment: {

        title:["Sure..","We accept various types payment methods , Such as","Credit cards","Debit cards","E-Wallets","And don't worry, we also accept Cash on Delivery(COD).","(select others to talk with our agent)"],

        options: ['others'],

        url : {

        }

    },



    order_1: {

        title: ["yay..!!","It's look like your Order_1 (shirt) has been delivered successfully.","Feel free to submit a review about it.","(select others to contact our agent"],

        options: ['orders','others'],

        url : {

        }

    },



    order_4: {

        title: ["yay..!!","It's look like your Order_4 (smart watch) has been delivered successfully.","Feel free to submit a review about it.","(select others to contact our agent"],

        options: ['orders','others'],

        url : {

        }

    },



    order_2: {

        title: ["Hmm..","Your order_2 (mobile) has been accepted by our seller.","I'll update you soon.stay tuned..","(select others to contact our agent"],

        options: ['orders','others'],

        url: {

        }

    },



    order_3: {

        title: ["Hmm..","It shows that the order_3 (earphones) is out for delivery","It may reach you at any moment now. Be patience..","(select others to contact our agent)"],

        options: ['orders','others'],

        url: {

        }

    },



    shirt: {

        title: ["Hurray..!","You sucessfully placed return request for order_1(shirt)","Our delivery agent will come shortly to pick up the order.","(select others to contact our agent)"],

        options: ['others'],

        url: {

        }

    },



    smart: {

        title: ["Hurray..!","You sucessfully placed return request for order_4(smart watch)","Our delivery agent will come shortly to pick up the orders.","(select others to contact our agent)"],

        options: ['others'],

        url: {

        }

    },



    toy: {

        title: ["Hurray..!","It's look like the money for the toy car(order_5) has been refunded already.!","Try checking your transaction history of your bank Once.","(select others to contact our agent)"],

        options: ['silver chain(order_6)','others'],

        url: {

        }

    },



    silver: {

        title: ["hmm..","Sorry for the delay of the refund for the order_6(silver chain).","The money should reflect in your bank account within a week or so!","(select others to contact our agent)"],

        options: ['toy car(order_5)','others'],

        url: {

        }

    },



    others: {

        title: ["I see that the number you have has used for previous orders is :","+91 xxx-xxx-7374","We will reach out to you through this number shortly.","If you have any other questions or concerns, please don't hesitate to ask.","To start a new chat, please click the refresh button above."],

        options:[],

    },

    

}



document.getElementById("init").addEventListener("click",showChatBot);

var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;



function showChatBot(){

    console.log(this.innerText);

    if(this.innerText=='START CHAT'){

        document.getElementById('test').style.display='block';

        document.getElementById('init').innerText='CLOSE CHAT';

        initChat();

    }

    else{

        location.reload();

    }

}



function initChat(){

    j=0;

    cbot.innerHTML='';

    for(var i=0;i<len1;i++){

        setTimeout(handleChat,(i*500));

    }

    setTimeout(function(){

        showOptions(data.chatinit.options)

    },((len1+1)*500))

}



var j=0;

function handleChat(){

    console.log(j);

    var elm= document.createElement("p");

    elm.innerHTML= data.chatinit.title[j];

    elm.setAttribute("class","msg");

    cbot.appendChild(elm);

    j++;

    handleScroll();

}



function showOptions(options){

    for(var i=0;i<options.length;i++){

        var opt= document.createElement("span");

        var inp= '<div>'+options[i]+'</div>';

        opt.innerHTML=inp;

        opt.setAttribute("class","opt");

        opt.addEventListener("click", handleOpt);

        cbot.appendChild(opt);

        handleScroll();

    }

}



function handleOpt(){

    console.log(this);

    var str= this.innerText;

    var textArr= str.split(" ");

    var findText= textArr[0];   

    document.querySelectorAll(".opt").forEach(el=>{

        el.remove();

    })

    var elm= document.createElement("p");

    elm.setAttribute("class","test");

    var sp= '<span class="rep">'+this.innerText+'</span>';

    elm.innerHTML= sp;

    cbot.appendChild(elm);





    console.log(findText.toLowerCase());

    var tempObj= data[findText.toLowerCase()];

    handleResults(tempObj.title,tempObj.options,tempObj.url);

}



function handleDelay(title){

    var elm= document.createElement("p");

        elm.innerHTML= title;

        elm.setAttribute("class","msg");

        cbot.appendChild(elm);

}



function handleResults(title,options,url){

    for(let i=0;i<title.length;i++){

        setTimeout(function() {

            handleDelay(title[i]);

        }, i*500);

    }



    const isObjectEmpty = (url) => {

        return JSON.stringify(url) === "{}";

    }



    if(isObjectEmpty(url) === true){

        console.log("having more options");

        setTimeout(function() {

            showOptions(options);

        }, title.length*500);

    } else {

        console.log("end result");

        setTimeout(function() {

            handleOptions(options, url);

        }, title.length*500);

    }

}



function handleOptions(options,url){

    for(var i=0;i<options.length;i++){

        var opt = document.createElement("a");

        opt.className = "m-link";

        opt.href = url[i];

        opt.target = "_blank";

        opt.textContent = options[i];

        var optSpan = document.createElement("span");

        optSpan.className = "opt";

        optSpan.appendChild(opt);

        cbot.appendChild(optSpan);

    }

    handleScroll();

}



function handleScroll(){

    var elem= document.getElementById('chat-box');

    elem.scrollTop= elem.scrollHeight;

}
