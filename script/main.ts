
let menu: string[] = ['salad','fish','pizza','cow','dinner','chicken'];
let menuPrice: number[] = [4,10,7.50,21,31,13];
let [a,b,c,d,e,f]= menu;
let [A,B,C,D,E,F]= menuPrice;


let commentP: string[] = [];

function comment() :void {
	 ncmt = (document.getElementById('cmt')).value;
	 newdiv = document.createElement("p");
     newdiv.appendChild(document.createTextNode(ncmt));
     commentP.push(newdiv);

     // document.getElementById("comment").innerHTML=(commentP[0])
	for (var value of commentP) {
    $('#comment').html(value);
    $('#cmt').text('sdkn');
}
  
  }


