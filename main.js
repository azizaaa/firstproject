function loadjson(url)
{
  return new Promise(function(resolve,reject){
    return fetch(url).then(function(response){
      if(response.ok){
        resolve(response.json());
      } else {
        reject(new Error('error'));
      }
    })
  })
}

var myfile=loadjson("data.json");
myfile.then(function(data){
  console.log(data);
  career(data.career);
education(data.education);
})

var content=document.querySelector(".content");
function career(car){
  var h2=document.createElement("h2");
  h2.textcontent="career objective"
  content.appendChild(h2);
  // var new Promise(function(resolve, reject)
  // });
  var p=document.createElement("p");
  p.textContent=car.data;
  content.appendChild(p);

}

function education(edu){
  var h2=document.createElement("h2");
  h2.textContent="Education qualification";
  content.appendChild(h2)
  var hr=document.createElement("hr")
  content.appendChild(hr)
  console.log(edu.length);
  var ul= document.createElement("ul");
  content.appendChild(ul);
  for(var i=0; i<edu.length; i++){
    var li=document.createElement("li");
    li.textContent=edu[i].degree;
    ul.appendChild(li);
    var li2= document.createElement("p");
    li2.textContent=edu[i].college;
    ul.appendChild(li2);
    var p=document.createElement("p");
    p.textContent=edu[i].data;
    ul.appendChild(p);
  }
}
