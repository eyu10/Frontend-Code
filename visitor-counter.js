function VisitorCounter(){
  fetch("arn:aws:lambda:us-east-1:967754864025:function:VisitorCounter")
    .then(response => response.text())
    .then((body) => {
      document.getElementById("visitor-counter").innerHTML=body
    })
}