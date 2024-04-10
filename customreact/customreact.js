function customRender(reactElem,container){
    
    /*
    const domElement=document.createElement(reactElem.type)
    
    domElement.innerHTML= reactElem.children
    domElement.setAttribute('href',reactElem.props.href)
    domElement.setAttribute('target',reactElem.props.target)
      container.appendChild(domElement)
*/  
const domElement=document.createElement(reactElem.type)
domElement.innerHTML= reactElem.children
for (const prop in reactElem.props) {
    if (prop==='children') continue;
    domElement.setAttribute(prop,reactElem.props[prop])

}
container.appendChild(domElement)
}



const reactElem={
    type:'a',
    props:{
        href:'www.google.com',
        target:'_blank'
    },
    children:'click on me to visit google'
}

const mainContainer=document.querySelector('#root')

customRender(reactElem,mainContainer)
